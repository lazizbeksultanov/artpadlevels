import React from 'react';
import "./RoadMap.css";
import checkSign from "../../resources/svgImages/check-sign.svg";
import checkedWhite from "../../resources/svgImages/checked-white.svg";
import loadingBar from "../../resources/svgImages/loading-bar.svg";

export default function RoadMap() {
    return (
        <section className="roadmap">
            <div className="roadmap__container">
                <h3 className="roadmap__title platform__title">Roadmap 2022</h3>

                <div className="roadmap__lists">
                    <ul>
                        <li>
                            <div className="text">
                                <ul className="roadmap__list">
                                    <li className="roadmap__item">
                                        <img src={checkSign} alt="check-sign" />
                                        <p className="roadmap__link checked">
                                            IDO Platform Launch
                                        </p>
                                    </li>
                                    <li className="roadmap__item">
                                        <img src={checkSign} alt="check-sign" />
                                        <p className="roadmap__link checked">Airdrop Lottery</p>
                                    </li>
                                    <li className="roadmap__item">
                                        <img src={checkSign} alt="check-sign" />
                                        <p className="roadmap__link checked">
                                            KYC and Tiers System
                                        </p>
                                    </li>
                                    <li className="roadmap__item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__link">
                                            Stacking Pools on Platform
                                        </p>
                                    </li>
                                    <li className="roadmap__item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__link">
                                            Placement of the first project IDO
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn p-0">
                                <div className="roadmap__bar active-bar">
                                    <div
                                        className="roadmap__progress wow animate__animated progress-animation"
                                    >
                                        <span>Q1 2022</span>
                          {">"}<span className="shape">
                                            <div
                                                className="roadmap__bar-pulse wow animate__animatedd progress-pulse-animation"
                                            >
                                                <img
                                                    src={loadingBar}
                                                    className="progress-image pulse"
                                                    alt=""
                                                />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="btn">
                                <div className="roadmap__bar">
                                    <span> Q2 2022 </span>
                                </div>
                            </div>
                            <div className="text">
                                <ul className="roadmap__list-row">
                                    <li className="roadmap__list-row-item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__list-row-link">NFT Marketplace</p>
                                    </li>
                                    <li className="roadmap__list-row-item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__list-row-link">
                                            Seed and Private round
                                        </p>
                                    </li>
                                    <li className="roadmap__list-row-item _huge-line">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__list-row-link">
                                            Formation of pools by Investors in the personal
                                            account, whixh will allow participants to enter more
                                            expensive Tiers, by joint efforts
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <ul className="roadmap__list">
                                    <li className="roadmap__item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__link">Dex Exchange</p>
                                    </li>
                                    <li className="roadmap__item">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__link">Smart Contract</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn">
                                <div className="roadmap__bar">
                                    <span> Q3 2022 </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="btn">
                                <div className="roadmap__bar">
                                    <span> Q4 2022 </span>
                                </div>
                            </div>
                            <div className="text">
                                <ul className="roadmap__bottom-list-second">
                                    <li className="roadmap__bottom-list-second-item _huge-line">
                                        <img src={checkedWhite} alt="" />
                                        <p className="roadmap__bottom-list-link">
                                            Placement of the first project on LaunchPad
                                            developed on ArteryChain
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
