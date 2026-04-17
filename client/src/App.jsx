import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getUserData } from "./store/slices/authSlice/api";
import { getUserTodos } from "./store/slices/todoSlice/api";
import { Auth, Home, NotFound, Todos } from "./pages";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/futures/Navbar";
import ROUTES from "./ROUTES";
import "./App.scss";

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
            dispatch(getUserTodos())
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
                userID
                    ? "dashboard"
                    : ""
            }
        >
            {userID && <Navbar />}
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Auth />} />
                <Route path={ROUTES.REGISTER} element={<Auth isRegister />} />
                <Route path={ROUTES.TODOS} element={<Todos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer />
        </div>
    );
};

export default App;
