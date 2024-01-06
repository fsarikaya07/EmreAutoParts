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

import WhatsApp from "./components/whatsApp/WhatsApp";
import Spare from "./pages/Spare";
import { useAutoContext } from "./Context/Context";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { seat, aboutUs, contact, acc, spare,lang } = useAutoContext();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [lang]);
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

            <Route path={`/${seat}`} exact element={<SeatTypes />} />
            <Route path={`/${seat}/:slug`} exact element={<Seat />} />
            <Route
              path={`/${seat}/:categorySlug/:slug`}
              exact
              element={<SeatDetail />}
            />

            <Route path={`/${acc}`} exact element={<Accessories />} />
            <Route path={`/${acc}/:slug`} exact element={<AccModule />} />
            <Route
              path={`/${acc}/:CategorySlug/:slug`}
              exact
              element={<AccProduct />}
            />
            <Route
              path={`/${acc}/:CategorySlug/:Mdslug/:slug`}
              exact
              element={<AccDetail />}
            />

            <Route path={`/${spare}`} exact element={<Spare />} />

            <Route path={`/*`} exact element={<Error />} />
          </Routes>
          <WhatsApp />
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
