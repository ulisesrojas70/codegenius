import ResetCSS from "./ResetCSS";
import { Global } from "./components/UI/Styles";
import BannerMain from "./components/BannerMain";
import DefaultPage from "./components/DefaultPage";

function App() {
	return (
		<Global>
			<ResetCSS/>
			<DefaultPage>
				<BannerMain/>
			</DefaultPage>
		</Global>
	);
}

export default App;
