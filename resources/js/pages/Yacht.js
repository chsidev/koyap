import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import useWindowSize from '../services/Hlp';
import {
    setRequest} from '../store/hotelSlice';
import {
    Grid,
    Card} from '@mui/material';
import img_yacht from '../../images/yacht.svg';
import ResvoyageService from '../services/ResvoyageService';

let initRequest = null;

function Yacht() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openPopover = Boolean(anchorEl);
    const { request, error } = useSelector(
        state => ({ ...state.hotel })
    );
    const dispatch = useDispatch();
    const wSize = useWindowSize();
    const phoneFlag = wSize.width < 600 ? true : false;

    useEffect(() => {
        let token = ResvoyageService.getToken();
        token.catch(() => {
            setOpenNotify(true);
        });
    }, []);
    useEffect(() => {
        if (error) {
            return setOpenNotify(true);
        }
    }, [error]);
    useEffect(() => {
        if (openPopover) {
            initRequest = { ...request };
        } else if (initRequest) {
            dispatch(setRequest(initRequest));
        }
    }, [openPopover]);

    return (
        <main>
            <Helmet
                title="Exclusive Yacht Charter Rental | Royal Sailing Experience | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Explore the world’s oceans and stunning remote locations with luxury yacht rentals. Sail on extravagant boats, drink champagne during sunset, enjoy a good life."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Exclusive Yacht Charter Rental | Royal Sailing Experience | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Explore the world’s oceans and stunning remote locations with luxury yacht rentals. Sail on extravagant boats, drink champagne during sunset, enjoy a good life."
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/yacht'
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
                    src={img_yacht}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            Explore the Sea in Style with Our Luxury Yacht Cruises
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Explore the Sea in Style with Our Luxury Yacht Cruises
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                    Koyap works with some of the most extraordinary yacht charter services with access to dozens of exotic and fun locations. We offer different yacht types to ensure that we meet the needs of all our clients. Sail to your dream vacation in privacy and luxury with our luxury yacht cruises.
                    </p>
                    <p>
                    Our experts always make sure to accommodate all your preferences and we leave nothing to chance. We provide our clients with custom-tailored experience that will become the golden standard for any other future travel.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        Experience the Ocean Like Never Before
                    </h3>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    World-class experience
                                </h3>
                                <p>
                                Our premium partners offer extraordinary yachts with stellar interior decor, unique amenities, a plethora of water toys and other fun surprises.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Expert staff
                                </h3>
                                <p>
                                Our parents’ onboard crew offers supreme service. All boats are equipped with modern appliances and experienced crew. They always go above and beyond to provide our clients with unsurpassed service.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 280 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Safety
                                </h3>
                                <p>
                                Our luxury yacht partners perform frequent equipment testing to ensure that all current safety standards are met. Your safety is our priority and we employ rigorous measures both on the sea and on the ground.
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2 className="text-2xl font-bold mt-12 mb-3">
                        Why Our Clients Choose Us
                    </h2>
                    <p>
                        We provide our clients with top-notch experiences and
                        help them make unforgettable memories. Here’s why our
                        clients choose us:
                    </p>
                    <p>● We give special discounts and services to our loyalty members</p>
                    <p>● We can book and customize the rest of the vacation as well</p>
                    <p>● Maximum comfort and security - our yachts are equipped with exquisite amenities, modern technology, comfortable furniture, french beds, and jaw-dropping decks with swimming pools and jacuzzis.</p>
                    <p>● We offer the biggest selection of luxury yacht charters</p>
                    <p>● We help with additional travel requirements - hotel bookings, travel documents, insurance, passport renewals, visa applications, and visa renewals</p>
                    
                    <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>                
                    <h3 className='text-2xl mt-1 mb-1'>Step #1 Discuss your travel plans with your agents</h3>
                    <p>Come to our office or give us a call and one of our personal travel consultants will discuss all the logistics of the trip with you. You’ll be presented with different options and an approximate quote.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #2 Choose a yacht</h3>
                    <p>Choose the desired boat, mention the number of passengers, discuss trip duration, and book additional services if required. We offer classic, motor, sailing, and luxury catamaran charter yachts. Our consultants will take care of all the logistics.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #3 Choose additional services</h3>
                    <p>Additional services include travel documents & insurance, passport renewal, visa application & renewal, hotel bookings, and car rentals.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #4 Board the yacht and start your journey</h3>
                    <p>Pack your bags, bring your documents, and get to the desired destination with maximum comfort and luxury.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Exclusive Access to World’s Most Prestigious Yachts
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        A supreme experience that will exceed all your expectations
                    </h3>
                    <p>
                        You can quickly book your private yacht charter with Koyap in under 10 minutes on our website or by calling one of our consultants. Go through the offers, fill out the necessary information, and finalize the booking. We’ll get back to you to confirm all the peculiarities of the trip.
                        Organize corporate events, celebrate honeymoons and birthdays, or simply enjoy the stunning ocean experience on your own or with your loved one. You are only limited by your imagination because our team is ready to handle even the most demanding of requests.
                        We also offer frequent member discounts and exclusive deals for travelers who join our mailing list.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Yacht;
