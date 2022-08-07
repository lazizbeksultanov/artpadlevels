import React,{useState} from "react";

export const FaqItem = ({item}) => {
    const [active, setActive] = useState(false)

    return (
        <div className="w-full">
            <button className="border-t border-r border-l border-black w-full" onClick={() => setActive(!active)}>
                <div className="flex items-center justify-between h-12 px-3 font-semibold w-full">
                    <span className="truncate text-left text-2xl w-11/12">{item.title}</span>
                    <svg className={`w-10 h-10 ease-in-out duration-300 ${active ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="#CD3ED0">
                        <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
            </button>
            {active ?
                <div className={`overflow-hidden duration-300`}>
                    <div className="md:max-w-[70%] font-semibold">
                        <div className="pl-4">{item.description}</div>
                    </div>
                </div> : ""
            }
            <div className={`w-full h-[1px] bg-[#CD3ED0] ${active ? "my-12" : "my-4"}`} />
        </div>
    )
}