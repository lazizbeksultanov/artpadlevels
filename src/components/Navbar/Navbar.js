import React, {useState} from "react";
import "./Navbar.css"
import {Account, BurgerMenu, BurgerMenuX, Calendar, Logo} from "../../resources/svgImages/svgImages";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);

    return(
        <>
        <div className="w-full navres:px-20 px-4 py-8 bg-black flex justify-between">
            <div className="float-left">
                <Logo/>
            </div>
            <div className="hidden text-white items-center xl:w-8/12 md:w-full navres:flex">
                <nav className="flex w-full justify-between items-center">
                    <NavLink to="/" className="hover:text-[#CD3ED0]">Home</NavLink>
                    <NavLink to="/projects" className="hover:text-[#CD3ED0]">Projects</NavLink>
                    <NavLink to="/levels" className="hover:text-[#CD3ED0]">Levels</NavLink>
                    <NavLink to="/bridge" className="hover:text-[#CD3ED0]">Bridge</NavLink>
                    <NavLink to="/faq" className="hover:text-[#CD3ED0]">FAQ</NavLink>
                    <NavLink to="/marketplace" className="hover:text-[#CD3ED0]">NFT Marketplace</NavLink>
                    <div className="flex items-center">
                        <button className={"outline-none bg-auto rounded-none cursor-pointer mr-6"}>
                            <Calendar />
                        </button>
                        <button className={"outline-none bg-auto rounded-none cursor-pointer mr-6"}>
                            <Account />
                        </button>
                        <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2 mr-4"}>
                            Buy ARTR
                        </button>
                        <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2"}>
                            Connect Wallet
                        </button>
                    </div>
                </nav>
            </div>
            <button className="block navres:hidden outline-none bg-auto rounded-none p-1" onClick={() => {setActive(true)}}>
                <BurgerMenu />
            </button>
            </div>
            <div className={`w-full ease-in-out duration-500 bg-black min-h-screen z-10 fixed inset-0 ${active ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="w-full px-4">
                    <div className="w-full flex justify-between pt-12 pb-8">
                        <div className="flex">
                            <button className={"outline-none bg-auto rounded-none cursor-pointer mr-6"}>
                                <Account />
                            </button>
                            <button className={"outline-none bg-auto rounded-none cursor-pointer"}>
                                <Calendar />
                            </button>
                        </div>
                        <div>
                            <button className="outline-none rounded-none bg-auto" onClick={() => {setActive(false)}}>
                                <BurgerMenuX/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col text-2xl text-white">
                        <NavLink to="/" className="hover:text-[#CD3ED0] py-3">Home</NavLink>
                        <NavLink to="/projects" className="hover:text-[#CD3ED0] py-3">Projects</NavLink>
                        <NavLink to="/levels" className="hover:text-[#CD3ED0] py-3">Levels</NavLink>
                        <NavLink to="/bridge" className="hover:text-[#CD3ED0] py-3">Bridge</NavLink>
                        <NavLink to="/faq" className="hover:text-[#CD3ED0] py-3">FAQ</NavLink>
                        <NavLink to="/marketplace" className="hover:text-[#CD3ED0] py-3">NFT Marketplace</NavLink>
                    </div>
                    <div className="w-full text-xl text-white font-semibold">
                        <button className={"outline-none block my-4 mx-auto min-w-[50%] cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2"}>
                            Buy ARTR
                        </button>
                        <button className={"outline-none block my-4 mx-auto min-w-[50%] cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2"}>
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar