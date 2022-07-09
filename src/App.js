import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title";
import Card from "./components/Card/Card";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
        <div className="md:mt-16 mt-10 xl:px-64 lg:px-36 md:px-20 sm:px-8 px-4">
            <Title color="white" title="ArtPad Levels" className={"mb-8"} />
            <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
            <div className="flex w-full my-24 flex-col sm:flex-row">
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
            </div>
            <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
            <div className="flex w-full my-24 flex-col sm:flex-row">
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
            </div>
            <div className="flex w-full my-36 flex-col sm:flex-row">
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
            </div>
            <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
            <div className="flex w-full mt-36 mb-28 justify-center flex-col sm:flex-row">
                <Card title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
            </div>
        </div>
        <div className="w-full px-16">
            <Title color="white" title="Stake now - the longer you stake, the better the rewards!" />
            <Calculator />
        </div>
        <div className="w-full md:px-16 px-8">
            <Footer />
        </div>
    </div>
  );
}

export default App;
