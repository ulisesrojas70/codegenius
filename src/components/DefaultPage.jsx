import Header from "./Header";
import Footer from "./Footer";

const DefaultPage = ( {children} ) => {
    return (
        <>
            <Header />
            <>
                {children}
            </>
            <Footer/>
        </>
    )
}

export default DefaultPage;