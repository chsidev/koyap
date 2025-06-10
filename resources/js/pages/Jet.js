import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import useWindowSize from '../services/Hlp';
import {
    setRequest} from '../store/hotelSlice';
import {
    Grid,
    Card} from '@mui/material';
import img_jet from '../../images/jet.svg';
import ResvoyageService from '../services/ResvoyageService';

let initRequest = null;

function Jet() {
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
                title="Luxury Private Jet Charters | Travel the World in Style | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Get to any destination in the world with our luxury private jet charters. Enjoy maximum comfort with our experienced crew and world-class travel partners."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Luxury Private Jet Charters | Travel the World in Style | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Get to any destination in the world with our luxury private jet charters. Enjoy maximum comfort with our experienced crew and world-class travel partners."
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/jet'
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
                    src={img_jet}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            Get to Your Dream Destination on a Luxurious Private Jet Charter
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Get to Your Dream Destination on a Luxurious Private Jet Charter
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                    We work with elite companies across the globe to provide our clients with an unforgettable experience. You can choose between different private jet models, onboard service additions, and customize the trip in any way you’d like.
                    </p>
                    <p>
                    Private jet travel is the best way to get to your destination quickly without waiting in lines or dealing with all other airport nuisances. 
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        [HOW WE DO IT]
                    </h3>
                    <h3 className="text-2xl mt-1 mb-1">
                        Koyap provides you with a first-class experience
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
                                    Customized experience
                                </h3>
                                <p>
                                Thanks to our elaborate network of partners, we’re able to meet our customers’ needs with ease.  We’ll take care of everything and make sure that the whole experience is smooth and seamless.
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
                                    Unparalleled Service
                                </h3>
                                <p>
                                Our luxury jet partners offer exceptional service. Their private jets are equipped with modern technology, elite cabin crew, and experienced pilots. They always go above and beyond to provide our clients with unsurpassed service.
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
                                Our private charter partners perform frequent equipment testing to ensure that all current safety standards are met. Your safety is our priority and we employ elaborate measures both in the air and on the ground.
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
                                    Flexible itineraries
                                </h3>
                                <p>
                                You can fly a private jet whenever you’d like since our partners have large fleets and flexible dates. Need to get to a sudden meeting in a different state? Hire a private jet with world-class service and get to the desired destination quickly & effortlessly.
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
                                    Hassle-free service
                                </h3>
                                <p>
                                Our travel team is there to support you at all hours. We do all travel arrangements and offer additional services like hotel bookings, visa applications, or passport renewals. All you need to do is sit back and enjoy the trip.
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
                                    World-class travel partners
                                </h3>
                                <p>
                                We only work with selected partners to ensure a premium experience for all our clients. They go through an intricate vetting process to ensure that all our requirements are met. We only want the best for our clients.
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
                    <p>● We deal with all the travel logistics</p>
                    <p>● Maximum comfort and privacy - our private jet cabins are spacious and equipped with comfortable furniture and technology.</p>
                    <p>● Avoid dealing with airport hassle - board your flight within minutes thanks to private terminal access that’s open for all our clients.</p>
                    <p>● We help them with additional travel requirements - hotel bookings, travel documents, insurance, passport renewals, visa applications, and visa renewals</p>

                    <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>                
                    <h3 className='text-2xl mt-1 mb-1'>Step #1 Discuss your travel plans with your agents</h3>
                    <p>Discuss your travel plans with one of our consultants to come up with a couple of suitable options and an approximate quote.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #2 Choose additional services</h3>
                    <p>Choose a suitable destination, mention the number of passengers, discuss trip duration, and book additional services. Our consultants will take care of all the logistics. Additional services include travel documents & insurance, passport renewal, visa application & renewal, hotel bookings, and car rentals.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #3 Get to your destination with a private jet charter</h3>
                    <p>Pack your bags, bring your documents, and get to the desired destination with maximum comfort and luxury.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Reach remote locations with our luxury jets
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        A supreme experience that will exceed all your expectations
                    </h3>
                    <p>
                        You can book your private charter flight with Koyap in under 10 minutes on our website. Go through the offers, fill out the necessary information, and finalize the booking. We’ll get back to you to confirm all the peculiarities of the trip.
                        Or, get in touch with one of our travel consultants to discuss your travel plans and get a private jet quote. We also offer frequent member discounts and exclusive deals for travelers who join our mailing list. 
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Jet;