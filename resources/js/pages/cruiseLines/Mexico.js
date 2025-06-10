import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function Mexico() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="Mexico | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content: 'The Ultimate Guide to Cruising to Mexico'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Mexico |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'The Ultimate Guide to Cruising to Mexico'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/cruise-lines/mexico'
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
                            The Ultimate Guide to Cruising to Mexico
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide to Cruising to Mexico
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        Cruising to Mexico is one of the most popular vacation
                        packages for North Americans. It’s easy to see why: The
                        country offers a wealth of destinations that are not
                        only affordable, but also accommodating, safe, and
                        accessible from just about anywhere in the United
                        States. In addition to all of these perks, cruising to
                        Mexico offers travelers a unique opportunity to get off
                        the grid for a few days and enjoy some relaxation time
                        away from their day-to-day lives. On a cruise, you can
                        immerse yourself in culture and sights you probably
                        wouldn’t explore on your own. Whether you’re booking
                        your first cruise or looking for something new and
                        exciting, this ultimate guide has everything you need to
                        know before setting sail with friends or family. From
                        details regarding different ports of call to tips on
                        what you should pack (and leave behind), this article
                        has it all!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What is a Mexico Cruise?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is a vacation experience where
                        travelers book a trip on a large-scale, passenger-ferry
                        boat, usually spanning 7 to 14 nights. Cruising is a
                        diverse vacation type that can appeal to almost anyone
                        because the boats often host a wide range of activities,
                        food, entertainment, and even destination options.
                        Mexico cruises are most popular during the spring and
                        fall months, when the water is generally warmer than the
                        rest of the year. Cruise lines offer itineraries that
                        depart from various U.S. ports and travel to a handful
                        of destinations in Mexico. The most common cruise ports
                        include Los Angeles, San Francisco, Seattle, New York
                        City, Miami, and Houston. Although cruising to Mexico
                        may be more affordable from the West Coast, it’s also
                        easier to access Hawaii and other Pacific Islands when
                        traveling out of Los Angeles or San Francisco.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Where to Go When Cruising to Mexico?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        There are many cruise destinations in Mexico.
                        Predictably, the popularity of these ports fluctuates,
                        which means some areas are best visited during certain
                        times of the year. To avoid crowds and high prices, it’s
                        important to do some research before you book your
                        Mexico cruise.
                        <br /> Here are the most popular ports of call:
                        <br />
                        <b> - Baja (Gulf of California):</b> The Baja region
                        remains one of the most sought-after cruise destinations
                        in Mexico. If you’re looking for a more remote and
                        adventurous experience, Baja is a great choice. The
                        region is about 100 miles south of the border and is
                        home to a wide range of attractions like Cabo San Lucas,
                        La Paz, or Puerto Vallarta.
                        <br />
                        <b> - Cabo San Lucas (Baja):</b> Cabo is appealing to
                        both families and couples, making it one of the most
                        popular destinations in the Baja region. If you’re
                        cruising during the spring or fall, it’s important to
                        know that the weather is generally warm and sunny, but
                        can also be very windy.
                        <br />
                        <b> - Mazatlan (Southeast Mexico):</b> This port is one
                        of the most popular cruise destinations in all of
                        Mexico. Located in the Southeastern corner of the
                        country, Mazatlan is a tourist hub with a wide selection
                        of shops, bars, and restaurants.
                        <br />
                        <b> - Puerto Vallarta (Baja):</b> Puerto Vallarta is
                        another popular Baja destination. The city is a great
                        choice for families, as it offers a wide variety of
                        kid-friendly attractions like the Blue Pyramids and the
                        Underwater Museum.
                        <br />
                        <b> - Cabo San Lucus and Mazatlan</b> are the most
                        common ports of call for short cruises (4 to 7 nights).
                        Longer voyages generally begin or end in a different
                        Mexican port.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Embarkation and Disembarkation
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is a hassle-free vacation type that
                        allows you to skip the airport and jump straight onto
                        the boat. The process starts with “embarkation,” the
                        term that refers to the act of boarding the cruise ship.
                        Embarkation schedules vary between cruise lines, but
                        most passengers are able to board the boat between noon
                        and 2 p.m. To get on board, you’ll need to present a
                        government-issued ID (e.g., passport or driver’s
                        license) and a cruise booking confirmation number.
                        Passengers who are under the age of 18 or traveling
                        without an adult will also need to show a birth
                        certificate. The cruise terminals you arrive at will
                        vary depending on your departure city. Popular ports of
                        call include Los Angeles, San Francisco, Seattle, New
                        York City, Miami, and Houston. Once you’ve made it past
                        the check-in desk, the cruise staff will direct you to
                        your cabin, where you’ll be able to drop off any luggage
                        you brought along.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Activities on Board
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is a bit like stepping into a resort
                        on water. The boat itself is like a mini-resort where
                        you’ll have tons of activities and amenities at your
                        fingertips. Most cruise lines offer a wide range of
                        activities, including:
                        <br />
                        <b>- Spa and Fitness Facilities:</b>
                        Most cruise ships host popular spas, fitness centers,
                        and yoga studios where you can relax, meditate, or work
                        out. Some cruise lines offer a “wellness program” where
                        you can get one-on-one advice on how to improve your
                        health.
                        <br />
                        <b>- Excursions:</b> Most cruise lines offer shore
                        excursions in each of the Mexican ports of call. Shore
                        excursions are guided tours where you can explore the
                        destination with a small group of fellow cruise
                        passengers.
                        <br />
                        <b>- Casino:</b> If you’re looking for an adult
                        diversion, many cruise ships host casinos. The gambling
                        areas are often open 24/7, so you can enjoy a game
                        whenever you’re feeling lucky.
                        <br />
                        <b>- Kids’ Clubs:</b> Cruises are a great vacation
                        option for families with young children. In fact, many
                        cruise lines host special clubs for kids under 12, where
                        they can play games, make friends, and have a great
                        time.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Food on Board
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is an indulgent experience, and the
                        food is no exception. Most cruise lines offer a wide
                        range of dining options to suit any preference,
                        including:
                        <br />
                        <b>- Buffet:</b> A large self-serve buffet is usually
                        available for breakfast and lunch. Depending on the
                        cruise line, you may be able to find a selection of hot
                        food items at the buffet, or just salads and fruit.
                        <br />
                        <b>- Restaurant:</b> For a more formal dining
                        experience, you can choose to eat in a sit-down
                        restaurant. Most cruise lines host several restaurants,
                        which are often themed and have menus that change each
                        day.
                        <br />
                        <b> - Room Service:</b>
                        Many cruise lines offer 24/7 room service where you can
                        order food items direct to your room.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Mexico Cruise Excursions
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is a great way to gain insight into
                        the country’s culture and history. Most cruise lines
                        offer a wide range of guided tours (called “excursions”)
                        in each port of call. Ex excursions usually last between
                        6 and 8 hours and include transportation between the
                        ship and a nearby city. It’s important to know that not
                        all excursions are created equal. Before booking an
                        excursion, be sure to do your research so you can select
                        the one that best suits your interests. When
                        researching, you should look for things like the length
                        of the tour, the size of the group, and whether or not
                        the excursion includes transportation. The most common
                        excursions include visits to nearby Mayan ruins,
                        cenotes, or cities like Cabo San Lucas and Puerto
                        Vallarta.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Rooms While Cruising to Mexico
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruising to Mexico is a relatively affordable vacation
                        type, but the type of room you choose can greatly affect
                        the total cost of your cruise. Most cruise lines offer
                        three room types:
                        <br />
                        <b>- Inside:</b> This is the least expensive room type,
                        but it’s not always the best option for those who are
                        sensitive to noise.
                        <br />
                        <b>- Oceanview:</b> The “middle child” of the cruise
                        room types, the ocean view room offers a great balance
                        between cost and convenience.
                        <br />
                        <b>- Balcony:</b> The balcony room is the most expensive
                        option and often comes with amenities like access to a
                        mini-bar or priority boarding. Before booking a cruise
                        to Mexico, it’s important to understand the different
                        room types so you can make the best decision for your
                        budget and needs.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Mexico;
