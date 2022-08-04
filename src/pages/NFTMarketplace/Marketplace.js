import React from "react";
import Container from "../../components/Container/Container";
import "./Marketplace.css"
import soon from "../../resources/soon.mp4";

export default function Marketplace() {
    return(
        <div>
            <Container footer>
                    <video autoPlay loop muted className="absolute">
                        <source src={soon} type="video/mp4" />
                    </video>
            </Container>
        </div>
    )
}