import React from "react";
import Container from "../../components/Container/Container";
import {SearchIcon} from "../../resources/svgImages/svgImages";
import Title from "../../components/Title";
import ProjectsCard from "../../components/Cards/ProjectsCard";

const Projects = () => {
    return(
        <Container>
            <div className="xl:px-40 lg:px-28 md:px-16 px-12 my-16">
                {/*Tabbar start*/}
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="text-white text-xs xl:text-sm md:w-auto w-full">
                        <div className="md:block hidden">
                            <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 mr-2 sm:mt-2">upcoming [15]</button>
                            <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 mx-2 sm:mt-2">upcoming [15]</button>
                            <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 mx-2 sm:mt-2">upcoming [15]</button>
                            <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 ml-2 sm:ml-0 sm:mt-2">upcoming [15]</button>
                        </div>
                        <div className="md:hidden flex justify-between mt-2 w-full">
                            <div>
                                <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 block">upcoming [15]</button>
                                <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 mt-2">upcoming [15]</button>
                            </div>
                            <div>
                                <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 mx-2 block">upcoming [15]</button>
                                <button className="outline-none bg-auto border-2 border-[#CD3ED0] rounded-lg py-2 px-6 ml-2 mt-2">upcoming [15]</button>
                            </div>
                        </div>
                    </div>
                    <div className="grow">

                    </div>
                    <div className="lg:order-last order-first lg:mt-2.5 sm:w-auto w-full">
                        <div className="absolute my-1.5 mx-2">
                            <SearchIcon />
                        </div>
                        <input type="text" className="outline-none bg-black border-2 p-2 pl-10 text-white text-sm sm:w-auto w-full border-[#CD3ED0] rounded-lg" placeholder="Search Pools" />
                    </div>
                </div>
                {/*Tabbar end*/}
                <p className={`text-white md:text-4xl text-3xl font-bold my-10`}>Upcoming IDOs</p>
                <div className="">
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                </div>
            </div>
        </Container>
    )
}

export default Projects;