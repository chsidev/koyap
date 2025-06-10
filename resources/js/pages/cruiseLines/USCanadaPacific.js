import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function USCanadaPacific() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="U.S. & Canada Pacific | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            'The Ultimate Guide to U.S. & Canada Pacific Cruises'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'U.S. & Canada Pacific |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            'The Ultimate Guide to U.S. & Canada Pacific Cruises'
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://koyap.com/cruise-lines/uscanadapacific'
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
                            The Ultimate Guide to U.S. & Canada Pacific Cruises
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide to U.S. & Canada Pacific Cruises
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        The Pacific Ocean is home to some of the largest, most
                        popular cruise ships in the world. Each year, thousands
                        of cruisers embark on journeys to the western coast of
                        North America and beyond. These cruises offer travelers
                        a variety of itineraries that explore the waters around
                        Hawai’i, Alaska, Canada, New Zealand, Australia and
                        more. The U.S. and Canadian west coasts are home to some
                        of the best ports for cruising from in both summer and
                        winter seasons. Thanks to the equatorial current that
                        flows northward along South America and then up into the
                        Pacific Northwest between June and September every year
                        (the Westerlies). We have put together this ultimate
                        guide to help you find the perfect Pacific cruise with
                        all its insider secrets!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Introduction to Pacific Cruises
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        A Pacific cruise is a type of cruise where the itinerary
                        travels from East to West across the Pacific Ocean. Most
                        Pacific cruises originate from North America and travel
                        to destinations in Asia and Australasia. There are
                        several great cruise lines that operate Pacific cruises
                        including Carnival, Norwegian Cruise Lines, Royal
                        Caribbean, Celebrity Cruises, and Princess Cruises. The
                        majority of these cruises depart from ports in
                        California, Seattle, and British Columbia. There are
                        also a number of options to explore the South Pacific
                        from South America. Pacific cruises are typically 16-25
                        days in length and are offered during a range of
                        different seasons. Typically, the best time of year to
                        take a Pacific cruise is between May and September when
                        the weather is warm and dry.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which Month is Best for U.S. & Canada Pacific Cruises?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        The best month for Pacific cruises is always in the
                        summer, when the weather is warm and dry.
                        <br />
                        You can expect the following average temperatures during
                        the summer months in the destinations listed below:
                        <br />
                        <b>- Alaska:</b>
                        June-August - Average daily temperatures range between
                        35-70°F. <br />
                        <b>- British Columbia:</b> June-August - Average daily
                        temperatures range between 48-70°F.
                        <br />
                        <b> - California:</b>
                        June-August - Average daily temperatures range between
                        60-80°F <br />
                        <b>- Hawaii:</b> June-August - Average daily
                        temperatures range between 70-90°F <br />
                        <b>- New Zealand:</b>
                        June-August - Average daily temperatures range between
                        40-80°F.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What is Included in a Typical Pacific Cruise?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        A typical Pacific cruise will include a number of
                        on-board activities and excursions. You should check
                        with your cruise line to learn more about their specific
                        activities, but here are some examples to give you an
                        idea:
                        <br />
                        <b>- Fitness Centers:</b> Many cruise ships feature
                        fitness centers with modern exercise equipment.
                        <br />
                        <b>- Swimming Pools:</b> There are often several large
                        pools on board cruise ships, including a kiddy pool for
                        young passengers.
                        <br />
                        <b>- Dining:</b> Most cruises have several dining
                        options available, from casual buffets to fine-dining
                        restaurants.
                        <br />
                        <b>- Bars and Lounges:</b> Cruise ships have a variety
                        of bars and lounges where passengers can socialize with
                        other passengers.
                        <br />
                        <b>- Entertainment:</b> Most cruise ships feature a wide
                        variety of on-board activities and entertainment,
                        including shows, games, and excursions.
                        <br />
                        <b>- Shore Excursions:</b> Many cruises have pre-booked
                        shore excursions available at each port of call.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        The Best Ships for U.S. & Canada Pacific Cruises
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        The following are some of the best ships for U.S. and
                        Canada Pacific cruises:
                        <br />
                        <b>- Carnival Horizon:</b> This cruise ship features a
                        state-of-the-art design with a retro feel, with features
                        such as two retro-style pools and a Manhattan-inspired
                        design. The best part is that this ship is currently
                        cruising to Alaska! <br />
                        <b>- Royal Caribbean’s Ovation of the Seas:</b> This
                        massive cruise ship features a massive indoor park, an
                        indoor climbing wall, a FlowRider surf simulator, a
                        skating rink, and a mini golf course. <br />
                        <b>- Celebrity’s Celebrity Solstice:</b> This modern
                        cruise ship features a variety of unique dining
                        experiences including a Molecular Bar and an in-house
                        photographer to capture all the best moments. <br />
                        <b>- Norwegian Cruise Line’s Norwegian Bliss:</b> This
                        massive ship is currently sailing 5- and 7-night
                        itineraries from San Francisco and Los Angeles to
                        Hawaii. <br />
                        <b>- M/S Viking Star:</b> This ship is currently sailing
                        from Vancouver to Alaska and is the perfect cruise for
                        nature lovers.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Exciting Destinations on U.S. and Canada Pacific Cruises
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Now that you know all about Pacific cruises, let’s take
                        a look at some of the most exciting destinations you can
                        visit on these cruises. We have selected 11 of the best
                        destinations that you can visit on U.S. and Canada
                        Pacific cruises, including Alaska, Hawaii, New Zealand,
                        and more. <br />- The U.S. and Canada Pacific Coast -
                        The West Coast is open to many exciting Pacific cruises,
                        whether it be in summer or winter. You’ll find cruises
                        that explore the waters along the Pacific Northwest, the
                        California Coast, the Hawaiian Islands and more!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Cruise Excursions
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        If you want to explore the destinations you visit on
                        your cruise even further, then be sure to check out any
                        excursions that are available. Excursions are pre-booked
                        tours that depart from the cruise ship and take you to
                        nearby destinations. Most cruise lines offer excursions
                        for each port of call, though prices and availability
                        may vary between cruise lines. It is important to book
                        excursions early to ensure you get the ones you want.
                        Cruise excursions are an excellent way to explore the
                        destinations on your cruise without having to rely on
                        public transportation. Plus, you get to enjoy guided
                        tours in small groups with knowledgeable guides. These
                        excursions are an excellent way to explore a destination
                        you visit on your cruise. Most cruise lines offer
                        excursions for each port of call, though prices and
                        availability may vary between cruise lines. It is
                        important to book excursions early to ensure you get the
                        ones you want.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">Conclusion</h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        As you can see, a Pacific cruise is the perfect way to
                        explore the many exciting destinations on the western
                        edge of North America. From the tropical waters around
                        Hawaii to the chilly weather of Alaska, there are so
                        many fantastic destinations to choose from. If you are
                        dreaming of an adventure exploring the Pacific, all you
                        need to do is choose a cruise that suits your interests
                        and budget. Pacific cruises are available in many
                        different lengths and itineraries, so there is something
                        for everyone. With these tips, you can find the perfect
                        Pacific cruise to suit your interests and budget. Now is
                        the time to start planning your next adventure!
                    </p>
                </div>
            </div>
        </main>
    );
}

export default USCanadaPacific;
