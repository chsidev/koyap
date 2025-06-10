import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import useWindowSize from '../services/Hlp';
import { setRequest } from '../store/hotelSlice';
import {
    Grid,
    Card} from '@mui/material';
import img_article from '../../images/articlebg.png';
import ResvoyageService from '../services/ResvoyageService';

let initRequest = null;

function VisaRenewal() {
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
                title="International Visa Renewals | Renew Your Visa Quickly | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Koyap can renew your visa quickly and efficiently. Deliver your documents and let us handle the rest of the process on your behalf."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'International Visa Renewals | Renew Your Visa Quickly | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Koyap can renew your visa quickly and efficiently. Deliver your documents and let us handle the rest of the process on your behalf."
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/visarenewal'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    }
                ]}
            />
            <div className="items-center relative min-h-[300px]">
                <img
                    className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-[200px]"
                    src={img_article}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 h-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            Renew Your Visa Without Any Administrative Hassles
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Renew Your Visa Without Any Administrative Hassles
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                    Visa renewals can be very complicated, especially when you’re staying in a foreign country. If your visa renewal process doesn’t go well, you’re risking having to leave sooner than expected or being deported back to your country.
                    </p>
                    <p>
                    Moreover, visa requirements are changed on a daily basis and they vary depending on the location you’re applying for. This creates unnecessary stress for travelers and it’s extremely time-consuming.
                    </p>
                    <p>
                    Our experienced team has successfully handled hundreds of visa renewal requests. We’ll guide you through each step and ensure that your visa gets renewed quickly without any complications. Koyap makes visa renewals effortless and stress-free.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        [HOW WE DO IT]
                    </h3>
                    <h3 className="text-2xl mt-1 mb-1">
                        Get Your Visa Renewed Quickly
                    </h3>
                    <Grid container spacing={0.5}>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 410 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Simplicity and Trust
                                </h3>
                                <p>
                                Our licensed travel consultants will take care of all the administrative requirements on your behalf. The process is very simple and you’ll be guided through each step along the way. We’ll deliver the documents to you electronically or you can pick them up at our offices.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 410 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Unmatched Experience
                                </h3>
                                <p>
                                We take great care of our customers’ sensitive information. Our systems are equipped with industry-standard protection to ensure maximum security for all our clients.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 410 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Guaranteed Approval
                                </h3>
                                <p>
                                Our travel consultants go through all the requirements to ensure that all the needs are met. We’ve handled hundreds of visa renewal requests for our clients so far, so we’re very familiar with the process and its peculiarities.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 410 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Different Types of Visas
                                </h3>
                                <p>
                                We can handle the renewal process for different kinds of visas, such as:<br />
                                ● Work visas<br />
                                ● Travel visas<br />
                                ● Family visas<br />
                                ● Investor visas<br />
                                ● Retirement visas<br />
                                ● Extension visas
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2 className="text-2xl font-bold mt-12 mb-3">
                        Why Our Clients Choose Us
                    </h2>
                    <p>
                    We provide our clients with an effortless visa renewal experience and we work hard around the clock to ensure that everything goes according to plan. Here’s why our clients choose us:
                    </p>
                    <p>● We’ve successfully renewed hundreds of visas for our clients</p>
                    <p>● Our service is quick, effortless, and effective - you don’t have to lift a finger</p>
                    <p>● All documents can be delivered to you electronically in a matter of minutes</p>
                    <p>● Our customer service is there to support you at all hours</p>
                    <p>● Our systems follow the latest security standards to ensure that all our clients’ information is safe at all times</p>
                    <p>● We help with additional travel requirements - handling travel documents, flights, passport renewals, visa applications, hotel bookings, and car rentals.</p>

                    <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>
                    <h3 className='text-2xl mt-1 mb-1'>Step #1 Reach out to your personal travel consultant</h3>
                    <p>Give us a call or stop by one of our locations to explain your situation and discuss your visa renewal. We’ll discuss the peculiarities of your situation and advise you on the best course of action going forward.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #2 Gather your documents and book additional services</h3>
                    <p>Gather the necessary documents and information, and hand it over to one of our travel consultants. They will apply for visa renewal on your behalf and inform you about the process. Book additional services if necessary - travel insurance, flight bookings, hotel bookings, car rentals, visa applications, and passport renewals.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #3 Receive your visa and enjoy your stay</h3>
                    <p>One of our personal travel consultants will notify you as soon as your visa is renewed. We can deliver it electronically or you can stop by one of our offices to pick up your documents.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Enjoy a Quick Visa Renewal Process
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Let us handle it for you
                    </h3>
                    <p>
                        With Koyap, visa renewal has never been easier. Give us a quick call or stop by one of our offices to discuss your situation and receive a personalized quote. Our team will ensure that your visa gets renewed quickly and without any complications.
                        Join our mailing list to receive frequent member discounts and exclusive deals.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default VisaRenewal;
