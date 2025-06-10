import React ,{ useEffect } from 'react';
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

function VisaApplication() {
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
                title="International Visa Applications | Get Approved Quickly | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            "Let Koyap take care of all your visa applications. Our travel experts know the ins and outs of the visa application process and we guarantee success for our clients."
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'International Visa Applications | Get Approved Quickly | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            "Let Koyap take care of all your visa applications. Our travel experts know the ins and outs of the visa application process and we guarantee success for our clients."
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/visaapplication'
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
                            Quick and Effortless Visa Applications Across the Globe
                        </h6>
                    ) : (
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Quick and Effortless Visa Applications Across the Globe
                        </h1>
                    )}
                </div>
            </div>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p>
                    Visa applications are probably the most demanding part of any trip. Each country has its own set of requirements and it can be difficult to find the correct information. One wrong step and your visa will be declined.
                    </p>
                    <p>
                    Koyap’s team has decades of combined experience within the industry and we know the ins and outs of the visa application process. We’ve successfully served hundreds of clients so far, so we know exactly what to expect.
                    </p>
                    <p>
                    Our team consists of leading travel experts to ensure that all requirements are met. Instead of dealing with bureaucracy and waiting in long lines, let us do the heavy lifting for you. Just drop off your documents, discuss your travel plans with our agents, and we’ll take care of everything for you. With Koyap, visa application is effortless.
                    </p>
                    <h3 className="text-2xl mt-1 mb-1">
                        [HOW WE DO IT]
                    </h3>
                    <h3 className="text-2xl mt-1 mb-1">
                        Get Your Visa Approved Quickly
                    </h3>
                    <Grid container spacing={0.5}>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 350 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Simplicity and Trust
                                </h3>
                                <p>
                                Our licensed travel consultants will take care of all the administrative requirements on your behalf. The process is very simple and you’ll be guided through each step along the way. We’ll deliver the documents to you or you can pick them up at our offices.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 350 }}
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
                                style={{ height: 350 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Guaranteed Approval
                                </h3>
                                <p>
                                Our travel consultants go through all the requirements to ensure that all the needs are met. We’ve handled hundreds of visa requests for our clients so far, so we’re very familiar with the process and its peculiarities.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 350 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Different Types of Visas
                                </h3>
                                <p>
                                We can handle the application process for different kinds of visas, such as:<br />
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
                        We provide our clients with top-notch experiences and
                        help them make unforgettable memories. Here’s why our
                        clients choose us:
                    </p>
                    <p>● We’ve successfully applied for hundreds of visas on behalf of our clients</p>
                    <p>● Our service is quick, effortless, and effective</p>
                    <p>● We take care of all administrative logistics and applications</p>
                    <p>● Our customer service is there to support you at all hours</p>
                    <p>● Our systems are very secure to ensure that all our clients’ information is safe at all times</p>
                    <p>● We help with additional travel requirements - handling travel documents, flights, passport renewals, visa renewals, hotel bookings, and car rentals.</p>

                    <h2 className='text-2xl font-bold mt-3 mb-1'>How It Works</h2>
                    <h3 className='text-2xl mt-1 mb-1'>Step #1 Discuss your travel plans with one of our consultants</h3>
                    <p>Give us a call or stop by one of our locations to explain your situation and discuss your visa application. Our agents will provide you with a clear requirement checklist and discuss the next steps.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #2 Gather your documents and book additional services</h3>
                    <p>Gather the necessary items from the checklist and deliver them to us. Our travel consultants will take care of the application and approval process. Book additional services if necessary - travel insurance, flight bookings, hotel bookings, car rentals, and visa application & renewals.</p>
                    <h3 className='text-2xl mt-1 mb-1'>Step #3 Get your visa and enjoy the trip</h3>
                    <p>One of our personal travel consultants will notify you as soon as your visa is approved. We can deliver it either via email, straight to your doorstep, or you can pick it up at one of our locations.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Effortless Visa Application and Approval
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        Let us handle it for you
                    </h3>
                    <p>
                        Stop by our offices to get a free consultation with one of our agents and receive a personalized quote. We’ll guide you through the whole process and ensure that everything goes smoothly and according to plan.
                        We also offer frequent member discounts and exclusive deals for travelers who join our mailing list.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default VisaApplication;
