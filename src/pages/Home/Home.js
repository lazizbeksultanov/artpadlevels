import React from 'react';
import Container from '../../components/Container/Container';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import PlatformSection from '../../components/PlatformSection/PlatformSection';
import RoadMap from '../../components/RoadMap/RoadMap';
import SendEmail from '../../components/SendEmail/SendEmail';

export default function Home() {
  return (
    <Container>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <HomeBanner />
        <PlatformSection />
        <RoadMap />
        <SendEmail />
      </div>
    </Container>
  )
}
