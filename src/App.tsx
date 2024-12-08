import { BrowserRouter, Outlet, Routes } from "react-router";
import { Route } from "react-router-dom";
import MainNavigation from "./components/sections/main-navigation";
import Landinggg from "./pages/landing";

function App() {
  return (
    <div className="max-w-full overflow-hidden">
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
            <Route path="/" element={<Landinggg />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
