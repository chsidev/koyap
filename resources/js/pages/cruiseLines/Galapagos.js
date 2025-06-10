import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function Galapagos() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="Galapagos | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "The Ultimate Guide To Galapagos Cruises: Explore The Wonders Of The World's Most Unique Region"
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Galapagos |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "The Ultimate Guide To Galapagos Cruises: Explore The Wonders Of The World's Most Unique Region"
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/cruise-lines/galapagos'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    }
                ]}
            />
            <div className="items-center relative min-h-[300px]">
                <img
                    className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-full"
                    src={img_cruise}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full w-full">
                    {phoneFlag ? (
                        <h1 className="font-bold text-2xl text-center text-indigo-500">
                            The Ultimate Guide To Galapagos Cruises: Explore The
                            Wonders Of The World's Most Unique Region
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide To Galapagos Cruises: Explore The
                            Wonders Of The World's Most Unique Region
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        Galapagos cruising is the perfect way to see the
                        archipelago. There are so many incredible sights and
                        experiences to be had, and even if you’ve never been
                        there, it's still a bucket-list destination for any
                        traveler. Thanks to cruises offering up close encounters
                        with marine life as well as whale watching excursions
                        and snorkeling tours, Galapagos cruises are among the
                        best ways to explore this unique region known as ‘the
                        cradle of evolution’. However, before you book your
                        cruise, you may want to make sure that you know what
                        you're getting yourself into. Here is everything you
                        need to know about cruising in Galapagos before your
                        trip.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Why go on a cruise in Galapagos?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Let’s be honest, Galapagos cruising isn’t for everyone.
                        You need a certain level of adventure and excitement in
                        your life to want to spend several weeks on a ship,
                        surrounded by others doing the exact same thing. For
                        those who thrive on the thrill and adrenaline of travel,
                        it’s an unforgettable experience. Whether you want to
                        see marine life, snorkel with sharks, or just relax by
                        the pool, there are many different types of Galapagos
                        cruise. Some cruises focus on snorkeling and swimming
                        with sea turtles, while others focus on whale watching.
                        You can also choose a cruise that focuses on visiting
                        one of the archipelago’s many islands. Some cruises even
                        offer kayaking and hiking excursions to get the most out
                        of your Galapagos cruise.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Types of Galapagos Cruises
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        <b>Coral reef</b> - These cruises focus on visiting the
                        Galapagos’ beautiful coral reefs. You’ll likely have
                        many days at sea while traveling between the various
                        islands, so you can choose a cruise that focuses on one
                        or two different reef types. There are also some cruises
                        that visit all four of the archipelago’s major reef
                        types.
                        <br />
                        <b>Marine life</b> - If you love seeing sea creatures
                        but don’t care so much about visiting an island, a
                        cruise that focuses on marine life is for you. You may
                        see tropical fish, sealife, or even large marine mammals
                        on a cruise like this.
                        <br />
                        <b>Snorkeling</b> - If you love seeing marine life in
                        its natural environment, snorkeling is for you.
                        Depending on which cruise you choose, you may see
                        tropical fish, sea turtles, and maybe even sharks.
                        <br />
                        <b>Whale watching</b> - If you want to see whales, but
                        don’t want to spend a significant amount of time on the
                        water, a cruise that focuses on whale watching is ideal.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Where to sail in Galapagos
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        There are many different cruise lines offering Galapagos
                        cruises, and each one will have a slightly different
                        itinerary. If you’re looking for an in-depth experience,
                        then you’ll want a cruise that focuses on visiting one
                        of the archipelago’s four major islands - Española, San
                        Cristobal, Santa Cruz, or Isabela. The other islands are
                        all connected via a single bridge, and so you can visit
                        each one in a single day. Most cruise lines will let you
                        choose between one of these four islands. If you’re
                        really looking to get the most out of your Galapagos
                        cruise, it may be worth choosing a cruise line that has
                        an itinerary that focuses on one island.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        When to sail in Galapagos
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Since you’ll be traveling between the islands in a
                        single day, there’s not a whole lot of difference in the
                        timing of your trip. Generally, the best time to visit
                        is between October and April, when the weather is warm
                        and sunny.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruise companies sail to the Galapagos?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Many of the same cruise lines that offer cruises to the
                        Caribbean and Mexico also offer cruises to Galapagos.
                        Popular options include Holland America Line, Crystal
                        Cruises, and Celebrity Cruises. If you’re not sure which
                        cruise line to choose, we recommend booking a cruise
                        with a cruise line that specializes in sailing to remote
                        destinations. While all cruise lines sail to the
                        Galapagos, some offer more intimate, culturally focused
                        itineraries that are worth the extra money.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruises visit Darwin and Wolf Bay?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Some of the most popular cruises to Galapagos sail to
                        visit Darwin and Wolf Bay, an important marine research
                        station. These two islands are important for research
                        into marine life because they are relatively isolated
                        and protected from outside influences. Visiting Darwin
                        and Wolf Bay is a top priority for many cruise lines, so
                        they tend to offer a selection of cruises that visit
                        these islands. You can often choose between a cruise
                        that focuses on visiting Darwin or Wolf Bay, or one that
                        visits both islands. Some cruise lines offer both a
                        Darwin and Wolf Bay-focused cruise, and a cruise focused
                        on exploring the archipelago as a whole.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruises visit Española and Plaza de las Torres?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        If you love exploring smaller islands, some of the most
                        popular cruises to Galapagos sail to visit Española and
                        Plaza de las Torres. These are two small islands that
                        are home to abundant wildlife and stunning scenery.
                        There are also many cruise lines that offer cruises that
                        visit these two islands. Popular options include Viking
                        Ocean Cruises, Royal Caribbean, and Norwegian Cruise
                        Line.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruise lines visit Santiago and San Cristobal
                        Island?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        If you want to sail to see the most remote islands in
                        the Galapagos, you’ll want a cruise that visits Santiago
                        and San Cristobal Island. These are two of the
                        archipelago’s most remote and impressive islands. You
                        can often choose between a cruise that visits Santiago
                        or San Cristobal Island, or one that visits both
                        islands. Popular cruise lines that offer cruises that
                        visit both islands include Disney Cruise Line, Holland
                        America Line, and Princess Cruises.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruises visit Baltra/San Miguel Island and Santa
                        Cruz/Harder Cay?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        If you want a cruise that visits some of the
                        archipelago’s most remote islands, there are many
                        options that visit Baltra/San Miguel Island or Santa
                        Cruz/Harder Cay. These are the archipelago’s two most
                        remote islands, and both are home to stunning scenery
                        and abundant wildlife. Many popular cruise lines that
                        visit these two islands include Celebrity Cruises,
                        Disney Cruise Line, Viking Ocean Cruises, and Norwegian
                        Cruise Line.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Bottom line
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to the Galapagos is hard to beat for the
                        experience and adventure it offers, but make sure that
                        you choose your cruise wisely. You want to make sure
                        that you pick a cruise line that focuses on sailing to
                        remote destinations and offers an authentic experience
                        for your trip. Once you’ve chosen your cruise line and
                        chosen an itinerary, you’re ready to embark on one of
                        the most unique and memorable trips you’ll ever take.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Galapagos;
