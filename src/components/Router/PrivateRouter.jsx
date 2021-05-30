import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("isAuth") && Component ? (
        <Component {...props} />
      ) : localStorage.getItem("isAuth") && !Component ? (
        <Redirect to="/pokemon_list" />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
