import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import useCheckAuth from "./hooks/useCheckAuth";
import openai from "./utils/openai";
import genAI from "./utils/openai";

const App = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoogedIn);

	useEffect(() => {
		fetchApiConfig();
		fetchGenres();
	}, []);

	useCheckAuth();

	const fetchApiConfig = () => {
		fetchDataFromApi("/configuration").then(({ images }) => {
			const url = {
				backdrop: images.secure_base_url + "original",
				poster: images.secure_base_url + "original",
				profile: images.secure_base_url + "original",
			};

			dispatch(getApiConfiguration(url));
		});
	};

	const fetchGenres = async () => {
		try {
			const endPoints = ["tv", "movie"];
			const genresData = {};

			await Promise.all(
				endPoints.map(async (type) => {
					const { genres } = await fetchDataFromApi(`/genre/${type}/list`);
					genres.forEach((obj) => (genresData[obj.id] = obj.name));
				})
			);

			dispatch(getGenres(genresData));
		} catch (error) {
			console.error("Error fetching genres:", error);
		}
	};

	useEffect(() => {
		// checkGptApi();
	}, []);



	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
