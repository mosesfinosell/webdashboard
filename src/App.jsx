import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
// import ErrorBoundary from './ErrorBoundary';
import AccountBox from "./pages/AccountBox";
import PersonalAccountSignUp from "./pages/SignUp/PersonalSignUpPage/PersonalAccountSignUp";
import PersonalAccountSignIn from "./pages/SignIn/PersonalLogInPage/PersonalAccountSignIn";
// import PersonalForgetPassword from './pages/SignIn/PersonalLogInPage/PersonalForgetPassword';
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";

import BusinessAccountSignUp from "./pages/SignUp/BusinessSignUpPage/BusinessSignup/BusinessSignup";
import Verify from "./pages/SignUp/BusinessSignUpPage/Verify";
import OTP from "./pages/SignUp/BusinessSignUpPage/OTP";
import BusinessAccountSignIn from "./pages/SignIn/BusinessLogInPage/BusinessAccountSignIn";
// import AddBusinessPage from './pages/SignUp/BusinessSignUpPage/AddBusinessPage';
// import StoreInventory from './pages/Dashboard/BusinessDashboard/HomeBusiness/StoreInventory';
import { DashboardLayout } from "./components/Layout/DashboardLayout/DashboardLayout";
import { StoreLink } from "./pages/Dashboard/BusinessDashboard/StoreLink/StoreLink";
import { BusinessHome } from "./pages/Dashboard/BusinessDashboard/HomeBusiness/Home/BusinessHome";

import { StoreInventory } from "./pages/Dashboard/BusinessDashboard/Inventory/StoreInventory/StoreInventory";
import { AddProduct } from "./pages/Dashboard/BusinessDashboard/Inventory/AddProduct/AddProduct";
import { EditProduct } from "./pages/Dashboard/BusinessDashboard/Inventory/EditProduct/EditProduct";
import InvoiceBoard from "./pages/Dashboard/BusinessDashboard/HomeBusiness/InvoiceBoard";
import { Invoice } from "./pages/Dashboard/BusinessDashboard/Invoice/Invoice";

// import Order from "./pages/Dashboard/BusinessDashboard/Order/createOrder";
import { CreateOrder } from "./pages/Dashboard/BusinessDashboard/Order/CreateOrder/CreateOrder";
import Payments from "./pages/Dashboard/BusinessDashboard/Payment/createTransaction";
import { BusinessPayment } from "./pages/Dashboard/BusinessDashboard/Payment/BusinessPayment";
// import StoreProfile from "./pages/Dashboard/BusinessDashboard/Account/AccountBusinessProfile";

import { Account } from "./pages/Dashboard/BusinessDashboard/Account/Account";

import StorePage from "./pages/Dashboard/BusinessDashboard/HomeBusiness/StorePage";
import Cart from "./pages/Dashboard/BusinessDashboard/HomeBusiness/Cart";
// import VerifyPhoneNumber from './pages/SignUp/PersonalSignUpPage/VerifyPhoneNumber';
// import InputOtp from './pages/SignUp/PersonalSignUpPage/VerifyOtp';
// import PasswordPage from './pages/SignUp/PasswordPage';
// import DashboardPage from './pages/Dashboard/DashboardPage';
// import BusinessDashboard from './pages/Dashboard/DashboardItems/BusinessDashboard';
// import AddProduct from './pages/Dashboard/BusinessDashboard/HomeBusiness/addProduct';
// import ProductModal from './pages/Dashboard/BusinessDashboard/HomeBusiness/addProductModal';
// import DeliveryRequest from './pages/Dashboard/BusinessDashboard/HomeBusiness/delivery';
// import InvoiceBoard from './pages/Dashboard/BusinessDashboard/HomeBusiness/InvoiceBoard';
// import AddInvoice from './pages/Dashboard/BusinessDashboard/HomeBusiness/addInvoice';
// import ResendOtp from './pages/SignUp/PersonalSignUpPage/resendOtpPage';
// import BusinessVerifyOtp from './pages/SignUp/PersonalSignUpPage/BusinessVerifyOtp';
import AddTeam from "./pages/Dashboard/BusinessDashboard/Account/addTeam";

import DealDashboard from "./pages/Dashboard/DashboardItems/DealDashboard";
import HomeDashboard from "./pages/Dashboard/DashboardItems/HomeDashboard";
// import HomeBusiness from './pages/Dashboard/BusinessDashboard/HomeBusiness/HomeBusiness';
// import PaymentPage from './pages/Dashboard/DashboardItems/PaymentPage';
import AccountUserProfile from "./pages/Dashboard/DashboardItems/AccountUserProfile";
import BusinessOrders from "./pages/Dashboard/DashboardItems/OrderHistory";
// import StoreLink from './pages/Dashboard/BusinessDashboard/StoreLink/addUrlPage';
// import CreateTransaction from './pages/Dashboard/BusinessDashboard/Payment/createTransaction';
import PayWithCard from "./pages/Dashboard/DashboardItems/PayWithCard";
import PayWithUssd from "./pages/Dashboard/DashboardItems/PayWithUssd";
import UssdConfirmation from "./pages/Dashboard/DashboardItems/UssdConfirmation";
import PayWithTransfer from "./pages/Dashboard/DashboardItems/PayWithTransfer";
import BankPayment from "./pages/Dashboard/DashboardItems/BankPayment";
import Payment from "./pages/Payment";
import BankTransfer from "./pages/Payment/BankTransfer";

