import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = ({children, footer}) => {
    return(
        <div className="min-h-screen">
            <Navbar />
            {children}
            {footer ? "" : <Footer />}
        </div>
    )
}

export default Container;