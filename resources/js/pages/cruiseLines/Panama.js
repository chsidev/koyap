import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useWindowSize from '../../services/Hlp';
import img_cruise from '../../../images/cruise.svg';

function Panama() {
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    return (
        <main>
            <Helmet
                title="Panama Canal Cruises | Luxury Cruise Bookings | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content: 'The Ultimate Guide to Panama Canal Cruises'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Panama Canal Cruises |Luxury Cruise Bookings | Koyap'
                    },
                    {
                        property: 'og:description',
                        content: 'The Ultimate Guide to Panama Canal Cruises'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/cruise-lines/panama'
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
                            The Ultimate Guide to Panama Canal Cruises
                        </h1>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            The Ultimate Guide to Panama Canal Cruises
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8 sm:px-3">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="text-lg break-words text-slate-600 font-[600]">
                        If you’re looking for a holiday that will take you to
                        some of the most beautiful places in the world, then a
                        cruise through the Panama Canal might be just what you
                        need. The Panama Canal is one of the seven Wonders of
                        the Modern World and it’s no wonder why. Spanning from
                        sea to sea across Central America, with its western end
                        in Colombia and eastern end in Panama, the canal is one
                        of the most remarkable engineering achievements ever
                        created. Just like any other holiday, cruising through
                        the Panama Canal requires planning and research as well
                        as plenty of research into cruises available to fit your
                        specific needs. Fortunately, we’ve done all of this for
                        you so that your next cruise through the canal isn’t a
                        stressful experience but instead an enjoyable one. With
                        that being said, let’s take a look at everything you
                        need to know about cruising through the Panama Canal
                        before making your final booking decision.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        What is a Cruise through the Panama Canal?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruises through the Panama Canal are a type of river
                        cruise that takes travelers from the Atlantic Ocean to
                        the Pacific Ocean by sea. Cruises through the Panama
                        Canal follow the path of the original canal that was dug
                        out in the 19th century by French engineers, and they
                        usually last anywhere from a few days to a few weeks.
                        Cruises through the Panama Canal are great options for
                        travelers who want to experience the tropical climate of
                        Central America but who don’t want to fly to the region.
                        It’s also a great option for those who want to see the
                        Panama Canal but who don’t want to spend quite so much
                        time in the region.
                    </p>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruises through the Panama Canal are the greatest way to
                        see the Central American country and its landmarks.
                        Although most cruises through the Panama Canal take
                        place in the summer months, you can go in the winter as
                        well. This is because the narrow waterway is kept open
                        year-round, even during the cold months of the year.
                        This can make the canal one of the only ways to visit
                        the country year-round. Once you’re in the canal, you’ll
                        cruise between the Pacific and Atlantic Oceans, making
                        stops at ports in both oceans. Cruises through the
                        Panama Canal are a great way to see the country of
                        Panama and its landmarks. This is because these cruises
                        take place in the Panama Canal, a waterway that connects
                        the Pacific and Atlantic Oceans. You can cruise through
                        the canal year-round. This is the only way to visit the
                        country in the winter and the summer months.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Why Go on a Panama Canal Cruise?
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        The only way to explore the country of Panama is to go
                        on a cruise through the Panama Canal. The canal is a
                        truly remarkable achievement, connecting the Atlantic
                        and Pacific Oceans. This makes it a great way to see two
                        of the planet’s best oceans together. Cruising through
                        the Panama Canal is also a great way to see the Central
                        American country’s stunning natural wonders. The
                        country’s lush forests, stunning mountains, and gorgeous
                        beaches can be found on both sides of the canal. Panama
                        is a country rich in natural beauty. The cities are
                        modern, but the country has a traditional, country feel
                        to it. The most popular attractions in Panama are the
                        Panama Canal, the Colón Volcano, the Miraflores Locks,
                        the Isla Coiba, the Islas del Canarí, and the San Blas
                        Islands. The canal is a truly remarkable achievement,
                        connecting the Atlantic and Pacific Oceans. This makes
                        it a great way to see two of the planet’s best oceans
                        together. The country is also home to some truly
                        stunning natural wonders, like the Colón Volcano or the
                        Miraflores Locks.
                    </p>
                    <p className="mt-2 text-lg break-words indent-4">
                        Traveling through the Panama Canal offers travelers a
                        unique opportunity to experience a region of the world
                        that might otherwise be off-limits to visitors. With the
                        majority of visitors flying to the region, cruise
                        through the Panama Canal lets you explore the area while
                        staying in one place. This makes it a great option for
                        travelers who want a high-quality holiday but who don’t
                        have time to spend several weeks or months traveling
                        through the region. Before you book your cruise,
                        consider what you hope to get out of your trip. Cruise
                        through the Panama Canal for the opportunity to see the
                        Panama Canal firsthand, but if you have time, consider
                        visiting other parts of Central America that might be of
                        interest to you. For example, if you have an interest in
                        archaeology, you might want to visit the area around the
                        Mayan ruins in Guatemala and Belize. You might also want
                        to visit the Pacific coast of Mexico or Southern
                        California if you have an interest in marine life.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        How to Book a Panama Canal Cruise
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Cruises through the Panama Canal can only be booked
                        through the Panama Canal Authority. If you want to book
                        a cruise through the canal, you’ll need to make an
                        online booking with the Panama Canal Authority. Once
                        you’ve booked your cruise through the Panama Canal,
                        you’ll receive a confirmation email with sailing
                        information and other details. You’ll need to book at
                        least 15 days in advance to be sure to get a cruise date
                        on which you can travel. You can also book a cruise
                        through the Panama Canal in advance by calling toll-free
                        1-866-314-8227 to speak with a reservation agent.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Different Types of Cruises through the Panama Canal
                    </h2>
                    <p className="mt-2 text-lg break-words">
                        <b>- New Construction Canal:</b> The New Construction
                        Canal is a new canal that opened in August 2016. The
                        route of the New Construction Canal runs from the
                        Atlantic to the Pacific via the original canal. The New
                        Construction Canal is longer, wider, and allows for
                        larger ships than the original canal, so it’s been
                        renamed the New Panamax route.
                        <br />
                        <b>- Old Construction Canal:</b> The Old Construction
                        Canal remains the primary route for ships traveling
                        through the Panama Canal. The route begins at the
                        Atlantic side of the canal, travels through the original
                        canal, and then exits the canal at the Pacific end.
                        <br />
                        <b>- Pacific Side-to-Side:</b> The Pacific Side-to-Side
                        route is only offered on the traditional way through the
                        canal. The route begins at the Pacific end of the canal
                        and travels east via the Pacific.
                        <br />
                        <b> - Atlantic Side-to-Side:</b> The Atlantic
                        Side-to-Side route is only offered on the traditional
                        way through the canal. The route begins at the Atlantic
                        side of the canal and travels west via the Pacific.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Get to Know the Ships Operating in the Panama Canal
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        When you travel through the Panama Canal on a cruise,
                        you’ll have ample opportunity to get to know the ports
                        and ships that you visit during your trip. Each ship
                        operating in the Panama Canal has a typical itinerary
                        and typically visits a number of ports during a cruise.
                        In order to make sure you get to know the ports and
                        ships that you visit, you’ll want to keep a few things
                        in mind while on your cruise.
                        <br />- Each port has its own vibe and character. Even
                        on a cruise through the Panama Canal that visits the
                        same ports multiple times, each port has its own vibe
                        and character.
                        <br />- Each ship is different, too. Even though each
                        ship operates in the Panama Canal on a regular basis,
                        each ship is different. Some ships are older and more
                        luxurious, while others are newer and more modern.
                        You’ll want to make sure you keep these things in mind
                        when getting to know the ports and ships that you visit
                        during your cruise.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Finding the Right Ship for You
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Since cruises through the Panama Canal are smaller-sized
                        river cruises that only take about 15 days to complete,
                        it’s important to find the right ship for you. If you
                        want to get the most from your cruise, you’ll want to
                        select a ship that has features that match your needs
                        and interests. When choosing a cruise through the Panama
                        Canal, you might want to consider the following things
                        to make sure you get the most out of your trip.
                        <br />
                        <b> - Which ports do you want to visit?</b>
                        <br /> Let’s say you want to visit San Diego and Los
                        Angeles, but you don’t want to spend too much time in
                        each city. You might want to choose a cruise that visits
                        both cities and spends less time in each.
                        <br />
                        <b> - Which ports would you like to visit?</b>
                        <br /> Let’s say you want to visit Falmouth, Cornwall,
                        but you also have an interest in seeing the
                        Mediterranean Sea. You might want to consider a cruise
                        that visits both Falmouth and the Mediterranean.
                        <br />
                        <b>
                            {' '}
                            - Which activities would you like to do during your
                            trip?
                        </b>
                        <br /> Let’s say you like to ride bikes and golf, so
                        you’d like to visit a cruise that has lots of room for
                        these activities. You might also want to consider a
                        cruise that has great entertainment options.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Things to Consider when Booking a Cruise through the
                        Panama Canal
                    </h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        There are many factors that you’ll want to consider when
                        booking a cruise through the Panama Canal. Before you
                        book a cruise, you’ll want to make sure you consider the
                        following things.
                        <br />
                        <b> - What are your expectations?</b>
                        <br /> It’s tempting to think that a cruise through the
                        Panama Canal is a quick and easy way to see the Panama
                        Canal, but it’s important to remember that cruises
                        through the Panama Canal are small-sized river cruises.
                        <br />
                        <b> - What are your interests?</b>
                        <br /> It’s easy to get caught up in the idea that a
                        cruise through the Panama Canal is like other river
                        cruises, but it’s important to remember that cruise
                        through the Panama Canal is one of a kind.
                        <br />
                        <b> - How much time do you have?</b>
                        <br /> It’s easy to get caught up in the idea that a
                        cruise through the Panama Canal is quick and easy, but
                        it’s important to remember that a cruise through the
                        Panama Canal takes 15 days to complete.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">Conclusion</h2>
                    <p className="mt-2 text-lg break-words indent-4">
                        Traveling through the Panama Canal on a cruise can
                        provide travelers with a unique opportunity to
                        experience a region of the world that might otherwise be
                        off-limits to visitors. The Panama Canal is a remarkable
                        engineering achievement, and cruises through the canal
                        provide travelers with an opportunity to see the Panama
                        Canal firsthand.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Panama;
