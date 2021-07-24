import React from 'react';
import item1 from '../../../Assets/Images/item1.jpg';
import item2 from '../../../Assets/Images/item2.jpg';
import item3 from '../../../Assets/Images/item3.png';

const NewArrival = () => {
<<<<<<< HEAD
    const listItems = product_card.map((item) =>
        <div className="col-lg-2 col-md-4 col-sm-8 col-xs-12 m-5 justify-content-around align-items-center border rounded" key={item.id}>
            <div className="d-flex pt-3 justify-content-center">
                <img src={item.thumb} className="imgstyle img-thumbnail" />
            </div>
            <hr></hr>
            <div className="">
                <p className="d-flex justify-content-center fs-22 font-weight-bold">{item.product_name}</p>
                <p className="d-flex justify-content-center">{item.description}</p>
                <p className="price d-flex justify-content-center"><span>{item.currency}</span>{item.price}</p>
                <div className="row font-weight-bold d-flex btn btn-warning justify-content-center align-items-center">
                                ADD TO CART 
                                <div className="pl-2">
                                <TiShoppingCart size={30}/>
                                </div>
=======
    return (
        <div>
            <div class="row mb-3 fs-15  d-flex justify-content-center align-items-center ">
                <div class="col-1 d-flex justify-content-start align-items-end">
                    <button class="btn btn-lg theme-color border rounded-circle"> <i class="fa fa-arrow-left" width="20" ></i></button>
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
                </div>

                <div class=" col-10 d-flex justify-content-center align-items-center ">
                    <div class="m-2 d-block">
                        <img src={item1} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme ">Rs.4000</div>

                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>

                    <div class="m-2 d-block">
                        <img src={item2} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme font-weight-bold">Rs.4000</div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="m-2 d-block">
                        <img src={item2} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme font-weight-bold">Rs.4000</div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="m-2 d-block">
                        <img src={item3} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme font-weight-bold">Rs.4000</div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="m-2 d-block">
                        <img src={item1} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme font-weight-bold">Rs.4000</div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="m-2 d-block">
                        <img src={item2} width="200" height="250"></img>
                        <div class="d-block text-center font-weight-bold">

                            <div class="fc-darkblue font-weight-bold">School Chair</div>
                            <div class="fc-theme font-weight-bold">Rs.4000</div>
                            <div class="d-flex justify-content-center align-items-center ">
                                <div><button class="btn btn-sm bg-info fc-white font-weight-bold m-2">DETAILS</button></div>
                                <div><button class="btn btn-sm theme-color rounded-pill font-weight-bold m-2">BUY</button></div>
                            </div>
                        </div>
                    </div>



                </div>

                <div class=" col-1 d-flex justify-content-end align-items-center ">
                    <button class="btn btn-lg theme-color border rounded-circle"><i class="fa fa-arrow-right" width="20" ></i></button>

                </div>
            </div>

        </div>
    )
}

export default NewArrival;