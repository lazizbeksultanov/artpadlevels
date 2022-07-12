import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = ({children}) => {
    return(
        <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Container;