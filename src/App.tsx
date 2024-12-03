import { BrowserRouter, Outlet, Routes } from "react-router";
import { Route } from "react-router-dom";
import Landing from "./pages/landing";
import MainNavigation from "./components/sections/main-navigation";

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
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
