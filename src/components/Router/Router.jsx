import { BrowserRouter, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PrivateRoute } from "./PrivateRouter";
import { LoaderContainer } from "./styles";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));

const PokemonListPage = lazy(() =>
  import("pages/PokemonListPage/PokemonListPage")
);

const PokemonDetailedInfoPage = lazy(() =>
  import("pages/PokemonDetailedInfoPage/PokemonDetailedInfoPage")
);

const Router = () => {
  return (
    <Suspense
      fallback={
        <LoaderContainer
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      }
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute
            exact
            path="/pokemon_list"
            component={PokemonListPage}
          />
          <PrivateRoute
            exact
            path="/pokemon?id=:id"
            component={PokemonDetailedInfoPage}
          />
          <PrivateRoute />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
