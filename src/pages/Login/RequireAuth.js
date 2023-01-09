import {  useSelector} from "react-redux";
import { RootState } from "../../store/store";

import {     Navigate, useLocation } from "react-router-dom";
import { LocalStorage } from "../../services";


  export  function RequireAuth({ children }) {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const lStorage = new LocalStorage()
  const token = lStorage.getItem('access_token')
  // console.log(token,"token nul???")
  const usuario = lStorage.getAsJsonItem('usuario')
    const location = useLocation();
      
    // if (token==='' || token===null || usuario===null) {
    //   console.log("redirect via Authrequire or token")
    //   // Redirect them to the /login page, but save the current location they were
    //   // trying to go to when they were redirected. This allows us to send them
    //   // along to that page after they login, which is a nicer user experience
    //   // than dropping them off on the home page.
    //   return <Navigate to="/login"  state={{ from: location }}  replace/>;
    // }
  
    return children;
  }
