
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import AccountBox from './layouts/AccountBox/AccountBox'
import PersonalAccountSignUp from './layouts/SignUp/PersonalAccountSignUp'
import BusinessAccountSignUp from './layouts/SignUp/BusinessAccountSignUp'
import AccountSignIn from "./layouts/SignIn/AccountSignIn";
import VerifyPhoneNumber from "./layouts/SignUp/VerifyPhoneNumber";
import InputOtp from "./layouts/SignUp/VerifyOtp";
import PasswordPage from "./layouts/SignUp/PasswordPage";
import ForgetPasswordPage from "./layouts/SignIn/ForgetPasswordPage";
import DashboardPage from "./layouts/Dashboard/DashoardContianer";



function App() {
  return (
    <Router>
      <Switch>
     <Route exact path='/' >
     <AccountBox/>
     </Route>
        <Route path='/personal-signup'>
          <PersonalAccountSignUp/>
        </Route>
        <Route path='/business-signup'>
        <BusinessAccountSignUp/>
        </Route>
        <Route path='/login'>
          <AccountSignIn/>
        </Route>
        <Route path='/verify-number'>
          <VerifyPhoneNumber/>
        </Route>
        <Route path='/verify-otp'>
          <InputOtp/>
        </Route>
        <Route path='/password'>
          <PasswordPage/>
        </Route>
        <Route path='/forget-password'>
          <ForgetPasswordPage/>
        </Route>
        <Route exact to='/dashboard'>
          <DashboardPage/>
        </Route>
        <Route/>
        </Switch>
    </Router>

  );
}

export default App;
