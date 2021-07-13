import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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
//import Graphics from '../components/Graphics';
//import TableMaterial from '../components/TableMaterial';


const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));

// const data = [
//     {
//       id:1,
//       video:
//         "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
//       fecha: "6 de sep. 2020",
//       visualizaciones: 32,
//       imagen: require("../assets/img/split.webp"),
//     },
//     {
//       id:2,
//         video:
//           "Cómo Solucionar Error al Crear Applicación de React JS",
//         fecha: "5 de sep. 2020",
//         visualizaciones: 31,
//         imagen: require("../assets/img/error.webp"),
//       },
//       {
//       id:3,
//         video:
//           "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
//         fecha: "4 de sep. 2020",
//         visualizaciones: 21,
//         imagen: require("../assets/img/forever.webp"),
//       },
//   ];

function Detailbox(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    
                </Grid>

                
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                <CardsHeader icono={<PersonOutlineIcon className={classes.iconos}/>} titulo="78" texto="Total Customers" color="#41ce4c" font="white"/>
                
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PersonIcon className={classes.iconos}/>} titulo="46" texto="Total Suppliers" color="#ca5959" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<LocalShippingIcon className={classes.iconos}/>} titulo="27" texto="Total Delivery Persons" color="#6d4fb4" font="white"/>
                </Grid>

                
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards icono={<MonetizationOnIcon className={classes.iconos}/>} titulo="TotalSales" texto="Rs.3,640,720" color="#6758a8"/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards icono={<ShoppingCartIcon className={classes.iconos}/>} titulo="Total Orders" texto="864" color="#47c261"/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards icono={<ShopIcon className={classes.iconos}/>} titulo="Total Products" texto="317" color="#4b3c3f"/>
                    </Grid>

                    

                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                        
                    </Grid>


                    <Grid item xs={12} className={classes.containerTabla}>
                    
                    </Grid>


            
        </div>
    );
}

export default Detailbox;