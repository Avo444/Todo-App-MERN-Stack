import { useEffect } from "react";
import { Auth, Home } from "./pages";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import ROUTES from "./ROUTES";
import "./App.scss";
import { getUserData } from "./store/slices/authSlice/api";
import Navbar from "./components/futures/Navbar";

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const userID = localStorage.getItem("userID");
    useEffect(() => {
        if (userID) {
            if (
                location.pathname === ROUTES.LOGIN ||
                location.pathname === ROUTES.REGISTER
            ) {
                navigate(ROUTES.HOME);
            }

            dispatch(getUserData(userID));
        } else {
            if (
                location.pathname !== ROUTES.LOGIN ||
                location.pathname !== ROUTES.REGISTER
            ) {
                navigate(ROUTES.LOGIN);
                return;
            }
        }
    }, []);

    return (
        <div
            className={
                location.pathname !== ROUTES.LOGIN ||
                location.pathname !== ROUTES.REGISTER
                    ? "dashboard"
                    : ""
            }
        >
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Auth />} />
                <Route path={ROUTES.REGISTER} element={<Auth isRegister />} />
            </Routes>

            <ToastContainer />
        </div>
    );
};

export default App;
