import { Switch, Route } from "react-router-dom" 
import Home from '../src/pages/home/Home' 
import Product from '../src/pages/product/Product'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home}  />
            <Route path="/produtos/:id" component={Product}/>
        </Switch>
    )
}