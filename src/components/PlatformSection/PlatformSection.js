import React from 'react';
import "./PlatformSection.css";
import ethereum from "../../resources/svgImages/ethereum.svg";
import solana from "../../resources/svgImages/solana-sol-logo 1.svg";
import polygon from "../../resources/svgImages/polygon.svg";
import cardano from "../../resources/svgImages/cardano.svg";
import binance from "../../resources/svgImages/binance.svg";
import rm1 from "../../resources/svgImages/rm-1.svg";
import rm2 from "../../resources/svgImages/rm-2.svg";
import rm3 from "../../resources/svgImages/rm-3.svg";
import rm4 from "../../resources/svgImages/rm-4.svg";
import rm5 from "../../resources/svgImages/rm-5.svg";

export default function PlatformSection() {
    return (
        <section className="platform">
            <div className="platform__container _container">
                <h2 className="platform__title">Multi-Chain Platform</h2>
                <ul className="platform__list">
                    <li className="platform__item">
                        <p href="#" className="platform__link">
                            <img src={ethereum} alt="" />
                        </p>
                        <p className="platform__name">Ethereum</p>
                        <img
                            src={rm1}
                            className="wow animate__animated snake-animation platform__image"
                            alt=""
                        />
                        <p></p>
                    </li>
                    <li className="platform__item">
                        <p href="#" className="platform__link">
                            <img src={solana} alt="" />
                        </p>
                        <p className="platform__name">Solana</p>
                        <img
                            src={rm2}
                            className="wow animate__animated snake-animation platform__image"
                            alt=""
                        />
                    </li>
                    <li className="platform__item">
                        <p className="platform__link">
                            <img src={polygon} alt="" />
                        </p>
                        <p className="platform__name">Polygon</p>
                        <img
                            src={rm3}
                            className="wow animate__animated snake-animation platform__image"
                            alt=""
                        />
                        <p></p>
                    </li>
                    <li className="platform__item">
                        <p className="platform__link">
                            <img src={cardano} alt="" />
                        </p>
                        <p className="platform__name">Cardano</p>
                        <img
                            src={rm4}
                            className="wow animate__animated snake-animation platform__image"
                            alt=""
                        />
                        <p></p>
                    </li>
                    <li className="platform__item">
                        <p className="platform__link">
                            <img src={binance} alt="" />
                        </p>
                        <p className="platform__name">Binance</p>
                        <img
                            src={rm5}
                            className="wow animate__animated snake-animation platform__image"
                            alt=""
                        />
                        <p></p>
                    </li>
                </ul>
                <div className="platform__info">
                    <h4 className="platform__heading">
                        ArtPad includes several chains, but will not be limited
                        to them, Ethereum, Solana, Polygon, Cardano and BNB Chain.
                    </h4>
                    <p className="platform__descr home__subtitle">
                        This makes it possible for our community to receive unique and
                        high-quality investment offers, and we help projects
                        in various networks to raise funds
                    </p>
                </div>
            </div>
        </section>
    )
}
