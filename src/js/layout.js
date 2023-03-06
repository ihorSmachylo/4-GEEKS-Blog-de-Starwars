import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/People.jsx";
import { Planets } from "./views/Planets.jsx";
import { DetailsPlanets } from "./views/DetailPlanets.jsx";


const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/people" element={<People/>}/>
						<Route path="/planets" element={<Planets/>}/>
						<Route path="/planets/:theid" element={<DetailsPlanets />} />
						<Route path="*" element={<h1>Not found!</h1>} />	
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
