import React from 'react';
import product_card from "../../Data/Product_data"
import { TiShoppingCart } from 'react-icons/ti';


const CustomerNewArrival = () => {
    const listItems = product_card.map((item) =>
        <div className="justify-content-around ml-5 align-items-center border rounded" key={item.id}>
            <div className="d-flex pt-3 justify-content-center">
                <img src={item.thumb} className="imgstyle img-fluid" />
            </div>
            <hr></hr>
            <div className="">
                <p className="d-flex justify-content-center fs-22 font-weight-bold">{item.product_name}</p>
                <p className="d-flex justify-content-center">{item.description}</p>
                <p className="price d-flex justify-content-center">{item.price}<span>{item.currency}</span></p>
                <div className="font-weight-bold d-flex btn btn-sm btn-warning justify-content-center align-items-center">
                                ADD TO CART 
                                <div className="pl-2">
                                <TiShoppingCart size={30}/>
                                </div>
                </div>
            </div>
        </div>
    );


    return (
            <div className="container-fluid text-center border rounded mt-2">

                <div className="row bg-side-bar d-flex justify-content-center fc-white">
                    <h2>New Arrivals</h2>
                </div>
                <div className="row justify-content-start  align-items-center   flex-row">
                            {listItems}
                </div>
            </div>
    )
}

export default CustomerNewArrival;