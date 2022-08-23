import React from 'react';
import Container from '../../components/Container/Container';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import PlatformSection from '../../components/PlatformSection/PlatformSection';
import RoadMap from '../../components/RoadMap/RoadMap';
import SendEmail from '../../components/SendEmail/SendEmail';
// import Binance from "node-binance-api";

export default function Home() {
    // const binance = new Binance().options({
    //     APIKEY: 'xHhcGbbTWcNV9JwzVgxeyd7pCvdBmED9I15d595Dz0OGVYYkvNtNQFgcCy5IFRah',
    //     APISECRET: 'SAMe0LvZyYjPNtQt42jM8UMyHjKM6KiyIhSZz38aNgCdjgnUrf9VUPesJXV0ISwi'
    // });
    // console.info(await binance.futuresPrices());
    return (
        <Container>
            <div style={{width: "100%", overflowX: "hidden"}}>
                <HomeBanner/>
                <PlatformSection/>
                <RoadMap/>
                <SendEmail/>
            </div>
        </Container>
    )
}
