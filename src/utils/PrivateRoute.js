import { Navigate } from "react-router-dom";
// Requirements
// 1.It has the same API as <Route/>
// 2. It renders a <Route/> and passes all the props through to it.
//  3. It checks if the user is authenticated, if they are, it renders the component prop. If not, it redirects the user to /login.
const PrivateRoute = ({Component, ...rest}) => {
        if (localStorage.getItem("password")) {
          // push to component prop
          return<Component/>
        } else {
          return <Navigate to="/" replace={true} />;
        }
};

export default PrivateRoute
