import DefaultPage from "./DefaultPage";
import BannerMain from "./BannerMain";
import Carousel from "./Carousel/Carousel";
import data from '../datos/data.json';

const Home = () => {
    return (
        <DefaultPage showButton={true}>
            <BannerMain />
            <Carousel data={data} />
        </DefaultPage>
    )
}

export default Home;