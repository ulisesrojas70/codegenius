import ResetCSS from "./ResetCSS";
import { Global } from "./components/UI/Styles";
import FormVideo from "./components/FormVideo/FormVideo";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import FormCategory from "./components/FormCategory/FormCategory";

function App() {

	return (
		<Router>
			<Global>
				<ResetCSS />
				<Routes>
					<Route exact path="/" Component={Home}/>
					<Route path="/FormVideo" Component={FormVideo} />
					<Route path="/FormCategory" Component={FormCategory} />
				</Routes>
			</Global>
		</Router>

	);
}

export default App;
