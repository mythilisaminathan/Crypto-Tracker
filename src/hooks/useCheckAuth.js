import { useDispatch } from "react-redux";
import { setAuth, setIsLoggedIn } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useCheckAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    const userData = userInfo ? JSON.parse(userInfo) : null;

    if (userData) {
      dispatch(setAuth(userData));
      dispatch(setIsLoggedIn(true));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);
}

export default useCheckAuth;