import ProductDetail from "../Component/Products/ProductsDetails";


import { Route, Switch } from "react-router-dom";

const Product = () => {
    return (
        <div className="">
                
                    <Route path="/product/:id">
                        <ProductDetail />
                    </Route>
                
        </div>
    );
};

export default Product;
