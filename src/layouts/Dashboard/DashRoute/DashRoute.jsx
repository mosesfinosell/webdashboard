import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import DealDashboard from "../DashboardItems/DealDashboard";
import DealSearchBox from "../../HomeItemsModal/Deals/DealSearchBox";
import HomeDash from "../DashboardItems/HomeDashboard";
import VirtualCard from "../DashboardItems/VirtualCard";



export default function DashRoute() {
    return(
        <Switch>
             <Route exact path='/dashboard/home' render={HomeDash}/>
             <Route path='/dashboard/deals' render={DealSearchBox}/>
             <Route path='/dashboard/virtual-card' render={VirtualCard}/>
        </Switch>
    )
}