import { BrowserRouter, Outlet, Routes } from "react-router";
import { Route } from "react-router-dom";
import MainNavigation from "./components/sections/main-navigation";
import Landinggg from "./pages/landing";
import Auth from "./pages/auth";
import Explore from "./pages/explore";
import { AllInvestments } from "./pages/explore/all";
import { routes } from "./config/routes";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainNavigation>
                <Outlet />
              </MainNavigation>
            }
          >
            <Route path={routes.landing} element={<Landinggg />} />
            <Route path={routes.auth} element={<Auth />} />
            <Route path={routes.explore} element={<Explore />} />
            <Route path={routes.exploreAll} element={<AllInvestments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
