import SignIn from "../components/pages/SignIn";
import Register from "../components/Register/Signup";

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
];

export default routes;
