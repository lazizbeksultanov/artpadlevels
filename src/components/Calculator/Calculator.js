import React from "react";
import {ArrowL, ArrowR} from "../../resources/svgImages/svgImages";

const Calculator = () => {
  const innerWith = window.innerWidth
  return(
      <div className="w-full border border-[#CD3ED0] rounded-[80px] calcres:px-16 px-6 py-12 my-24 bg-[#0E0E0E]">
        <div className="w-full calcres:flex">
            <div className="calcres:w-1/3 w-full calcres:m-0 my-4">
                <div className="text-center">
                    <p className="text-white font-bold text-2xl">Time</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center whitespace-nowrap">
                        <div className="flex items-center"><ArrowL /><p className="text-gray-700 text-sm font-semibold ml-3 text-ellipsis">6 {innerWith > 420 ? "monts" : "m."}</p></div>
                        <p className="text-[#CD3ED0] text-xl font-semibold mx-4 whitespace-nowrap">1 monts</p>
                        <div className="flex items-center"><p className="text-gray-700 text-sm font-semibold mr-3 text-ellipsis">3 {innerWith > 420 ? "monts" : "m."}</p><ArrowR/></div>
                    </div>
                </div>
                <div className="my-8 calcres:block hidden">
                    <textarea className="border-[3px] px-4 py-2 h-32 rounded-2xl border-[#48205A] outline-none w-full bg-[#0E0E0E] text-white" style={{resize: "none"}} />
                </div>
                <div className="calcres:flex hidden w-full justify-center">
                    <button className={"outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                        Approve
                    </button>
                </div>
            </div>
            <div className="calcres:w-1/3 w-full calcres:m-0 my-4">
                <div className="text-center">
                    <p className="text-white font-bold text-2xl">APY</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center">
                        <p className="text-[#CD3ED0] text-xl font-semibold mx-4">40%</p>
                    </div>
                </div>
                <div className="calcres:flex hidden justify-center">
                    <button className={"mt-20 outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                        Connect Wallet
                    </button>
                </div>
            </div>
            <div className="calcres:w-1/3 w-full calcres:m-0 my-4">
                <div className="text-center">
                    <p className="text-white font-bold text-2xl">Allocation Multiplier</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center">
                        <p className="text-[#CD3ED0] text-xl font-semibold mx-4">1X</p>
                    </div>
                </div>
                <div className="my-8 calcres:block hidden">
                    <textarea className="border-[3px] px-4 py-2 h-32 rounded-2xl border-[#48205A] outline-none w-full bg-[#0E0E0E] text-white" style={{resize: "none"}} />
                </div>
                <div className="calcres:flex hidden w-full justify-center">
                    <button className={"outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                        Unstake
                    </button>
                </div>
            </div>
            <div className="calcres:hidden flex justify-center">
                <button className={"my-8 outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                    Connect Wallet
                </button>
            </div>
            <div className="calcres:hidden block">
                <div className="my-6">
                    <textarea className="border-[3px] px-4 py-2 h-16 rounded-2xl border-[#48205A] outline-none w-full bg-[#0E0E0E] text-white" style={{resize: "none"}} />
                </div>
                <div className="w-full flex justify-center">
                    <button className={"outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                        Approve
                    </button>
                </div>
            </div>
            <div className="calcres:hidden block calcres:p-0 pt-8">
                <div className="my-6">
                    <textarea className="border-[3px] px-4 py-2 h-16 rounded-2xl border-[#48205A] outline-none w-full bg-[#0E0E0E] text-white" style={{resize: "none"}} />
                </div>
                <div className="w-full flex justify-center">
                    <button className={"outline-none text-white cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-10 py-3"}>
                        Unstake
                    </button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Calculator;