import Home from "./pages/Home";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

import FAQ from "./pages/FAQ";
import ComingSoon from "./pages/ComingSoon";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Privacy from "./pages/Privacy";
import Escrow from "./pages/Escrow";
import AppDownload from "./pages/appDownload.jsx";

import Website from "./components/Layout/Website";
import AuthContainer from "./components/Layout/AuthContainer";
import PaymentContainer from "./components/Payment/container";

// import BusinessLayout from './components/Layout/BusinessLayout'

import ScrollToTop from "./utils/scrollToTop";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<BusinessAccountSignIn />} />
            <Route path="/" element={<Website />}>
              {/* <Route index element={<Home />} /> */}
              <Route path="about" element={<About />} />
              <Route path="individual" element={<Individual />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogPost />} />
              <Route path="faqs" element={<FAQ />} />
              <Route path="coming-soon" element={<ComingSoon />} />
              <Route path="business-home" element={<Business />} />
              <Route path="terms" element={<Terms />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="paysecure" element={<Escrow />} />
              <Route path="download-app" element={<AppDownload />} />
            </Route>
            <Route path="/" element={<AuthContainer />}>
              <Route path="account" element={<AccountBox />} />
              <Route path="verify" element={<Verify />} />
              <Route path="/verify/otp" element={<OTP />} />
              <Route
                path="/business-signup"
                element={<BusinessAccountSignUp />}
              />
              <Route
                path="/business-login"
                element={<BusinessAccountSignIn />}
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
            <Route
              path="/business-dashboard"
              element={<PrivateRoute Component={<DashboardLayout />} />}
            >
              <Route path="home" element={<BusinessHome />} />
              <Route path="store-link" element={<StoreLink />} />
              <Route path="store-inventory">
                <Route index element={<StoreInventory />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="edit/:id" element={<EditProduct />} />
              </Route>

              <Route path="invoice" element={<Invoice />} />

              <Route path="order" element={<CreateOrder />} />
              <Route path="payment" element={<BusinessPayment />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="/paylink" element={<PaymentContainer />}>
              <Route path=":orderID" element={<Payment />} />
              <Route
                path=":orderID/bank-transfer/:businessID"
                element={<BankTransfer />}
              />
            </Route>
            //Already existing
            <Route
              exact
              path="/personal-signup"
              element={<PersonalAccountSignUp />}
            />
            <Route
              exact
              path="/personal-signin"
              element={<PersonalAccountSignIn />}
            />
            {/* <DashboardPage /> */}
            <Route
              exact
              path="/personal-dashboard"
              element={<PrivateRoute element={HomeDashboard} />}
            />
            <Route
              path="/pay-with-card"
              element={<PrivateRoute element={PayWithCard} />}
            />
            <Route
              path="/pay-with-ussd"
              element={<PrivateRoute element={PayWithUssd} />}
            />
            <Route
              exact
              path="/pay-with-transfer"
              element={<PrivateRoute element={PayWithTransfer} />}
            />
            <Route
              path="/bank-payment"
              element={<PrivateRoute element={BankPayment} />}
            />
            <Route
              exact
              path="/ussd-confirmation"
              element={<PrivateRoute element={UssdConfirmation} />}
            />
            <Route
              path="/personal-deals"
              element={<PrivateRoute element={DealDashboard} />}
            />
            <Route
              path="/personal-account"
              element={<PrivateRoute element={AccountUserProfile} />}
            />
            {/* </Switch> */}
            {/* Bussiness Account  */}
            {/* <Route
              path="/business-dashboard/store-profile"
              element={<StoreProfile />}
            /> */}
            <Route path="/business-dashboard/team" element={<AddTeam />} />
            <Route path="/business-dashboard/team" element={<AddTeam />} />
            <Route
              path="/business/orders"
              element={<BusinessOrders />}
              // element={<PrivateRoute  />}
            />
            <Route
              path="/business/store-page"
              element={<PrivateRoute element={<StorePage />} />}
            />
            {/* <Route
							path='/store-link' exact
							// element={<PrivateRoute element={<StoreLink />} />}
							element={<StoreLink />}
						/> */}
            <Route
              path="/business/store-page/cart"
              element={<PrivateRoute element={Cart} />}
            />
            {/* <Route path='/business/payment' element={CreateTransaction} /> */}
          </Routes>
        </ScrollToTop>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
