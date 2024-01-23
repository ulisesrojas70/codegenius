import DefaultPage from "./DefaultPage";
import BannerMain from "./BannerMain";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    const data = [
        {
            "id_categoria": 1,
            "nombre_categoria": "Frontend",
            "descripcion": "Formación FrontEnd de CodeGenius",
            "background_color": "#6BD1FF",
            "video": [
                {
                    "titlulo": "React",
                    "link_video": "EIqdDpgju0I",
                    "url_img_video": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthTZU68Z1fp1p3PulYbeyYhwdOeR-2UNb0Q&usqp=CAU",
                    "descripcion": ""
                },
                {
                    "titlulo": "React",
                    "link_video": "8OR85PAwpwA",
                    "url_img_video": "https://i.ytimg.com/vi/8a0rIFEohZQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJ6E7oOmgTEOJL3FkY6ndE7k8NKQ",
                    "descripcion": ""
                },
                {
                    "titlulo": "React",
                    "link_video": "Cx5Ge3do4-Q",
                    "url_img_video": "https://i.ytimg.com/vi/Cx5Ge3do4-Q/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC1GakTMR8hcssUV90ILCvBO0-uLQ",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "RqQ1d1qEWlE",
                    "url_img_video": "https://i.ytimg.com/vi/RqQ1d1qEWlE/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "W6GTDfrWjXs",
                    "url_img_video": "https://i.ytimg.com/vi/W6GTDfrWjXs/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "sw9JirPhGrk",
                    "url_img_video": "https://i.ytimg.com/vi/Hzoz_BFQERM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZ750V872Zmz53vDT4OE6Bb75_MA",
                    "descripcion": ""
                }
            ]
        },
        {
            "id_categoria": 2,
            "nombre_categoria": "Backend",
            "descripcion": "Formación BackEnd de CodeGenius",
            "background_color": "#00C86F",
            "video": [
                {
                    "titlulo": "Java",
                    "link_video": "BhvLIzVL8_o",
                    "url_img_video": "https://i.ytimg.com/vi/yB4n_K7dZV8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKlxaDYsEcUADmh0Cid4RON92I7w",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "ydlwzwOUkyE",
                    "url_img_video": "https://i.ytimg.com/vi/ydlwzwOUkyE/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "H2TIvYIRxW4",
                    "url_img_video": "https://i.ytimg.com/vi/H2TIvYIRxW4/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "Pope-m4nuNc",
                    "url_img_video": "https://i.ytimg.com/vi/Pope-m4nuNc/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "9asUl8dbyhY",
                    "url_img_video": "https://i.ytimg.com/vi/9asUl8dbyhY/maxresdefault.jpg",
                    "descripcion": ""
                },
            ]
        },
        {
            "id_categoria": 3,
            "nombre_categoria": "Inovación y Gestión",
            "descripcion": "Formación Inovación y Gestión de CodeGenius",
            "background_color": "#FE8C2A",
            "video": [
                {
                    "titlulo": "Java",
                    "link_video": "fGTnnQM4jms",
                    "url_img_video": "https://i.ytimg.com/vi/fGTnnQM4jms/maxresdefault.jpg",
                    "descripcion": ""
                },
                {
                    "titlulo": "Java",
                    "link_video": "abAlyiYX344",
                    "url_img_video": "https://i.ytimg.com/vi/abAlyiYX344/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9ykHFsOtDb-5o76mHzuxQQr0tVw",
                    "descripcion": ""
                },
            ]
        }
    ]

    return (
        <DefaultPage showButton={true}>
            <BannerMain />
            <Carousel data={data} />
        </DefaultPage>
    )
}

export default Home;