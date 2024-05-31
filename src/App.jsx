import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
// import MovieDetailsId from "./components/MovieDetailsId ";
//exemple de  lazt loading
const NavigationBar = React.lazy(() => import("./components/NavigationBar"));
const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<NavigationBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies">
						<Route index element={<Movies />} />
						<Route path=":title" element={<MovieDetails />} />
					</Route> 
					{/* <Route path=":id" element={<MovieDetailsId />} /> */}
					<Route path="/addmovie" element={<AddMovie />} />

					{/* Route de page note found  */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
