import React, {useState} from "react";
import Container from "../../components/Container/Container";
import {FaqItem} from "./faqItem";

export default function Faq() {


    const data = [
        {
            title: "1. How can I participate in IDO?",
            description:
                <div>
                    <a href="#" className="text-[#CD3ED0] text-sm my-2 underline">Read the full guide in our official documentation</a>
                    <p className="text-sm">1.Register in your personal account <br/>
                        2. Top up the Main $ARTR wallet with the required number of coins through the Buy <span>ARTR</span> section
                        3. Go to the Levels page <br/>
                        4. Send the required amount of $ARTR to Staking to get one of the <span className="text-[#CD3ED0] no-underline"><a
                            href="#">levels</a></span>. You can see the required amount for staking in the list of levels, as well as the terms of placement and conditions for them. <br/>
                        5. Register for the IDO you want to participate in. The IDO registration period usually starts 72 hours before the start of IDO, you need to open the <span className="text-[#CD3ED0] no-underline"><a
                            href="#">Projects</a></span> page and click the “Register” button in the IDO pool card.</p>
                </div>
        },
        {
            title: "2. What are the steps in IDO?",
            description: <p className="text-sm">
                1. Registration for IDO opens 72 hours before the start of the IDO <br/>
                2. Registration closes 4 hours before the start of IDO sales<br/>
                3. Winners of lottery levels and winners of the white list are selected. You can see them on the pool page.<br/>
                4. The distribution of the base allocation is calculated, which depends on the number of participants and confirms that there are enough tokens for a guaranteed distribution.<br/>
                5. The sale of IDO begins, registered participants with guaranteed allocations, lottery and whitelist winners can finance into the IDO pool in the amount of the received token distribution.<br/>
                6. The FCFS round (First Come First Take) starts 20 minutes before the end of the sale<br/>
                7. After the sale is completed, we collect distribution data. Information about tokens and listing can be found on the <span className="text-[#CD3ED0] no-underline"><a
                href="#">ArtPad Announcements</a></span> Telegram channel or on the project's social networks.
            </p>
        },
        {
            title: "3. What is First Come First Serve (FCFS)? Who can participate in it?",
            description: <p className="text-sm">
                If the pool is not sold out, the FCFS round opens 20 minutes before the end of the sale. <br/>

                The first two rounds - 50% and 100% - are open only to previously registered participants. It includes lottery participants who did not win the allocation. <br/>

                Starting from round 3 - 200% - all participants who have a stake, including unregistered ones, can take part.<br/>

                All participants receive an additional distribution on top of their levels: first + 50% of the base distribution, then +100%, then + 200%. Unregistered participants receive only a percentage from above, without allocating a base.<br/>

                The winners of the white list do NOT receive an additional distribution.<br/>

                <a href="#" className="text-[#CD3ED0] no-underline">Read more about the sale of FCFS in our official documentation.</a><br/>
            </p>
        },
        {
            title: "4. Do I need to spread (unstake) / steak for each IDO?",
            description: <p className="text-sm">
                As soon as you stake your tokens, they are blocked. The blocking period depends on the specific level at which you are stuck: 1 month, 3 months, 6 months and 1 year. <br/>
                If the initial period of your staking has ended, but you have not chosen a new one, then every time you register for IDO, the system will block your pool for 1 month. <br/>
                You can take (unstake) ahead of the blocking period, but with a 25% fee. Or wait for the end of the staking period. <br/>
            </p>
        },
        {
            title: "5. Can I shake (unstake) after each IDO?",
            description: <p className="text-sm">
                No. You are entitled to any IDO as long as your $ARTR remains in the stake. The amount of your steak will correspond to the current amount in the level system.
            </p>
        },
    ]
    return(
        <Container>
            <div className="w-full px-4 mt-8">
                <div className="w-full border border-[#CD3ED0] rounded-3xl px-10 py-4">
                    <p className="text-center text-3xl font-semibold mb-16">FAQ</p>
                    <div className="flex flex-col w-full">
                        {data ? data.map((item) => (
                            <FaqItem item={item} />
                        )) : ""}
                    </div>
                </div>
            </div>
        </Container>
    )
}