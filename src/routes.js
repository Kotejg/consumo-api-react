import { Switch, Route } from "react-router-dom" 
import Home from '../src/pages/home/Home'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>

        </Switch>
    )
}