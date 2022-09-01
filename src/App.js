import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';

import PrivateRoute from './utils/PrivateRoute';
import AccountBox from './pages/AccountBox';
import BusinessAccountSignUp from './pages/SignUp/BusinessSignUpPage/BusinessAccountSignUp';
import Verify from './pages/SignUp/BusinessSignUpPage/Verify';
import OTP from './pages/SignUp/BusinessSignUpPage/OTP';
import BusinessAccountSignIn from './pages/SignIn/BusinessLogInPage/BusinessAccountSignIn';
import ForgetPassword from './pages/SignIn/BusinessLogInPage/BusinessForgetPassword';
import ResetPassword from './pages/SignIn/BusinessLogInPage/BusinessResetPassword';

import AddTeam from './pages/Dashboard/BusinessDashboard/Account/addTeam';
import StoreInventory from './pages/Dashboard/BusinessDashboard/HomeBusiness/StoreInventory';
import StorePage from './pages/Dashboard/BusinessDashboard/HomeBusiness/StorePage';
import Cart from './pages/Dashboard/BusinessDashboard/HomeBusiness/Cart';

import DealDashboard from './pages/Dashboard/DashboardItems/DealDashboard';
import HomeDashboard from './pages/Dashboard/DashboardItems/HomeDashboard';

import AccountUserProfile from './pages/Dashboard/DashboardItems/AccountUserProfile';
import BusinessOrders from './pages/Dashboard/DashboardItems/OrderHistory';

import PayWithCard from './pages/Dashboard/DashboardItems/PayWithCard';
import PayWithUssd from './pages/Dashboard/DashboardItems/PayWithUssd';
import UssdConfirmation from './pages/Dashboard/DashboardItems/UssdConfirmation';
import PayWithTransfer from './pages/Dashboard/DashboardItems/PayWithTransfer';
import BankPayment from './pages/Dashboard/DashboardItems/BankPayment';
import Payment from './pages/Payment';
import BankTransfer from './pages/Payment/BankTransfer';

import Store from './pages/Store/productList';
import Search from './pages/Store/SearchProducts';
import StoreItem from './pages/Store/StoreItem';

// import AuthContainer from './components/Layout/AuthContainer';
import StoreContainer from './components/Store/StoreContainer';
import PaymentContainer from './components/Payment/container';

import ScrollToTop from './utils/scrollToTop';

import { Toaster } from 'react-hot-toast';
import DashboardPage from './pages/Dashboard/DashboardPage';

function App() {
	useEffect(() => {}, []);

	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						{/* <Route path='/' element={<AuthContainer />}> */}
						<Route path='/' element={<AccountBox />} />

						{/* <Route path='verify' element={<Verify />} />
							<Route path='/verify/otp' element={<OTP />} /> */}
						{/* </Route> */}
						{/* <Route
							exact
							path='/personal-signup'
							element={<PersonalAccountSignUp />}
						/>
						<Route
							exact
							path='/personal-signin'
							element={<PersonalAccountSignIn />}
						/> */}
						{/* <DashboardPage /> */}
						<Route
							exact
							path='/personal-dashboard'
							element={<PrivateRoute element={HomeDashboard} />}
						/>

						<Route
							path='/pay-with-card'
							element={<PrivateRoute element={PayWithCard} />}
						/>
						<Route
							path='/pay-with-ussd'
							element={<PrivateRoute element={PayWithUssd} />}
						/>
						<Route
							exact
							path='/pay-with-transfer'
							element={<PrivateRoute element={PayWithTransfer} />}
						/>
						<Route
							path='/bank-payment'
							element={<PrivateRoute element={BankPayment} />}
						/>
						<Route
							exact
							path='/ussd-confirmation'
							element={<PrivateRoute element={UssdConfirmation} />}
						/>
						<Route
							path='/personal-deals'
							element={<PrivateRoute element={DealDashboard} />}
						/>

						<Route
							path='/personal-account'
							element={<PrivateRoute element={AccountUserProfile} />}
						/>

						{/* </Switch> */}

						{/* Bussiness Account  */}
						<Route
							path='/business-signup'
							element={<BusinessAccountSignUp />}
							// element={<PrivateRoute />}
						/>
						<Route
							path='/business-signin'
							element={<BusinessAccountSignIn />}
							// element={<PrivateRoute />}
						/>

						<Route path='/dashboard' exact element={<DashboardPage />} />
							<Route path='/dashboard/team' element={<AddTeam />} />
						<Route
							exact
							path='/business/orders'
							element={<BusinessOrders />}
							// element={<PrivateRoute  />}
						/>
						<Route
							exact='true'
							path='/dashboard/store-inventory'
							element={<StoreInventory />}
						/>
						<Route
							path='/business/store-page'
							element={<PrivateRoute element={<StorePage />} />}
						/>
						<Route
							path='/forget-password'
							// element={<PrivateRoute element={<StoreLink />} />}
							element={<ForgetPassword />}
							
						/>
						<Route
							path='/reset-password'
							// element={<PrivateRoute element={<StoreLink />} />}
							element={<ResetPassword/>}
						/>
						<Route
							path='/business/store-page/cart'
							element={<PrivateRoute element={Cart} />}
						/>
						{/* <Route path='/business/payment' element={CreateTransaction} /> */}
						<Route path='/store/:businessID' element={<StoreContainer />}>
							<Route index element={<Store />} />
							<Route path='product/:productID' element={<StoreItem />} />
							<Route path='search' element={<Search />} />
						</Route>
						<Route path='/paylink' element={<PaymentContainer />}>
							<Route path=':id' element={<Payment />} />
							<Route
								path=':id/bank-transfer/:businessID'
								element={<BankTransfer />}
							/>
						</Route>
					</Routes>
				</ScrollToTop>
			</Router>
			<Toaster position='top' />
		</>
	);
}

export default App;
