import React from 'react';
import {Link} from "react-router-dom";
import bgVideo from "../../resources/bg.mp4";
import "./HomeBanner.css";
import advant1 from "../../resources/svgImages/advant-1.svg";
import advant2 from "../../resources/svgImages/advant-2.svg";
import advant3 from "../../resources/svgImages/advant-3.svg";
import advant4 from "../../resources/svgImages/advant-4.svg";
import applyBtn from "../../resources/svgImages/apply-btn.svg";

export default function HomeBanner() {
    return (
        <section className="home">
            <div className="bg">
                <video autoPlay loop muted>
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>
            <div className="home__container _container">
                <div className="home__body">
                    <div className="home__top-content">
                        <div className="home__top-text">
                            <h1 className="home__heading">The leading launchpad.</h1>
                            <p className="home__subtitle">
                                ArtPad is a launch platform for retail investors, allowing
                                access to public and private sales of the most popular
                                crypto projects in the same way as venture funds do.
                                We provide startup incubation services.
                            </p>
                        </div>
                        <div className="home__community-wrapper">
                            <div className="home__community">
                                <p className="home__community-name">Community:</p>
                                <Link to="/" href="#" className="home__tg _social-link">Telegram</Link>
                                <Link to="/" href="#" className="home__dem _social-link">DEM</Link>
                            </div>
                        </div>
                    </div>

                    <div className="advant">
                        <div className="advant__row">
                            <ul className="advant__list">
                                <li className="advant__item">
                                    <div className="advant__item-top">
                                        <img
                                            src={advant1}
                                            alt=""
                                            className=""
                                        />
                                        <p className="advant__item-price">0.6432</p>
                                    </div>
                                    <div className="advant__item-bot">Price</div>
                                </li>
                                <li className="advant__item">
                                    <div className="advant__item-top">
                                        <img
                                             src={advant2}
                                            alt=""
                                            className=""
                                        />
                                        <p className="advant__item-price">$56.88M</p>
                                    </div>
                                    <div className="advant__item-bot">
                                        Market Cap (87.44M supply)
                                    </div>
                                </li>
                                <li className="advant__item">
                                    <div className="advant__item-top">
                                        <img
                                             src={advant3}
                                            alt=""
                                            className=""
                                        />
                                        <p className="advant__item-price">$44.7M</p>
                                    </div>
                                    <div className="advant__item-bot">TVL</div>
                                </li>
                                <li className="advant__item">
                                    <div className="advant__item-top">
                                        <img
                                             src={advant4}
                                            alt=""
                                            className=""
                                        />
                                        <p className="advant__item-price">$16.28M</p>
                                    </div>
                                    <div className="advant__item-bot">
                                        Raised in 114 projects
                                    </div>
                                </li>
                            </ul>
                            <Link to="/" href="#" className="advant__apply"
                            ><span>Apply for IDO</span>
                                <img src={applyBtn} alt=""
                                /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
