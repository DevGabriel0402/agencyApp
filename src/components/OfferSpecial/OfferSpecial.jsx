import { useState } from "react";
import { OfferSection } from "../../styles/Layout"

const OfferSpecial = () => {

    const [activeButton, setActiveButton] = useState('team');

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }

    const offerTeam = [
        {
            offer: "team",
            imageUrl: 'https://s3-alpha-sig.figma.com/img/4758/5974/571741dfb7ac619383243e8cceaa16b7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZyTNdhdjRgszZB5qY0GOKvTU4ssvPbDZOyAE3AzxGpz-xxkqt0Lgbu-55rZVt81TspyVWT2gJfzrbInq~CsusrJ5jGVJaN0AyGpFHKOJekCZhw9xDK708iCXQlZ3GiYlui~VQBmZSck1mJHvpdkHgMuG9oPj~CAGaEiHjR9kC22CcdINvI9MIrKW6s5cNQufh1QzF8WPFw1Mm3linI975YIvfs7jwJpopsJvGthX927oWpEZ670fDPa6JczOl97oBpYlgl5F4s-3sfZlj26Tj0vJJLD5GHvKnCjZnrH0mf8DgMhTa-~Hx5Q2OYkPaGolpQMAvKZmQMQrYODs2DS3Q__',
            imageAlt: 'imagem',
            mode: 'Relax',
            className: 'mode relax',
            days: '3 Days, 3 Nights',
            name: 'Loga Sea',
            price: '700$',
            button: 'Book Now'
        },
        {
            offer: "team",
            imageUrl: 'https://s3-alpha-sig.figma.com/img/f252/818e/6e2b1e0ec1ddaecc31ad368ff8c4d91c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AolMXeegGdHxEHcQ1EeouYztx-b7z0Bdb8OnbqfONiH5-fNRgz0kw646zwkIw0kiWnZ72fWqqw4Pj65tuUK9ktbAlJ1g21o-vKRC95lVKv60dV-hx29duEjqk0JbFLhqUG4ym2rInv4GPCMFrkjvvn6b6W3M53WHjWUMjIlLZms4m5ElozQsYlOKPRtwqOn4CpNJtqqdWhlUqEqVd25nUlLvAhIZHJ3vVStOvprunU0wAdm3IbB4q3WZpEgM9cerwLuNTaBYnX1cUOsTGZ1tfcgTeL3CRFUXBQ2Xf5ouElaotINFKQ--5PW5Wl~HicR8a22s0R3ZyZVF7TD~Ko-HCA__',
            imageAlt: 'imagem',
            mode: 'Adventure',
            className: 'mode adventure',
            days: '4 Days, 3 Nights',
            name: 'Ansgar Scheffold',
            price: '400$',
            button: 'Book Now'
        },
        {
            offer: "team",
            imageUrl: 'https://carter.eu/imager/offerphoto/23188/nowa-zelandia-%C3%A0-la-carte-23188-full.jpg',
            imageAlt: 'imagem',
            className: 'mode adventure',
            mode: 'adventure',
            days: '7 Days, 6 Nights',
            name: 'New Zeland',
            price: '440$',
            button: 'Book Now'
        }

    ]
    const offerCouple = [
        {
            offer: "couple",
            imageUrl: 'https://i.pinimg.com/originals/28/a1/e6/28a1e6b0d4ca2fe8fa17a855967918a9.jpg',
            imageAlt: 'imagem',
            mode: 'Relax',
            className: 'mode relax',
            days: '4 Days, 5 Nights',
            name: 'Bariloche',
            price: '540$',
            button: 'Book Now'
        },
        {
            offer: "couple",
            imageUrl: 'https://cache.marriott.com/content/dam/marriott-renditions/MLEWH/mlewh-island-aerial-view-7691-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*',
            imageAlt: 'imagem',
            mode: 'relax',
            className: 'mode relax',
            days: '4 Days, 5 Nights',
            name: 'Maldivas',
            price: '800$',
            button: 'Book Now'
        },
        {
            offer: "couple",
            imageUrl: 'https://s3-alpha-sig.figma.com/img/3b36/2f15/2f5f1863ef3dc4d7b028d86ce487ae7a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENb3bkWSEs8Y8cX96rgZU4n~wtDSqgY8W1M-d-uC0~i5Ic1UJP5lyWKeaTjNflxpcjW0i5X19ZNZdgmXRRb6hb1YD5xFa5Kb5EbcH92oFkqjV5MQs-oxK5n2RtoU8KCkTwrD8cXBo26YJttHslk~S7lI3OZQDShXx8n-s4H-OuJQAV6Esu51d-s0sq6aK0akHNZyKcNihLqNsCtHl0f7GFX34lDOICw6ql8jhAXRUxZnnzTxR8J1bVpievdGHOvwFBXCYibfDXLcnj~E8Jd9RviqjQpqm~v-7Xkm9NesRZrODDPBehXpzdnYKNL~-XfQEtzrgtSwjMSMWgVSy3NFIg__',
            imageAlt: 'imagem',
            className: 'mode relax',
            mode: 'Relax',
            days: '7 Days, 6 Nights',
            name: 'Lona X',
            price: '340$',
            button: 'Book Now'
        }

    ]
    const offerFamily = [
        {
            offer: "family",
            imageUrl: 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/hr/br/others/gramado/53498/53498_exterior_view_3.jpg?crop=2982:1988;*,*&downsize=1800:*',
            imageAlt: 'imagem',
            mode: 'Relax',
            className: 'mode relax',
            days: '3 Days, 3 Nights',
            name: 'Gramado',
            price: '380$',
            button: 'Book Now'
        },
        {
            offer: "family",
            imageUrl: 'https://powertravel.ca/wp-content/uploads/2017/12/grand-velas-riviera-maya-mexico-top.jpg',
            imageAlt: 'imagem',
            mode: 'relax',
            className: 'mode relax',
            days: '6 Days, 7 Nights',
            name: 'Resort México',
            price: '758$',
            button: 'Book Now'
        },
        {
            offer: "family",
            imageUrl: 'https://blog.livareviagens.com.br/wp-content/uploads/2021/03/bonito-scaled.jpg',
            imageAlt: 'imagem',
            className: 'mode adventure',
            mode: 'adventure',
            days: '3 Days, 4Nights',
            name: 'Bonito',
            price: '240$',
            button: 'Book Now'
        }

    ]

    const getActiveOfferArray = () => {
        switch (activeButton) {
            case "team":
                return offerTeam;
            case "couple":
                return offerCouple;
            case "family":
                return offerFamily;
            default:
                return [];
        }
    };

    const activeOfferArray = getActiveOfferArray();



    return (
        <OfferSection>
            <h1>Special Upcoming Offers</h1>
            <div className="optionOffer">
                <a className={activeButton === "team" ? "active" : ""} onClick={() => handleButtonClick('team')} >Team</a >
                <a className={activeButton === "couple" ? "active" : ""} onClick={() => handleButtonClick('couple')} >Couple</a >
                <a className={activeButton === "family" ? "active" : ""} onClick={() => handleButtonClick('family')} >Family</a >
            </div>
            <div className="offerContent">
                {activeOfferArray.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.imageUrl} alt={item.imageAlt} />
                        <div className="modeContent">
                            <p className={item.className}>{item.mode}</p>
                            <p>{item.days}</p>
                        </div>
                        <p className="name">{item.name}</p>
                        <div className="card-footer">
                            <p className="price">{item.price}<span>/Person</span></p>
                            <a className="button">{item.button}</a>
                        </div>
                    </div>
                ))}
            </div>
        </OfferSection >
    );
}


export default OfferSpecial;