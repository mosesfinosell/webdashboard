import React from 'react';
import ReactDOM from 'react-dom';
// import { AuthContext } from "./routes";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import Join from "./Join.js";
// import Business from "./business.js";
// import Login from "./Signin.js";
// import Header from "./header.js";
// import Learn from "./learn.js";
// import FAQ from "./Faq.js";
// import About from "./about.js";
// import Term from "./tandc.js";
// import REGBusiness from "./Rbusiness";
// import REGPersonal from "./Rpersonal";
// import Started from "./started.js";
// import Home from "./home.js";
import AccountBox from '../../layouts/AccountBox/AccountBox';
import BusinessAccountSignUp from '../../layouts/SignUp/BusinessAccountSignUp';
import PersonalAccountSignUp from '../../layouts/SignUp/PersonalAccountSignUp';
import About from '../../layouts/SignUp/About';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	NavLink,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Button } from 'react-bootstrap';
// import Routes from "./routes.js";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

// import SignUp from "../pages/SignUp";
// import SignIn from "../pages/SignIn"

// import Logindash from "../dashboard/dashboard.js";
// import * as firebase from "firebase";
// import check from './check.jpg'
// import firebaseConfig from "../../firebase.config";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//   {/* <Routes />
//     <Header />
//     <div style={{backgroundImage: `url(${check})`,height:'500px', backgroundAttachment: 'fixed' ,backgroundSize:'cover', width: '100%'}}></div>
//        */}

//  <BrowserRouter>
//  <Switch>

//            <Route path="/register">
//             <Join />
//            </Route>
//            <Route path="/login">
//              <Login />
//            </Route>
//            {/* <Route path="/">
//            <Home  />
//            </Route>  */}
//            <Route path="/learn">
//             <Learn  />
//            </Route>
//            <Route path="/faq">
//             <FAQ  />
//            </Route>
//            <Route path="/tandc">
//             <Term />
//            </Route>
//            <Route path="/about">
//             <About />
//            </Route>
//          </Switch>

//  </BrowserRouter>

//  </header>
//     </div>
//   );
// }

// export default App;

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<Router>
			{/* <Routes /> */}
			{/* <Navbar id="navtop" expand="lg">
  <Navbar.Brand href="/" id="navtoptext">Finosell</Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> */}

			{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Airtime</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Cable TV</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Data subscribtion</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Data subscribtion</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Quick Loan</NavDropdown.Item>
//       </NavDropdown> */}

			{/* <NavLink href="/">Home</NavLink>
     <NavLink href="/faq">Login</NavLink>
    <NavLink href="/dash">Dashboard</NavLink>
      </Nav>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
     </Form>
        </Navbar.Collapse>
  </Navbar> */}
			<Switch>
				{/* <Route path="/getstarted">
            <Started />
          </Route>  */}
				<Route exact path='/'>
					<AccountBox />
				</Route>
				<Route path='/business-signup'>
					<BusinessAccountSignUp />
				</Route>
				<Route path='/personal-signup'>
					<PersonalAccountSignUp />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				{/* <Route path="/dash/">
          <Logindash/>
         </Route>
          <Route path="/users">
            <Join />
          </Route>
          
         
           <Route path="/register">
            <Join />
           </Route>
           <Route path="/login">
             <Login />
          </Route>
          
           <Route path="/learn">
            <Learn  />
           </Route>
          <Route path="/faq">
           <FAQ  />
           </Route>
            <Route path="/tandc">
            <Term />
            </Route>
            <Route path="/about">
           <About />
         </Route>
         <Route path="/:id/">
            <Profile />
          </Route> */}
				{/* <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
         <Route path="/">
           <Home   />
         </Route> */}
			</Switch>
		</Router>
	);
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// export default routes;

// function App() {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
//       Is logged in? {JSON.stringify(isLoggedIn)}
//       <div className="App">
//         <Router>
//           <Header />

//           <Switch>
//             {routes.map(route => (
//               <Route
//                 key={route.path}
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.main}
//               />
//             ))}
//           </Switch>
//         </Router>
//       </div>
//     </AuthContext.Provider>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// export const AuthContext = React.createContext(null);

// function App() {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
//       Is logged in? {JSON.stringify(isLoggedIn)}
//       <div className="App">
//         {/* <Router>
//           <Header />

//           <Switch>
//             {routes.map(route => (
//               <Route
//                 key={route.path}
//                 path={route.path}
//                 exact={route.exact}
//                 component={route.main}
//               />
//             ))}
//           </Switch>
//         </Router> */}
//       </div>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// import index from './components/login/index'
