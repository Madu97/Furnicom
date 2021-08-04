import ProductDetail from "../Component/Products/ProductsDetails";


import { Route, Switch } from "react-router-dom";

const Product = () => {
    return (
        <div className="">
                <Switch>
                    <Route path="/product/:id">
                        <ProductDetail />
                    </Route>
                </Switch>
        </div>
    );
};

export default Product;
