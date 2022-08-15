import React from "react";
import Container from "../../components/Container/Container";
import SwapInputLabelIcon from "../../resources/svgImages/swapInputLabelIcon.svg"
import SwapExchange from "../../resources/svgImages/SwaoExchange.png"
import timeIt from "../../resources/svgImages/time.svg"
import Sync from "../../resources/svgImages/Sync.svg"
import Key from "../../resources/svgImages/key.svg"

export default function Swap() {
    return (
        <Container>
            <div className="w-full flex px-32">
                <div className="w-1/3">
                    <div className="w-full pr-8">
                        <div className="w-full border border-[#6B1495] rounded-3xl">
                            <div className="text-center p-6 border-b border-[#6B1495]">
                                <p className="text-3xl font-semibold text-[#CD3ED0]">Swap</p>
                                <p>Trade tokens in ad instant</p>
                            </div>
                            <div className="px-16 pt-8">
                                <div>
                                    <div>
                                        <img src={SwapInputLabelIcon} alt="" className="inline-block"/><span
                                        className="text-white font-semibold">ARTR</span>
                                    </div>
                                    <input type="text" defaultValue="0.0"
                                           className="bg-transparent cursor-pointer w-full border border-[#6B1495] rounded-3xl p-8 outline-none mt-2 text-center"/>
                                </div>
                                <div className="w-full flex justify-end mt-4 -mb-4">
                                    <button><img src={SwapExchange} alt=""/></button>
                                </div>
                                <div>
                                    <div>
                                        <img src={SwapInputLabelIcon} alt="" className="inline-block"/><span
                                        className="text-white font-semibold">wARTR</span>
                                    </div>
                                    <input type="text" defaultValue="0.0"
                                           className="bg-transparent cursor-pointer w-full border border-[#6B1495] rounded-3xl p-8 outline-none mt-2 text-center"/>
                                </div>
                                <div className="text-center py-6">
                                    <p className="text-md text-[#CD3ED0] font-semibold">Slippage Tolerances</p>
                                    <p className="text-white text-4xl mt-3 font-bold">0.5%</p>
                                </div>
                            </div>
                            <div className="px-8 w-full pb-8 border-b border-[#6B1495]">
                                <button className="py-4 text-lg w-full rounded-2xl"
                                        style={{background: "linear-gradient(90deg, #CD3ED0 14.1%, #6B1495 144.51%)"}}>Connect
                                    Wallet
                                </button>
                            </div>
                            <div className="px-4 w-full flex w-full justify-between my-3">
                                <button><img src={timeIt} alt=""/></button>
                                <button><img src={Sync} alt=""/></button>
                                <button><img src={Key} alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="w-full pl-8">
                        <div className="w-full flex justify-between mb-3">
                            <div className="flex items-center">
                                <div>
                                    <img src={SwapInputLabelIcon} alt="" className="ml-1.5 w-auto"/>
                                </div>
                                <div>
                                    <img src={SwapInputLabelIcon} alt="" className="ml-1.5"/>
                                </div>
                                <p className="text-md font-semibold text-white mx-3">ARTR/wARTR</p>
                                <button><img src={SwapExchange} alt="" className="rotate-90" /></button>
                            </div>
                            <div className="border border-[#6B1495] rounded-3xl px-4 py-0.5 font-semibold text-[15px]">
                                <button className="outline-none bg-transparent mx-2 hover:text-[#CD3ED0] focus:text-[#CD3ED0]">24h</button>
                                <button className="outline-none bg-transparent mx-2 hover:text-[#CD3ED0] focus:text-[#CD3ED0]">1W</button>
                                <button className="outline-none bg-transparent mx-2 hover:text-[#CD3ED0] focus:text-[#CD3ED0]">1M</button>
                                <button className="outline-none bg-transparent mx-2 hover:text-[#CD3ED0] focus:text-[#CD3ED0]">1Y</button>
                            </div>
                        </div>
                        <div className="w-full border border-[#6B1495] rounded-3xl px-8">
                            <p className="text-right text-sm text-[#6B1495] mt-1.5">Jul 16, 2022, 01.04 PM</p>
                            <div className="w-full flex items-center justify-between">
                                <p className="font-semibold text-base">ARTR/wARTR</p>
                                <p className="text-3xl text-white font-bold">0.02293 ARTR/wARTR</p>
                                <p className="text-transparent">ARTR/wARTR</p>
                            </div>
                            <p className="text-center font-bold text-xl mt-4 text-[#CD3ED0]">+0.00132(+5.00%)</p>
                            <p className="text-center font-bold text-xl mt-2 text-white">05:00AM 1477 USDT</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}