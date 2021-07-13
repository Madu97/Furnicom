import React from 'react';
import product_card from "../../../Data/Product_data"
import { TiShoppingCart } from 'react-icons/ti';


const NewArrival = () => {
    const listItems = product_card.map((item) =>
        <div className="col-lg-2 col-md-4 col-sm-8 col-xs-12 m-5 justify-content-around align-items-center border rounded" key={item.id}>
            <div className="d-flex pt-3 justify-content-center">
                <img src={item.thumb} className="imgstyle img-thumbnail" />
            </div>
            <hr></hr>
            <div className="">
                <p className="d-flex justify-content-center fs-22 font-weight-bold">{item.product_name}</p>
                <p className="d-flex justify-content-center">{item.description}</p>
                <p className="price d-flex justify-content-center">{item.price}<span>{item.currency}</span></p>
                <div className="row font-weight-bold d-flex btn btn-warning justify-content-center align-items-center">
                                ADD TO CART 
                                <div className="pl-2">
                                <TiShoppingCart size={30}/>
                                </div>
                </div>
            </div>
        </div>
    );


    return (
            <div className="container-fluid text-center ">
                <div className="row  pl-5 ml-5 justify-content-start align-items-center   flex-row">
                            {listItems}
                </div>
            </div>
    )
}

export default NewArrival;