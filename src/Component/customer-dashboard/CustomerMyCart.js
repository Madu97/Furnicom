import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import { TiShoppingCart } from "react-icons/ti";

import { Modal } from "antd";
import { ListGroup } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";

const CustomerMyCart = (userData) => {
  const [Cartdata, setCartdata] = useState([]);
  const [Productdata, setProductdata] = useState([]);
  const [payment, setPayment] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  const [successPay, setSuccessPay] = useState(false);
  const [loadingPay, setLoadingPay] = useState(false);

  const [ch, setch] = useState(0);
  const [msg, setmsg] = useState();
  const [idd, setidd] = useState();

  const userid = userData.userData.id;

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    console.log(paymentResult.id);

    const response2 = axios.get("http://localhost:3001/addtoorder", {
      params: {
        order_id: paymentResult.id,
        customer_id: userid
      },
    });

    Cartdata.map((person, index) => addToorderItems(person.product_id, person.quantity, index, paymentResult.id));

    const response5 = axios.get("http://localhost:3001/deletecart", {
      params: {
        customer_id: userid
      },
    });

    window.location.reload();
    // handle order after the successfull payment here
  };

  function addToorderItems(pid, quantity, item_no, payid) {

    /*console.log(pid)
    console.log(quantity)
    console.log(item_no+1)*/

    const response3 = axios.get("http://localhost:3001/addtoorderitems", {
      params: {
        product_id: pid,
        qtn: quantity,
        item_number: item_no + 1,
        payment_id: payid
      },
    });

  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/getcart", {
        params: {
          id: userid,
        },
      });

      setCartdata(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [userid]);

  useEffect(() => {
    console.log("Cart data ->  " + Cartdata);

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:3001/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!Cartdata || successPay) {
      setSuccessPay(false);
      setLoadingPay(false);
    }
    if (!window.paypal) {
      addPayPalScript();
      console.log("kk");
    } else {
      setSdkReady(true);
    }
  }, [successPay, Cartdata, payment]);

  function increaseQuantity(
    customer_id,
    product_id,
    quantity,
    available_quantity
  ) {
    if (quantity < available_quantity) {
      axios
        .get("http://localhost:3001/increasequantity", {
          params: {
            cid: customer_id,
            pid: product_id,
          },
        })
        .then((response) => {
          window.location.reload();
        });
    } else {
      setidd(product_id);
      setmsg("Available Items not enough");
    }
  }

  function decreaseQuantity(customer_id, product_id, quantity) {
    if (quantity >= 2) {
      axios
        .get("http://localhost:3001/decreasequantity", {
          params: {
            cid: customer_id,
            pid: product_id,
          },
        })
        .then((response) => {
          window.location.reload();
        });
    } else {
      setidd(product_id);
      setmsg("Can't decrease the quantity");
    }
  }

  function removeItem(customer_id, product_id) {
    axios
      .get("http://localhost:3001/removeitem", {
        params: {
          cid: customer_id,
          pid: product_id,
        },
      })
      .then((response) => {
        window.location.reload();
      });
  }

  var totalprice = 0;
  var totalitems = 0;
  var cart = 0;
  var deliverycharge = 0;
  var totalwithoutdel = 0;

  Cartdata.map(function (a) {
    return (totalprice += a.price * a.quantity);
  }, 0);
  Cartdata.map(function (a) {
    return (totalitems += a.quantity);
  }, 0);
  Cartdata.map(function (a) {
    return (cart += 1);
  }, 0);


  if (totalprice) {
    totalwithoutdel = totalprice;
    if (totalprice < 10000) {
      deliverycharge = 3000;
    }
    else if ((totalprice >= 10000) && (totalprice < 20000)) {
      deliverycharge = 2000;
    }
    else if ((totalprice >= 20000) && (totalprice < 30000)) {
      deliverycharge = 1000;
    }
    else if ((totalprice >= 30000) && (totalprice < 40000)) {
      deliverycharge = 500;
    }
    else if ((totalprice >= 40000) && (totalprice < 50000)) {
      deliverycharge = 300;
    }
    else {
      deliverycharge = 0;
    }

    totalprice = totalprice + deliverycharge;
  }



  return (
    <div>
      <div className="bg-palegreen font-weight-bold pl-3  fs-22 d-flex d-block justify-content-start pt-2 align-items-center mb-2 ">
        <p>
          <TiShoppingCart size={55} />
          Cart:({cart}) Total Items:({totalitems})
        </p>
      </div>
      <table className="table table-light table-hover m-0">
        {(Cartdata.length) ? '' : (<div style={{ fontSize: '30px', backgroundColor: '' }} className="row d-flex justify-content-center">No Items in the Cart.</div>)}
        {Cartdata.map((person, index) => (
          <tbody>
            <tr>
              <td>
                <img
                  src={person.thumb}
                  style={{ height: "6rem", width: "8rem" }}
                />
              </td>
              <td className=" align-middle text-center">{person.name}</td>
              <td className=" align-middle text-center">{person.price}.00</td>
              <td className=" align-middle text-center">
                Quantity: {person.quantity}
              </td>
              <td className=" align-middle text-center">
                <button
                  className="btn bgc-theme  fc-white btn-circle font-weight-bold  m-2 "
                  onClick={() =>
                    decreaseQuantity(
                      person.customer_id,
                      person.product_id,
                      person.quantity
                    )
                  }
                >
                  -
                </button>
                <button
                  className="btn bgc-theme fc-white btn-circle m-2 font-weight-bold fs-22"
                  onClick={() =>
                    increaseQuantity(
                      person.customer_id,
                      person.product_id,
                      person.quantity,
                      person.available_quantity
                    )
                  }
                >
                  +
                </button>
                <button
                  className="btn btn-danger btn-md rounded-pill m-2 ml-5"
                  onClick={() =>
                    removeItem(person.customer_id, person.product_id)
                  }
                >
                  Remove Item
                </button>
                <div
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "5px",
                  }}
                >
                  {idd == person.product_id && msg}
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="container-fluid mt-2  bg-warning mb-1 font-weight-bold p-1 d-flex mr-5 justify-content-end">
        <div className="d-block">
          <p className="fs-30">
            Sub Total<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>: Rs.
          {totalwithoutdel
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          .00
        </p>
          <p className="fs-30">
            Delivery Charge<span>&nbsp;&nbsp;</span>: Rs.
          {deliverycharge
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          .00
        </p>
          <p className="fs-30">
            Total Amount<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>: Rs.
          {totalprice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          .00
        </p>
        </div>
      </div>

      {/* <div className="d-flex mr-5 m-2 justify-content-end"> */}
      <div className="d-flex justify-content-end">
        <div style={{ width: "50%" }} >
          {/* {true && ( */}
          <ListGroup.Item>
            {!sdkReady ? null : (
              //   <Loader />
              <PayPalButton
                amount={totalprice}
                onSuccess={successPaymentHandler}
              //   onClick={() => setPayment(true)}
              />
            )}
          </ListGroup.Item>
        </div>
      </div>
      {/* <button
          className="btn btn-lg btn-primary rounded-pill pl-5 pr-5 font-weight-bold"
        >
          Pay Now
        </button> */}
      {/* </div> */}
    </div>
  );
};

/*            <div className="d-flex mr-5 m-1 justify-content-end">
                <button className="btn btn-danger" >Clear Cart</button>
            </div>*/

export default CustomerMyCart;
