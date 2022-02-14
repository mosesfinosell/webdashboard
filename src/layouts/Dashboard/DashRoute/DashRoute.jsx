import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import HomeDash from "../DashboardItems/HomeDash";
import VirtualCard from "../DashboardItems/VirtualCard";



export default function DashRoute() {
    return(
        <Switch>
             <Route exact path='/dashboard/home' render={HomeDash}/>
             <Route path='/dashboard/virtual-card' render={VirtualCard}/>
        </Switch>
    )
}