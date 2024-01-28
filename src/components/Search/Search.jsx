
import { useState } from "react";
import { InfoSearch } from "../../styles/Layout";
import searchIcon from '../../assets/search-icon.svg'

const Search = () => {

    const [activeButton, setActiveButton] = useState('flight');

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }

    return (
        <InfoSearch>
            <div className="">
                <div className="option">
                    <a className={activeButton === "flight" ? "active" : ""} onClick={() => handleButtonClick('flight')}>

                        <img className="flight "
                            src="https://s3-alpha-sig.figma.com/img/6f24/d6ac/5ada86f9ccbea649b27b8af5f65558b9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oxxqytn0035EGaCiWzpMsGTpjuCPwlkkToDtwTXVC1D~R7Td4wIZMg4GOar8c-wP2PVGDf4dULk9609PT0sv07Y44CHKAMGolT-Vmgu08iFGuQNwlG5CD6xAz5DzUBVbDvWQCQd-eQatKI9PVcB3ybWsaGEarR-8Iu-dG16Ojxy32c4pY~4pG2Cgz-1UNpEDwRI-bfkB8UVTCsiMMP~r7eDeXy6yT2AACXSmySYSa7gvZkI5cnB8wsYQkho8oKL-26fsphQy0CRsaDNl8P2K-s8HEXDf4dkzqsnY4jNIrfnbdfl9coSXD55zEdh~yKuzVXIJ6RiT8m22ZizDAkxn-g__"
                            alt="icon"
                        />
                        Flight
                    </a>
                    <a className={activeButton === "hotel" ? "active" : ""} onClick={() => handleButtonClick('hotel')}>

                        <img

                            src="https://s3-alpha-sig.figma.com/img/a1c2/e408/88e07b9836ff89b7c5769950c65611fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XUDtNN0nS0A2Su4w2sjoLKIfucl5TZrshAJh1PiAHJ-Slub657Kth4FrncbwtovK7MnhCiyELfOsP~prkvEAEt3~J8UVgJNkgH~XiWUhjmCs8WlNZyPEODgrK1Gwud3glwMXnxhNzwW1zxzoLA8VsLeKbYiKPqU9XwsIqtNDzipHkhbmpFMPTL7l09fvYOTvtzl9X6MPYqs61MMM8eILw09ys~8G-9Sp0F8GYYqASpXciPiB5ilJzUE9bHglZQwCqdwfI3dWd1JojChDnT7Z6Rv35l~Nx~~EyeUZdpiQ931Ize-tCNIKR5q5fCE8tS4rHuakMkeBxCR19Wi6YW4sew__"
                            alt="icon"
                        />
                        Hotel
                    </a>
                </div>
                <div className="info">
                    <div className="info-content">
                        <div className="living">
                            <p>Living From</p>
                            <h3>New York</h3>
                        </div>
                        <div className="icon">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/080d/6c92/aef9cbfd54ef7a4b2fd61c5312ab1f2d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KSXfpY4in0mZqqlLGGNzMh8cfSQwdZGlJWblkgvSNZQ6uZpApXxnhUxn0aphB5dyguDNtAKOd7H5ZbF1jdB5I~AS8RMepA9P8yBvpl7VTR49paZl9HrhkDDb3uWd-U00cBvpjsGgtQHShbFXWWapCazbJntUnOJa--BKXEZqBn5VpvfQwuExytR96HESaD7O7qrfxGWksIeQGQTHLv2Qb2glqZ~N7v3mXl8Pql18Uh9bGQmoME0IGZmD6uTvG04jCLlO0fJA-sxTr8Lln0nLeP6uRkslp0aqX6KnBnDcsF26H3gz8-VeeFpkmYqvdTN7Qv58pWUUWkxYaomc6RTVQA__"
                                alt="icon"
                            />
                        </div>
                        <div className="going">
                            <p>Going To</p>
                            <h3>Dubai</h3>
                        </div>
                    </div>
                    <div className="info-content ">
                        <div>
                            <p>Leave
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/6f24/d6ac/5ada86f9ccbea649b27b8af5f65558b9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oxxqytn0035EGaCiWzpMsGTpjuCPwlkkToDtwTXVC1D~R7Td4wIZMg4GOar8c-wP2PVGDf4dULk9609PT0sv07Y44CHKAMGolT-Vmgu08iFGuQNwlG5CD6xAz5DzUBVbDvWQCQd-eQatKI9PVcB3ybWsaGEarR-8Iu-dG16Ojxy32c4pY~4pG2Cgz-1UNpEDwRI-bfkB8UVTCsiMMP~r7eDeXy6yT2AACXSmySYSa7gvZkI5cnB8wsYQkho8oKL-26fsphQy0CRsaDNl8P2K-s8HEXDf4dkzqsnY4jNIrfnbdfl9coSXD55zEdh~yKuzVXIJ6RiT8m22ZizDAkxn-g__"
                                    alt="icon"
                                />
                            </p>
                            <h3>23 Jan, Sat</h3>
                        </div>
                        <div>
                            <div className="icon">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/ae88/4f20/e21767d5cf540effd6cea04c5263e6cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aKXlP4lWB679rIV9JQ-PgcUHny7oua5E53KERpluROE~khiuUct5GBogCqZTVfy3JpUhsSvcPGMyrH6QPe3tbTe0uEDQP7~IDCCmYyGZiofdz1fJIkZbiHMOu2cf60fMoLitP4miOIh4k0-fju9bdJnWTIdVBSQX8jr4v90IjXyYrxNB0eVqKcuF5n63TDLzpvD6qGTX4g3Axmm8WmGaUnKpJteybcD0xmMLacsdeqg5RsJxiWpVbB09HpR6KsFMtn0BwHW7Pg0lP6TxwWNPc7N7x6oW4tsoesKKajfNZFPS7Ihf-iv4BNU-HaNx3XnuyX7aFpUk4CsvLEI0ygDNCw__"
                                    alt="icon"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Return
                                <img
                                    className="icon-flight"
                                    src="https://s3-alpha-sig.figma.com/img/6f24/d6ac/5ada86f9ccbea649b27b8af5f65558b9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oxxqytn0035EGaCiWzpMsGTpjuCPwlkkToDtwTXVC1D~R7Td4wIZMg4GOar8c-wP2PVGDf4dULk9609PT0sv07Y44CHKAMGolT-Vmgu08iFGuQNwlG5CD6xAz5DzUBVbDvWQCQd-eQatKI9PVcB3ybWsaGEarR-8Iu-dG16Ojxy32c4pY~4pG2Cgz-1UNpEDwRI-bfkB8UVTCsiMMP~r7eDeXy6yT2AACXSmySYSa7gvZkI5cnB8wsYQkho8oKL-26fsphQy0CRsaDNl8P2K-s8HEXDf4dkzqsnY4jNIrfnbdfl9coSXD55zEdh~yKuzVXIJ6RiT8m22ZizDAkxn-g__"
                                    alt="icon"
                                />
                            </p>
                            <h3>14 Jan, Thu</h3>
                        </div>
                    </div>
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>

        </InfoSearch>
    );
};

export default Search;
