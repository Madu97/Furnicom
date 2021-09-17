import React, { Component, useState, useEffect } from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import OrderStatusbox from "./orderStatusbox";
//import 'fontsource-roboto';
//import '../assets/css/Dashboard.css';
//import YouTubeIcon from '@material-ui/icons/YouTube';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';
import CardsHeader from './cardsHeader';
import Cards from './cards';
import axios from 'axios';
//import Graphics from '../components/Graphics';
//import TableMaterial from '../components/TableMaterial';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    iconos: {
        color: 'white'
    },
    container: {
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica: {
        marginTop: '40px'
    },
    containerTabla: {
        marginTop: '40px'
    }
}));

export default function Detailbox() {
    
    const classes = useStyles();
    const [Customerdata, setCustomerdata] = useState([])
    const [Productsdata, setProdcutsdata] = useState([])
    const [Supplierdata, setSupplierdata] = useState([])
    const [Deliverdata, setDeliverdata] = useState([])
    const [Orderdata, setOrderdata] = useState([])
    const [Salesdata, setSalesdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getallcustomercount');

            setCustomerdata(response.data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getallproductcount');

            setProdcutsdata(response.data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getallsuppliercount');

            setSupplierdata(response.data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getalldeliverercount');

            setDeliverdata(response.data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/getallordercount');

            setOrderdata(response.data);
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/gettotalsales');

            setSalesdata(response.data);
        };
        fetchData();
    },[]);

    var totalsales = 0;
    Salesdata.map(function (a) {
        return (totalsales += a.price * a.quantity);
      }, 0);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>

                </Grid>

                {Customerdata.map((person) =>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                    <CardsHeader icono={<PersonOutlineIcon className={classes.iconos} />} titulo={person.customer} texto="Total Customers" color="#41ce4c" font="white" /> 
                </Grid>
                 )} 

                {Supplierdata.map((person) =>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<PersonIcon className={classes.iconos} />} titulo={person.supplier} texto="Total Suppliers" color="#ca5959" font="white" />
                </Grid>
                )}

                {Deliverdata.map((person) =>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<LocalShippingIcon className={classes.iconos} />} titulo={person.delivery} texto="Total Delivery Persons" color="#6d4fb4" font="white" />
                </Grid>
                )}

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards icono={<MonetizationOnIcon className={classes.iconos} />} titulo="Total Sales" texto={totalsales .toString() .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} color="#6758a8" font="white" />
                </Grid>
    
                {Orderdata.map((person) =>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards icono={<ShoppingCartIcon className={classes.iconos} />} titulo="Total Orders" texto={person.orders} color="#47c261" font="white" />
                </Grid>
                )}

                {Productsdata.map((person) =>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>              
                    <Cards icono={<ShopIcon className={classes.iconos} />} titulo="Total Products" texto={person.products} color="#4b3c3f" font="white" />
                </Grid>
                 )}



            </Grid>

            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>

            </Grid>


            <Grid item xs={12} className={classes.containerTabla}>

            </Grid>



        </div>
    );
}

