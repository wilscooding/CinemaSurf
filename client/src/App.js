import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import CinemaSurf from "./pages/CinemaSurf";
import MoviePage from "./pages/MoviePage";
// import Header from "./components/Header";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/signup" element={<SignUpPage />} />
				<Route exact path="/player" element={<Player />} />
				<Route exact path="/tv" element={<TvShow />} />
				<Route exact path="/" element={<CinemaSurf />} />
				<Route exact path="/movie" element={<MoviePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
