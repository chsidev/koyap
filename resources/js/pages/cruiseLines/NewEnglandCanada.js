import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function NewEnglandCanada() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="New England and Canada Cruises | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            'The Ultimate Guide to New England and Canada Cruises'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'New England and Canada Cruises |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            'The Ultimate Guide to New England and Canada Cruises'
                    },
                    {
                        property: 'og:url',
                        content:
                            'https://koyap.com/cruise-lines/newenglandcanada'
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
                            The Ultimate Guide to New England and Canada Cruises
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide to New England and Canada Cruises
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        New England and Canada cruises are a fantastic way to
                        get away from the hustle and bustle of everyday life.
                        You’ll have the opportunity to explore new destinations,
                        learn about local history, and see new things all while
                        relaxing on a cruise ship. New England and Canada
                        cruises offer you the opportunity to escape to another
                        world for just a few days. You can explore beautiful
                        natural environments, enjoy time with friends or family,
                        and learn about new cultures all at the same time. When
                        you book one of these cruises, you’ll be able to see the
                        most picturesque parts of both New England and Canada
                        without having to drive there. There are many different
                        things you should know before booking your cruise – such
                        as what amenities are included in each cruise, how much
                        they cost, what activities are available on board each
                        ship, and which itinerary might be right for you. Read
                        on to discover everything you need to know about New
                        England and Canada cruisers so that you can find the
                        perfect one for your next vacation.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What to Know Before You Book a New England or Canada
                        Cruise
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruise prices can vary widely depending on the time of
                        year, the length of the cruise, port locations, and
                        features and amenities that are included in the cruise.
                        You should be able to find a cruise that fits your needs
                        and budget, but the more research you do and the earlier
                        you book, the better deal you are likely to get. Timing
                        <br />- New England and Canada cruises generally take
                        place from mid-April to mid-October. If you want to
                        avoid the cold and snow in New England or a Canadian
                        winter, you should plan to cruise during the summer
                        months (mid-June to mid-August). If you want to cruise
                        during warmer weather, book your cruise in the spring or
                        fall.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which cruise is right for you?
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        <b>New England cruises</b> - These cruises generally
                        begin and end in Boston, MA. Most New England cruises
                        visit Maine, New Hampshire, Massachusetts, Rhode Island,
                        and Connecticut. The most popular ports on these cruises
                        are Boston, Bar Harbor (Maine), Portland (Maine), and
                        New York City.
                        <br />
                        <b> Canada cruises</b> - These cruises generally begin
                        and end in Vancouver, BC. Most Canada cruises visit
                        British Columbia, Washington, Oregon, and/or California.
                        The most popular ports on these cruises are Vancouver,
                        Victoria (BC), San Francisco (CA), and Seattle (WA). If
                        you have children, consider booking a cruise that stops
                        at an amusement park. Some cruises even have special
                        camps for kids onboard. You should also keep in mind
                        your budget, the number of days you want to cruise, and
                        your desired destinations before booking your cruise.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Which port should you start your cruise in?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Boston, Massachusetts - Boston is a fantastic city with
                        a rich history. You can plan a day trip to Salem,
                        Massachusetts to explore the Salem Witch Museum and some
                        of the historic Salem sites. Another great Boston
                        excursion is a trip to the New England Aquarium. Don’t
                        forget to try a lobster roll while you are in the area!
                        <br />
                        <b>New York City</b> - New York is one of the most
                        popular cruise destinations. You can explore the city’s
                        culture, history, and architecture while you are there.
                        You might want to visit Times Square, the Metropolitan
                        Museum of Art, Central Park, or Rockefeller Center.
                        <br />
                        <b> Vancouver, BC</b> - Vancouver is a beautiful city
                        with a lively culture. You can visit Granville Island to
                        learn about Vancouver’s local art scene and history. You
                        can also explore Stanley Park, which is full of natural
                        wildlife and history.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Activities and dining on board
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruise activities are always changing, so you should
                        check with the cruise line directly to see what is
                        offered on the dates you are traveling. Some cruise
                        activities include Dining options on board include
                        traditional sit down meals, a buffet, room service, or
                        even a specialty dining option where you can make
                        reservations for a gourmet meal in a private dining
                        room. If you have dietary restrictions or preferences,
                        make sure to let the cruise line know ahead of time so
                        they can accommodate you. Cruise Excursions - Some
                        cruise lines offer excursions in each port of call.
                        These excursions can be an excellent way to experience
                        the local culture while on vacation. You will have
                        access to excursions in both New England and Canada.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Cruise Excursions
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        If you want to learn more about the destinations you’ll
                        be visiting on your cruise, you should book a cruise
                        excursion. Cruise excursions are guided tours offered by
                        the cruise line that take you to the most popular
                        destinations in the region. Most cruise lines offer
                        several different types of excursions. You can choose
                        from guided tours that take you to popular attractions,
                        like the USS Constitution Museum in Boston or the
                        Metropolitan Museum of Art in New York City. You can
                        also go on nature-themed excursions, such as a
                        whale-watching tour in New England or a forest walk in
                        Canada.
                    </p>
                    <p className="mt-2 text-lg break-words indent-4">
                        New England and Canada cruises offer you the opportunity
                        to explore the cities that you’ll be visiting using the
                        cruise line’s excursions. You can use these excursions
                        to see the best of the city without having to worry
                        about transportation or navigation. You can choose from
                        several different excursions that are geared towards
                        people of all ages and interests – such as museums,
                        outdoor activities, the city’s history, or shopping. You
                        can book these excursions online, or with the help of
                        your cruise line’s cruise director.
                    </p>
                    <p className="mt-2 text-lg break-words indent-4">
                        The cruise director will let you know what the options
                        are and let you decide which one suits you best. This is
                        a great way to explore new cities without having to
                        navigate the city on your own. You can also use the
                        excursion as transportation, meaning that you don’t have
                        to worry about getting back to the ship.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Final Words
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        New England and Canada cruises are an excellent way to
                        experience the beauty of two amazing areas of the world
                        in just a few days. You can explore new places, learn
                        about new cultures, and have time to relax and unwind on
                        a cruise ship. These cruises are a great way to explore
                        new destinations, see new things, and make memories with
                        friends and family. When you book one of these cruises,
                        you’ll have access to amenities like amazing dining, fun
                        onboard activities, and amazing views from the deck. Now
                        that you know everything you need to know about New
                        England and Canada cruises, you can search for the
                        cruise that is right for you and your loved ones.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default NewEnglandCanada;
