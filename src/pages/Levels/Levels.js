import React from "react";
import Title from "../../components/Title";
import LevelsCard from "../../components/Cards/LevelsCard";
import Calculator from "../../components/Calculator/Calculator";
import Container from "../../components/Container/Container";

const Levels = () => {
    return (
            <Container>
                <div className="md:mt-16 mt-10 xl:px-64 lg:px-36 md:px-20 sm:px-8 px-4">
                    <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
                    <div className="flex w-full my-24 flex-col sm:flex-row">
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                    </div>
                    <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
                    <div className="flex w-full my-24 flex-col sm:flex-row">
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                    </div>
                    <div className="flex w-full my-36 flex-col sm:flex-row">
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                    </div>
                    <Title color="white" title="Lottery Levels" artpadC={true} className={"tracking-widest"} />
                    <div className="flex w-full mt-36 mb-28 justify-center flex-col sm:flex-row">
                        <LevelsCard title="Tier 1" description="Staking Requirements" price="2500 ARTR" mediumTitle="Pool Weight" mediumPrice="1x" bottomTitle="Allocation Type" bottomDesc="Lottery (25%)" buttonTitle="Stake" />
                    </div>
                </div>
                <div className="w-full px-16">
                    <Title color="white" title="Stake now - the longer you stake, the better the rewards!" />
                    <Calculator />
                </div>
            </Container>
    );
}

export default Levels;
