import ResetCSS from "./ResetCSS";
import { Global } from "./components/UI/Styles";
import FormVideo from "./components/FormVideo/FormVideo";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

function App() {

	return (
		<Router>
			<Global>
				<ResetCSS />
				<Routes>
					<Route exact path="/" Component={Home}/>
					<Route path="/FormVideo" Component={FormVideo} />
				</Routes>
			</Global>
		</Router>

	);
}

export default App;
