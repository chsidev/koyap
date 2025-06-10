import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function Alaska() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="Alaska | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content: 'Luxury Cruise To Alaska: A Dream Come True'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content: 'Alaska |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'Luxury Cruise To Alaska: A Dream Come True'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/cruise-lines/alaska'
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
                            Luxury Cruise To Alaska: A Dream Come True
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Luxury Cruise To Alaska: A Dream Come True
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        You may think that cruising is a vacation for the rich
                        and famous. But with so many cruise lines now offering
                        affordable deals on luxury ships, you can actually
                        experience this once-exclusive vacation for much less
                        than you might think. <br />
                        Even if you'd rather not admit it, most of us have a
                        secret desire to become a world-famous explorer or
                        discover hidden island somewhere exotic.
                        <br /> What better way to live out your hidden fantasies
                        than with an unforgettable cruise to Alaska?
                        <br /> Armed with our bucket lists and checkbooks in
                        hand, we set out to find the best luxury cruise to
                        Alaska around.
                        <br /> After hours of research and discussions, we
                        narrowed down our options to three top contenders: The
                        Emerald Sea, AMA Waterways, and AMA VOYAGE. Read on to
                        learn more about these three companies and which one is
                        right for you…
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Where to Go
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        While there are many ports along the coast of Alaska, if
                        you're going on a cruise to Alaska, you'll want to visit
                        at least one of the following cities:
                        <br /> <b>Anchorage:</b> The state's largest city,
                        Anchorage sits in a stunning natural setting and is a
                        jumping-off point for many sightseeing excursions.
                        Situated on Turnagain Arm, an inlet of Cook Inlet, this
                        coastal city is home to the Alaska Native Heritage
                        Center and many more attractions.
                        <br /> <b>Sitka:</b> This charming coastal city is home
                        to the Sitka Salmon Aquarium, the Sheldon Somo Village
                        (a traditional Tlingit village), and the
                        Russian-American Museum.
                        <br /> <b>Ketchikan:</b> This city is known for its
                        abundance of totem poles and other Native American
                        artifacts. Ketchikan is also the place to go if you want
                        to fish for salmon or go crabbing.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Why Go to Alaska?
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        <b>Alaska</b> is the only state in the U.S. that’s north
                        of Canada.
                        <br /> This means you’ll experience a whole new
                        ecosystem and wildlife that are unique to this part of
                        the world.
                        <br /> From polar bears to salmon, and everything in
                        between, you’ll be able to see wildlife that is rarely,
                        if ever, seen in other parts of the U.S. You can go
                        hiking, fishing, or do some other outdoor activity
                        year-round in Alaska.
                        <br /> Not that you’ll want to stay indoors in the
                        winter—it’s one of the few places in the world where you
                        can experience snowfall every month of the year!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What to Expect
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        You’ll find that the climate and landscape of Alaska are
                        very different from parts of the U.S. that are farther
                        south. It’s usually very cold in Alaska, especially in
                        the winter when temperatures can drop to well below
                        freezing. So pack your parka and mittens. You’ll want to
                        be prepared for the cold, especially if you plan on
                        going outside to do some activities. You’ll also want to
                        keep an eye on the forecast, as Alaska is known for
                        having frequent weather changes.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Tips for Finding the Best Cruise to Alaska
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        The first thing you’ll want to do is decide if you want
                        to book a cruise that goes to Alaska or one that starts
                        and ends in Alaska. If you want to start your cruise in
                        Alaska, you’ll want to make sure it goes to the area
                        where you’d like to spend most of your time. The next
                        thing you’ll want to do is decide what kind of cruise
                        you want to go on. There are many types of cruises,
                        including luxury, adventure, and family-friendly. With
                        so many cruise lines and ship options to choose from,
                        the hardest part might just be narrowing down your
                        options.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Excursions On Alaska Cruise
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        You’ll find that most cruise lines offer a variety of
                        excursions in Alaska. Excursions are basically guided
                        tours that can last from a few hours to a whole day. You
                        can book them when you book your cruise or once you’re
                        on board. Most cruise lines offer excursions in the
                        following categories: sightseeing, wildlife, cultural,
                        adventure, and kids. Some cruise lines may have
                        additional categories or sub-categories. You can use
                        CruiseHub.com to search for cruises to Alaska and see
                        which cruise lines are sailing there. From there, you
                        can click on each cruise line’s page to see what kinds
                        of excursions they offer.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Final Words
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        Cruising in Alaska is a must-do for any traveler. Once
                        you’ve experienced the thrill of seeing one of the
                        world’s seven natural wonders up-close, you’ll be
                        hooked. You don’t have to be a billionaire to experience
                        the beauty of Alaska. With so many cruise lines now
                        offering affordable deals on luxury ships, you can
                        actually experience this once-exclusive vacation for
                        much less than you might think.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Why Alaska Cruises are the Ultimate Luxury Vacation
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        <b>Alaska cruises</b> are luxury vacations at their
                        finest, whether you go through the summer or the winter
                        months. Cruising makes it easy to take in the best that
                        Alaska has to offer, whether you’re exploring glaciers,
                        hiking through remote terrain, or just relaxing on board
                        your ship. Here are the top five reasons why an Alaska
                        cruise will make for an unforgettable luxury vacation
                        experience!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        7 Reasons Everyone Should Visit Alaska
                    </h2>
                    <h3 className="mt-2 text-lg break-words font-medium">
                        1. The Scenery is Breathtaking
                        <br /> 2. Wildlife Abounds
                        <br /> 3. There’s So Much to Do
                        <br /> 4. The Culture is Intriguing
                        <br /> 5. Hiking and Skiing are Popular
                        <br /> 6. The Sunsets Will Take Your Breath Away
                        <br /> 7. It’s Snowing 24/7, 365 Days a Year! (haha just
                        kidding)
                    </h3>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        The Landscapes
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        The northern parts of both Canada and Alaska feature
                        hundreds of glaciers that stretch across valleys, lakes,
                        and fjords. No matter what time of year you take a
                        cruise to Alaska, there’s always a chance you’ll see one
                        of these beautiful natural wonders (glaciers are massive
                        chunks of ice that can be up to 20 miles wide!). At
                        their peak in late May or early June, there is no better
                        view than from your luxury cruise ship.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        It’s All About the Experience
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        One of things that makes a luxury cruise so luxurious is
                        not just about what’s inside your cabin, but what you
                        can do outside. From kayaking with whales to catching
                        glimpses of orcas in action, there’s something for
                        everyone on these cruises. You’ll also have every
                        amenity you could possibly want at your fingertips as
                        well as an incredible spa experience and exceptional
                        dining options. Find out more about these exciting
                        journeys today!
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Breathtaking Views
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Take in a cruise along Alaska’s coastline and you’ll
                        discover wild, untamed beauty. The glaciers, mountains,
                        and wildlife of southeast Alaska are sure to enchant you
                        as will some of its other treasures like quaint seaside
                        villages and exciting attractions. From Juneau to
                        Skagway, here’s why an Alaska cruise is more than just a
                        vacation – it’s an unforgettable experience.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Natural Beauty Everywhere
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Visiting all 50 states will allow you to see some of
                        America’s most beautiful natural wonders. From
                        snow-capped mountains to white sandy beaches, there’s
                        something in every state that will take your breath
                        away. The best part? You can visit many of these spots
                        by taking a cruise through Alaska. With breathtaking
                        views and one-of-a-kind wildlife viewing opportunities,
                        you’ll be glad you took a chance on an Alaskan cruise.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Wildlife Adventures Galore
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Alaska is home to a huge variety of wildlife—but one
                        trip there and you’ll see that it’s also home to a huge
                        variety of gorgeous scenery. By taking an Alaskan
                        cruise, you can explore all that Alaska has to offer
                        while still relaxing in comfort on board a luxury ship.
                        If you’re looking for inspiration for your next trip,
                        here are four reasons why a cruise through Alaska should
                        be your next adventure. Read More &gt;
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Get Up Close and Personal with Nature
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        You won’t get much closer to nature than on a cruise
                        through Alaska’s remote waterways. Book a cabin on one
                        of these cruises and you’ll be treated to daily
                        excursions, like visiting glaciers, paddling through
                        wildlife sanctuaries, or hiking alongside cascading
                        waterfalls. It’s no wonder why National Geographic
                        Adventure has called cruises the best way to experience
                        wild, untamed landscapes.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Unspoiled by Mass Tourism
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        One of the best reasons to take a cruise in Alaska is
                        that its remote location means mass tourism hasn’t
                        really reached it yet. This means most of its stunning
                        natural wonders are still pristine and virtually
                        untouched. What’s more, you can visit regions in such a
                        way that helps preserve their unspoiled nature.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Alaska;
