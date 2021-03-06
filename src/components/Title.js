import React from "react";

const Title = (props) => {
  return(
      <p className={`${props.artpadC ? "text-[#CD3ED0]" : `text-${props.color}`} md:text-4xl text-3xl font-bold ${props.className} text-center`}>{props.title}</p>
  )
}

export default Title;