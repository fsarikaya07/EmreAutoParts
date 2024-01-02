import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";

import Error from "./pages/Error";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import Seat from './pages/Seat';
import SeatDetail from "./pages/SeatDetail";
import SeatTypes from "./pages/SeatType";
import Seat from "./pages/Seat";
import Accessories from "./pages/Accessories";
import AccModule from "./pages/AccModule";
import AccProduct from "./pages/AccProduct";
import AccDetail from "./pages/AccDetail";
import Loading from "./components/loading/Loading";
import AccProductDenem from "./pages/AccProductDenme";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <ScrollToTopRoute />
          <Routes>
            <Route path={`/`} exact element={<HomeDefault />} />
            <Route path={`/index`} exact element={<HomeDefault />} />

            <Route path={`/koltuk`} exact element={<SeatTypes />} />
            <Route path={`/koltuk/:slug`} exact element={<Seat />} />
            <Route
              path={`/koltuk/:categorySlug/:slug`}
              exact
              element={<SeatDetail />}
            />

            <Route path={`/aksesuar`} exact element={<Accessories />} />
            <Route path={`/aksesuar/:slug`} exact element={<AccModule />} />
            {/* <Route
              path={`/aksesuar/:CategorySlug/:slug`}
              exact
              element={<AccProduct />}
            /> */}
            <Route
              path={`/aksesuar/:CategorySlug/:slug`}
              exact
              element={<AccProductDenem />}
            />
            <Route
              path={`/aksesuar/:CategorySlug/:Mdslug/:slug`}
              exact
              element={<AccDetail />}
            />

            <Route path={`/*`} exact element={<Error />} />
          </Routes>
          <ScrollToTop
            className="scrollUp"
            smooth
            top="1500"
            component={<FaAngleUp />}
          />
        </Router>
      )}
    </>
  );
}

export default App;
