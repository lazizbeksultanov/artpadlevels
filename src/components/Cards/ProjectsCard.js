import React from "react";
import ProjectsCardImg from "../../resources/images/ProjectsCardImg.png"
import {
    AnnouncementPurpleIcon,
    LanguagePurpleIcon,
    TelegramPurpleIcon,
    TwitterPurpleIcon
} from "../../resources/svgImages/svgImages";
import SeaorImg from "../../resources/images/SEOR1.png"

const ProjectsCard = () => {
    return(
        <div className="xl:w-1/3 sm:w-1/2 w-full inline-block">
            <div className="max-w-max border border-2 border-[#CD3ED0] my-4 rounded-md lg:mx-6 sm:mx-2 mx-0">
                <div className="relative">
                    <div className="absolute flex justify-between items-center w-full h-full px-4">
                        <div className="text-white 2xl:text-4xl lg:text-3xl md:text-2xl text-3xl">
                            <p className="font-bold mb-2">SEOR</p>
                            <p className="font-semibold mt-2">$SEOR</p>
                        </div>
                        <div className="text-white">
                            <img src={SeaorImg} alt=""/>
                        </div>
                    </div>
                    <img src={ProjectsCardImg} alt="" className="w-full" />
                </div>
                <div className="px-3 w-full">
                    <div className="w-full flex justify-between py-3 2xl:px-8 lg:px-4 md:px-2 px-2">
                        <button className="outline-none bg-auto">
                            <TelegramPurpleIcon />
                        </button>
                        <button className="outline-none bg-auto">
                            <TwitterPurpleIcon />
                        </button>
                        <button className="outline-none bg-auto">
                            <LanguagePurpleIcon />
                        </button>
                        <button className="outline-none bg-auto">
                            <AnnouncementPurpleIcon />
                        </button>
                    </div>
                    <div className="text-white bg-gray-600 rounded-2xl max-w-max text-sm px-2 py-1 my-2.5">
                        <p>UPCOMING</p>
                    </div>
                    <p className="text-white text-sm ">
                        SEOR is the next generation of decentralized Web3.0 application technology development infrastructure, which aims to provide users and developers
                    </p>
                    <div className="my-8">
                        <div className="flex justify-between items-center">
                            <p className="text-white 2xl:text-2xl md:text-xl text-lg">Total Raise</p><p className="2xl:text-3xl lg:text-2xl md:text-xl text-xl text-[#CD3ED0] overflow-ellipsis break-normal">$190 001</p>
                        </div>
                        <div className="flex justify-between items-center my-3">
                            <p className="text-white text-xl">Strats</p><p className="2xl:text-2xl md:text-xl text-lg text-[#CD3ED0] overflow-ellipsis break-normal">Jul 4, 11:00 UTC</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-white text-xl">Price</p><p className="2xl:text-2xl md:text-xl text-lg text-[#CD3ED0] overflow-ellipsis break-normal text-right`">1 SEOR = 0.045 BUSD</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-white 2xl:text-base text-sm">registrations opens ind 8 days, 23 hours</p><p className="text-base text-[#CD3ED0] overflow-ellipsis break-normal">0%</p>
                        </div>
                        <div className="bg-gray-600 rounded-lg h-2 my-2" />
                        <div className="flex justify-between items-center text-gray-600 font-semibold">
                            <p className="text-base">0 BUSD</p><p className="text-base overflow-ellipsis break-normal">0 / 4 222 222 SEOR</p>
                        </div>
                    </div>
                    <div className="text-right my-6">
                        <p className="text-white 2xl:text-2xl text-xl">Listing Time</p>
                        <p className="text-[#CD3ED0] 2xl:text-3xl text-2xl">Jul 7, 2022 11:00 UTC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;