import SliderResponsive from "./Slider";

const Carousel = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                data.map((categoria) => (
                    <SliderResponsive
                        key={categoria.id_categoria}
                        categoria={categoria}
                    />
                ))
            }
        </>
    )
}

export default Carousel;