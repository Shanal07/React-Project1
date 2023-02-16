import SignIn from "../components/pages/SignIn";
import Register from "../components/Register/Signup";
import Home from "../components/Home/home"

const routes = [
  {
    path: "/",
    component: SignIn,
    protectedRoute: false,
  },
  {
    path: "/SignUp",
    component: Register,
    protectedRoute: false,
  },
  
  {
    path: "/Home",
    component: Home,
    protectedRoute: false,
  },
];

export default routes;
