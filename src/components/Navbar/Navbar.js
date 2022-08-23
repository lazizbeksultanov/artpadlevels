import React, {useState} from "react";
import "./Navbar.css"
import {
    Account,
    BurgerMenu,
    BurgerMenuX,
    Calendar, CencelIcon, CheckIcon, ClipboardIcon, ExitIcon, LanguageIcon,
    Logo,
    MetamaskIcon, TrustWalletIcon,
    WalletConnectIcon
} from "../../resources/svgImages/svgImages";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [activeUserMenu, setActiveUserMenu] = useState(false);
    const [copiedSuccess, setCopiedSuccess] = useState('');

    const shortToken = (text) => {
        if (text.length > 11){
            return text.substring(0, 6) + "..." + text.substring(text.length, text.length-4)
        } return text
    }

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
                    <NavLink to="/swap" className="hover:text-[#CD3ED0]">Swap</NavLink>
                    <NavLink to="/faq" className="hover:text-[#CD3ED0]">FAQ</NavLink>
                    <NavLink to="/market" className="hover:text-[#CD3ED0]">NFT Marketplace</NavLink>
                    <div className="flex items-center">
                        <button className={"outline-none bg-auto rounded-none cursor-pointer mr-6"}>
                            <Calendar />
                        </button>
                        <div className="flex items-center mr-6 relative group">
                            <button className={"outline-none bg-auto rounded-none cursor-pointer"}>
                                <LanguageIcon />
                            </button>
                            <div className="absolute top-6 text-sm -ml-3 text-center group-hover:block hidden">
                                <p className="hover:text-[#CD3ED0] cursor-pointer">English</p>
                                <p className="hover:text-[#CD3ED0] cursor-pointer">Русский</p>
                            </div>
                        </div>
                        <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2 mr-4"}>
                            Buy ARTR
                        </button>
                        {/*<div className="relative group">*/}
                        {/*    <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2"}>*/}
                        {/*        Connect Wallet*/}
                        {/*    </button>*/}
                        {/*        <div className="absolute w-full text-[12px] z-10 group-hover:block hidden">*/}
                        {/*            <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2 my-2 flex items-center w-full"}>*/}
                        {/*                <div className="inline-block"><MetamaskIcon/></div> <span className="pt-1 text-center w-full">Metamask</span>*/}
                        {/*            </button>*/}
                        {/*            <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2 my-2 flex items-center w-full"}>*/}
                        {/*                <div className="inline-block">*/}
                        {/*                    <WalletConnectIcon/>*/}
                        {/*                </div>*/}
                        {/*                <span className="pt-1 text-center w-full">WalletConnect</span>*/}
                        {/*            </button>*/}
                        {/*            <button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-4 py-2 my-2 flex items-center w-full"}>*/}
                        {/*                <div className="inline-block"><TrustWalletIcon/></div> <span className="pt-1 text-center w-full">TrustWallet</span>*/}
                        {/*            </button>*/}
                        {/*        </div>*/}
                        {/*</div>*/}
                        <div className="relative group">
                            <div className="border-4 border-[#6B1495] rounded-md p-[5px] flex items-center">
                                <div className="text-[12px] font-bold leading-none mr-4 ml-1">
                                    <p className="mb-0.5">0.0135 BNB</p>
                                    <p className="text-[#CD3ED0]">0 wARTR</p>
                                </div>
                                <div className="font-light cursor-pointer text-sm bg-gradient-to-r from-[#CD3ED0] to-[#6D1E9F] py-1 px-1 rounded-3xl flex items-center" onClick={() =>  {navigator.clipboard.writeText('6gkdfvDbbnk4my0lVPFWd8RcxSRStzKeNOMsp6KK'); setCopiedSuccess('Copied!')}}><span className="mr-1">{shortToken("6gkdfvDbbnk4my0lVPFWd8RcxSRStzKeNOMsp6KK")}</span> <ClipboardIcon /></div>
                                <button className="bg-[#CC68CE] outline-none cursor-pointer rounded flex items-center ml-2" onClick={() => setActiveUserMenu(!activeUserMenu)}>
                                    <Account />
                                </button>
                            </div>
                            <div className={`absolute w-full border-2 border-[#CD3ED0] rounded-2xl py-2 px-4 z-10 ${activeUserMenu ? "block" : "hidden"}`}>
                                <div className="w-full flex justify-end">
                                    <button className="ml-auto text-[#CD3ED0]" onClick={() => setActiveUserMenu(false)}><CencelIcon /></button>
                                </div>
                                <ul className="list-none">
                                    <li className="border-b-2 border-[#CD3ED0] py-1.5 flex justify-between">
                                        <span>KYC</span>
                                        {/*<button className={"outline-none cursor-pointer bg-gradient-to-r from-[#CD3ED0] to-[#6B1495] rounded-[4px] px-1.5 py-0.5 text-sm"}>*/}
                                        {/*    Start Over*/}
                                        {/*</button>*/}
                                        <CheckIcon />
                                    </li>
                                    <li className="border-b-2 border-[#CD3ED0] py-1.5">Wallet</li>
                                    <li className="border-b-2 border-[#CD3ED0] py-1.5">Recent Transaction</li>
                                    <li className="border-b-2 border-[#CD3ED0] py-1.5">Your NFT</li>
                                    <li className="border-b-2 border-[#CD3ED0] py-1.5">Make a Profile</li>
                                    <li className="py-1.5 flex justify-between items-center"><span>Disconnect</span> <button><ExitIcon /></button></li>
                                </ul>
                            </div>
                        </div>
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
                        <NavLink to="/swap" className="hover:text-[#CD3ED0] py-3">Swap</NavLink>
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