import { useState } from "react"
import { TestimonialStyle } from "../../styles/Layout"

const depoimentos = [
    {
        imageUrl: "https://pics.craiyon.com/2023-11-28/_lxyxz2CQKK7Vnj7ZhzZqg.webp",
        imageAlt: "Imagem de Perfil",
        username: "Gabriel Lucas",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "Frontend",
        avaliacao: "⭐ 4.0"
    },
    {
        imageUrl: "https://pics.craiyon.com/2023-11-10/9AU-diWSSEu2oSSdSV1pBw.webp",
        imageAlt: "Imagem de Perfil",
        username: "Vand D",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "Backend",
        avaliacao: "⭐ 5.0"
    },
    {
        imageUrl: "https://pics.craiyon.com/2023-06-27/287f2a60c2e74386b5a89c517eb527dc.webp",
        imageAlt: "Imagem de Perfil",
        username: "Tru Vio",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "DevOps",
        avaliacao: "⭐ 4.5"
    },
    {
        imageUrl: "https://pics.craiyon.com/2023-06-27/287f2a60c2e74386b5a89c517eb527dc.webp",
        imageAlt: "Imagem de Perfil",
        username: "Tru Vio",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "DevOps",
        avaliacao: "⭐ 4.5"
    },
    {
        imageUrl: "https://pics.craiyon.com/2023-10-03/54cf48df76a14581aee5dbc12f92023d.webp",
        imageAlt: "Imagem de Perfil",
        username: "Tru Vio",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "DevOps",
        avaliacao: "⭐ 4.5"
    },
    {
        imageUrl: "https://pics.craiyon.com/2023-04-18/aca6006ed0874e76840aa5ba96ca5a42.webp",
        imageAlt: "Imagem de Perfil",
        username: "Tru Vio",
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        cargo: "DevOps",
        avaliacao: "⭐ 4.5"
    },

]

export const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % depoimentos.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 2 + depoimentos.length) % depoimentos.length
        );
    };





    return (
        <TestimonialStyle>

            <h1>Testimonial</h1>


            <div className="content-card">
                {depoimentos.map((item, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div key={index} className={`cardItem ${isActive ? "active" : ""}`}>
                            <div>
                                <p className="comentario">
                                    {item.comment}
                                </p>
                                <p className="username">
                                    {item.username}
                                </p>
                                <p className="cargo">{item.cargo}</p>
                            </div>
                            <div className="conteudo-imagem">
                                <div className="group-image">
                                    <img
                                        className="imgPerfil"
                                        src={item.imageUrl}
                                        alt={item.imageAlt}
                                    />
                                    <p className="avaliacao">{item.avaliacao}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
                <div className="btn">
                    <a onClick={prevSlide}>Anterior</a>
                    <a onClick={nextSlide}>Próximo</a>
                </div>
            </div>

        </TestimonialStyle>
    )
}