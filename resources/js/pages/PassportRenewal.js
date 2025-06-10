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

function PassportRenewal() {
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
                title="Renew Your Passport Quickly with an Expedited Process | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Koyap can help you with various travel documents, including passport renewals. Our service is quick, easy, and reliable. Renew your passport now."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Renew Your Passport Quickly with an Expedited Process | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Koyap can help you with various travel documents, including passport renewals. Our service is quick, easy, and reliable. Renew your passport now."
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/passportrenewal'
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
                <div className="absolute top-0 left-0 items-center p-20 h-full w-full">
                    {phoneFlag ? (
                        <h6 className="font-bold text-2xl text-center text-indigo-500">
                            Expedited and Effortless Passport Renewals
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Expedited and Effortless Passport Renewals
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                    Have you booked an important business trip or an exciting vacation, but noticed that your passport is expiring soon? Koyap’s team can renew your passport in a matter of days without you lifting a finger.
                    </p>
                    <p>
                    Our team consists of leading travel experts to ensure that all requirements are met. Instead of dealing with bureaucracy and waiting in long lines, let us do the heavy lifting for you. Just drop off your documents, discuss your travel plans with our agents, and we’ll take care of everything for you. With Koyap, passport renewal is effortless.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        [HOW WE DO IT]
                    </h3>
                    <h3 className="text-2xl mt-1 mb-1">
                        Care-Free Travel with Koyap
                    </h3>
                    <Grid container spacing={0.5}>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 310 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Simplicity
                                </h3>
                                <p>
                                Our licensed travel consultants will take care of all the administrative requirements on your behalf. The process is very simple and you’ll be guided through each step along the way. We’ll deliver the documents to you or you can pick them up at our offices.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 310 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                   Safety
                                </h3>
                                <p>
                                We take great care of our customers’ sensitive information. Our systems are equipped with industry-standard protection to ensure maximum security for all our clients.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 310 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Guaranteed Approval
                                </h3>
                                <p>
                                Our travel consultants go through all documents and take great care of special requirements to ensure that your passport renewal is approved. We work alongside industry experts to ensure that the whole process goes smoothly.
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
                    <p>● We offer expedited passport renewal services</p>
                    <p>● Our service is quick, effortless, and effective</p>
                    <p>● We take care of all administrative logistics and applications</p>
                    <p>● Our customer service is there to support you at all hours</p>
                    <p>● Our systems are very secure to ensure that all our clients’ information is safe at all times</p>
                    <p>● We help with additional travel requirements - handling travel documents, flights, visa applications, visa renewals, hotel bookings, and car rentals.</p>

                    <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>
                    <h3 className='text-2xl mt-1 mb-1'>Step #1 Reach out to one of our travel consultants</h3>
                    <p>Give us a call or stop by one of our locations to explain your situation and discuss the passport renewal service. Our agents will provide you with a clear requirement checklist and discuss the next step.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #2 Gather your documents and book additional services</h3>
                    <p>Gather the necessary items from the checklist and deliver them to us. Our travel consultants will take care of the application and approval process. Book additional services if necessary - travel insurance, flight bookings, hotel bookings, car rentals, and visa application & renewals.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #3 Enjoy your trip</h3>
                    <p>One of our personal travel consultants will notify you as soon as your passport arrives. We can deliver it straight to your doorstep or you can pick it up at one of our locations.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Quick and Easy Passport Renewal
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Let us handle it for you
                    </h3>
                    <p>
                        Passport renewals are complicated and exhausting. There’s so much bureaucracy to deal with, which is why we’re here to support you along the way. We’ve renewed hundreds of passports for our clients - we know the process in and out.
                        Stop by our offices to get a free consultation with one of our agents and receive a personalized quote.
                        We also offer frequent member discounts and exclusive deals for travelers who join our mailing list.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default PassportRenewal;
