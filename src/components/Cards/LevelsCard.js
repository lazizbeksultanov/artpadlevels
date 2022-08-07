import React from "react";

const LevelsCard = (props) => {
  return(
      <div className="sm:w-1/3 w-full">
        <div className="text-center border border-[#CD3ED0] rounded-md">
          <p className="text-center text-white font-bold md:text-2xl text-xl mb-4">{props.title}</p>
          <p className="text-white md:text-sm text-xs mb-1">{props.description}</p>
          <p className="md:text-3xl text-2xl font-bold text-[#6B1495] mb-8">{props.price}</p>
          <div className="md:pt-2 md:pb-5 pt-1 pb-3 bg-[#48205A] border-b border-t border-[#CD3ED0]">
            <p className="text-white md:text-sm text-xs mb-0">{props.mediumTitle}</p>
            <p className="md:text-4xl text-3xl font-bold text-white">{props.mediumPrice}</p>
          </div>
          <div className="md:pt-10 md:pb-14 pt-8 pb-12">
            <p className="text-white md:text-sm text-xs mb-0">{props.bottomTitle}</p>
            <p className="md:text-2xl text-xl font-bold text-white">{props.bottomDesc}</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="outline-none hover:bg-[#CD3ED0] py-2 px-12 text-white border border-[#CD3ED0] hover:border-white my-8">{props.buttonTitle}</button>
        </div>
      </div>
  )
}

export default LevelsCard;