import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function SouthAmerica() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="South America  | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content: 'The Ultimate Guide To South America Cruises'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'South America  |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'The Ultimate Guide To South America Cruises'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/cruise-lines/southamerica'
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
                            The Ultimate Guide To South America Cruises
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide To South America Cruises
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What Ships Sail to South America?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        South America is served by a range of different cruise
                        lines, with most of the leading lines offering
                        itineraries to all or part of the continent. While
                        Carnival Cruises, Celebrity Cruises and MSC Cruises all
                        regularly sail to South America, each with their own
                        fleet of ships. Holland America, Norwegian Cruise Line
                        and TUI Cruises also offer cruises to South America, as
                        do Crystal Cruises, Princess Cruises and Royal Caribbean
                        International. Plus, if you’re traveling from Europe,
                        you can also choose from a range of different European
                        lines, including Fred. Olsen Cruise Lines, Celebrity
                        Cruises and Norwegian Cruise Line. Additionally, there
                        are a range of Asian cruise lines that regularly sail to
                        South America. Among these are Azamara Club Cruises,
                        Celebrity Cruises, Crystal Cruises, Oceania Cruises and
                        Silversea Cruises.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which Ports of Call Are Available On a Cruise to South
                        America?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        While you can embark on a cruise to any destination in
                        South America, there are a few select cities and ports
                        of call that are especially popular with cruise-goers.
                        In Argentina and Uruguay, cruises typically dock in
                        Buenos Aires and Montevideo, respectively. Also popular
                        are cruises to Buenos Aires and Montevideo in Argentina
                        and Uruguay, as well as cruises to Punta Caneda and
                        Colonia del Sacramento in Mexico and cruises to Cayman
                        Islands in Costa Rica and Panama.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        How Much Does It Cost To Cruise South America?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Depending on what cruise line you choose, you can expect
                        to spend anywhere from $700 to $9,000 on a cruise to
                        South America. The average price is likely somewhere
                        around the $7,000 mark, though you may find some
                        bargains to be had if you shop around. With that in
                        mind, it’s worth noting that the cost of cruising in
                        South America can vary tremendously depending on which
                        cruise line you choose. While some cruise lines charge
                        the same amount for a week-long cruise to Argentina as
                        they do for a five-week cruise to Antarctica, you can
                        find some great deals if you’re flexible in your timing.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Things to Consider When Cruising in South Argentina and
                        Chile
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Before you book a cruise to South America, there are a
                        few things you should keep in mind. First and foremost,
                        you’ll want to make sure that your cruise line runs
                        cruises to your desired destination. While a lot of
                        cruise lines offer multi-destination cruises, a select
                        few, such as Celebrity and Holland America, focus
                        exclusively on cruises to South America. If your cruise
                        line does not offer cruises to your desired destination,
                        you’ll need to factor in travel times as well as any
                        additional costs, such as airfare or additional passport
                        fees. Finally, you’ll also want to factor in how much
                        you’ll enjoy your trip. After all, you may know that
                        cruising down the Río de la Plata is a
                        once-in-a-lifetime adventure, but it may not be worth
                        the price tag if you don’t actually enjoy yourself
                        during your voyage.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Final Words
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising down the South American coast is one of the
                        most affordable ways to explore the continent. Whether
                        you’re looking to spend a week cruising the Río de la
                        Plata or cutting a trip short and exploring one of the
                        region’s many UNESCO World Heritage Sites, cruising down
                        the South American coast is an affordable way to tour
                        this vast and diverse continent.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default SouthAmerica;
