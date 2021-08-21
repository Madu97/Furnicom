import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import { GrStar } from 'react-icons/gr'
import { AiOutlineSearch } from 'react-icons/ai'
const stylenone = { color: "grey", margin: "2px" }
const stylegold = { color: "gold", margin: "2px" }


const SearchProducts = () => {

    const [val, setVal] = useState();
    const [persons, setpersons] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getproducts');

            setpersons(response.data);

        };
        fetchData();
    }, []);

    function searchit(e) {
        //setVal(e.target.value);

        axios.get('http://localhost:3001/searchproducts', {
            params: {
                word: e.target.value
            }
        }).then((response) => {
            //console.log(response);
            setpersons(response.data)
        })

        setVal(e.target.value);

    }

    return (
        <div className="justify-content-center">
            <div className="row">
            <div class="col-6">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav fs-15">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li class="nav-item" className={(window.location.pathname.substr(1) === 'allproducts') ? ('active font-weight-bold rounded bg-grey'): ('')}>
                                <a class="nav-link"  href="/allproducts">Products<span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-4 d-flex ">
                    <input
                        className="form-control"
                        onInput={e => searchit(e)}
                        placeholder="Search"
                    />
                    <button className="btn btn-primary d-flex ml-3">Search <div className="ml-2"><AiOutlineSearch size={22}/></div></button>
                </div>
            </div>
           <div className="row d-flex mt-5 justify-content-center">
          {(val) ? ( <p>Showing results for "{val}"</p>) : ('')}
           </div>


                    {(persons[0]) ? (
                                                    <div className="container-fluid text-center ">
                                                    <div className="row ml-5 pl-4 justify-content-start align-items-center   flex-row">
                                        {persons.map(person =>
                                                <div className="col-lg-2 col-md-4 col-sm-8 col-xs-12 m-5 justify-content-around align-items-center border rounded" key={person.id}>
                                                    <div className="d-flex pt-3 justify-content-center">
                                                        <img src={person.thumb} className="imgstyle img-thumbnail" />
                                                    </div>
                                                    <hr></hr>
                                                    <div className="">
                                                        <p className="d-flex justify-content-center fs-22 font-weight-bold">{person.name}</p>
                                                        <p className="d-flex justify-content-center">{person.description}</p>
                                                        <p className="price d-flex justify-content-center"><span>Rs.</span>{person.price}</p>
                                                        <p>
                                                            <GrStar size={25} style={(person.total_ratings / person.total_people_rated) > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 1 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 2 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 3 > 0 ? (stylegold) : stylenone} />
                                                            <GrStar size={25} style={(person.total_ratings / person.total_people_rated) - 4 > 0 ? (stylegold) : stylenone} />
                                                        </p>
                                                        <Link to={location => `/product/${person.id}`}><div /*onClick = {() =>addItem(person)}*/ className="row font-weight-bold d-flex btn btn-warning justify-content-center align-items-center">
                                                            BUY NOW
                        
                                                            </div></Link>
                                                    </div>
                                                </div>
                                            )}
                                            </div>
            </div>
                    ) :(<div className=" row justify-content-center"><div className=" bg-danger fc-white rounded fs-30 d-flex p-1 justify-content-center col-5">No Results Found</div></div>)}

        </div>
    );
}

export default SearchProducts;
