import React from "react";
import {DiscordIcon, MediumIcon, TelegramIcon, TwitterIcon} from "../../resources/svgImages/svgImages";
import {Link} from "react-router-dom";
import FooterLogo from "./../../resources/footerlogo.png"

const Footer = () => {
  return(
      <div className="w-full md:px-16 px-8">
        <div className="w-full py-20 text-white">
          <div className="md:flex md:justify-between">
            <div className="md:max-w-lg md:text-left text-center">
              <div>
                <p className="text-sm text-gray-700 font-semibold">ArtPad is a decentralized multi-chain fundraising platform enabling projects to raise capital and promise safety to early stage investors. Stake ArtPad tokens to get priority-access to promising projects.</p>
                <div className="flex md:mt-10 mt-6 md:mb-0 mb-4 md:justify-start justify-center">
                  <button className="outline-none bg-gray-700 cursor-pointer p-1 mr-4">
                    <MediumIcon />
                  </button>
                  <button className="outline-none bg-gray-700 cursor-pointer p-1 mr-4">
                    <TwitterIcon />
                  </button>
                  <button className="outline-none bg-gray-700 cursor-pointer p-1 mr-4">
                    <TelegramIcon />
                  </button>
                  <button className="outline-none bg-gray-700 cursor-pointer p-1">
                    <DiscordIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="text-white text-base">
                <Link to="/" className="hover:text-[#CD3ED0] block py-0.5">Home</Link>
                <Link to="/projects" className="hover:text-[#CD3ED0] block py-0.5">Projects</Link>
                <Link to="/levels" className="hover:text-[#CD3ED0] block py-0.5">Levels</Link>
                <Link to="/faq" className="hover:text-[#CD3ED0] block py-0.5">FAQ</Link>
                <Link to="/swap" className="hover:text-[#CD3ED0] block py-0.5">Swap</Link>
                <Link to="/market" className="hover:text-[#CD3ED0] block py-0.5">NFT Marketplace</Link>
              </div>
            </div>
            <div className="md:block hidden">
              <p className="text-sm text-gray-700 font-semibold">Commuity:</p>
              <button className="outline-none text-white font-semibold block text-base px-3 py-1.5 border border-white rounded-lg mt-2 mb-1">
                Telegram
              </button>
              <button className="outline-none text-white font-semibold text-base px-3 py-1.5 border border-white rounded-lg my-2">
                DEM
              </button>
            </div>
            <div className="flex justify-between md:hidden">
              <div className="">
                <div className="text-white text-base">
                  <Link to="/" className="hover:text-[#CD3ED0] block py-0.5">Home</Link>
                  <Link to="/projects" className="hover:text-[#CD3ED0] block py-0.5">Projects</Link>
                  <Link to="/levels" className="hover:text-[#CD3ED0] block py-0.5">Levels</Link>
                  <Link to="/faq" className="hover:text-[#CD3ED0] block py-0.5">FAQ</Link>
                  <Link to="/swap" className="hover:text-[#CD3ED0] block py-0.5">Swap</Link>
                  <Link to="/market" className="hover:text-[#CD3ED0] block py-0.5">NFT Marketplace</Link>
                </div>
              </div>
              <div className="">
                <p className="text-sm text-gray-700 font-semibold">Commuity:</p>
                <button className="outline-none text-white font-semibold block text-base px-3 py-1.5 border border-white rounded-lg mt-2 mb-1">
                  Telegram
                </button>
                <button className="outline-none text-white font-semibold text-base px-3 py-1.5 border border-white rounded-lg my-2">
                  DEM
                </button>
              </div>
            </div>
            <div className="md:m-0 mt-6">
              <p className="text-sm text-gray-700 font-semibold md:text-left text-center md:mb-0 mb-2">Audited by:</p>
              <img src={FooterLogo} alt="" className="md:mx-0 mx-auto" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer;