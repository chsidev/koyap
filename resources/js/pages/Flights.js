import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import CookieConsent from "react-cookie-consent";
import {
    setFlightClass,
    setFlightWay,
    setFlightSearchItems,
    searchFlightsAsync
} from '../store/flightSlice';
import {
    Paper,
    Button,
    MenuItem,
    FormControl,
    Select,
    Stack,
    Snackbar,
    IconButton,
    Alert,
    Grid,
    Card,
    Box,
    Fab,
    Backdrop
} from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import EmailIcon from '@mui/icons-material/Email';
import img_flights from '../../images/flights.svg';
import simg_flights from '../../images/callus.svg';
import PassengerSelector from '../components/PassengerSelector';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
// import SearchItem from "../components/SearchItem";
import CloseIcon from '@mui/icons-material/Close';
import ResvoyageService from '../services/ResvoyageService';
import FlightSearchResult from '../components/FlightSearchResult';
import MailPopUp from '../components/MailPopUp';
import ItineraryPopUp from '../components/ItineraryPopUp';
import WaitPopUp from '../components/WaitPopUp';
import ApiService from '../services/ApiService';
import rloading from '../../images/loading.gif';

const SearchItem = React.lazy(() => import('../components/SearchItem'));

const initialSearchItem = {
    from: '',
    to: '',
    date: format(new Date(), 'MM/dd/yyyy'),
    dates: [format(new Date(), 'MM/dd/yyyy'), null]
};

function Flights() {
    const [openNotify, setOpenNotify] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [visibleMailPopUp, setVisibleMailPopUp] = React.useState(false);
    const [visibleItinePopUp, setVisibleItinePopUp] = React.useState(false);
    const [visibleWaitPopUp, setVisibleWaitPopUp] = React.useState(false);
    const [reloading, setReloading] = React.useState(false);
    const form = React.useRef(null);
    const scollToRef = React.useRef(null);
    const {
        flightWay,
        flightClass,
        fc,
        searchItems,
        flights,
        error,
        errorMessage,
        loading
    } = useSelector(state => {
        return { ...state.flight };
    });
    const members = useSelector(state => state.passenger.members);
    // const flightClass = useSelector(selectFlightClass);
    // const searchItems = useSelector(selectFlightSearchItems);
    const dispatch = useDispatch();

    useEffect(() => {
        let token = ResvoyageService.getToken();
        token.catch(r => {
            setOpenNotify(true);
        });
    }, []);
    useEffect(() => {
        if (error) {
            return setOpenNotify(true);
        }
    }, [error]);

    // const [searchItems, setSearchItems] = React.useState([initialSearchItem]);
    const handleFlightWayChange = event => {
        if (event.target.value !== 2) {
            dispatch(setFlightSearchItems([searchItems[0]]));
        }
        dispatch(setFlightWay(event.target.value));
    };
    const handleFlightClassChange = event => {
        dispatch(setFlightClass(event.target.value));
    };
    const handleAddClick = () => {
        if (searchItems.length < 4) {
            let tmp = [...searchItems];
            tmp.push(initialSearchItem);
            dispatch(setFlightSearchItems(tmp));
        }
    };
    const handleRemoveClick = index => {
        let tmp = [...searchItems];
        tmp.splice(index, 1);
        dispatch(setFlightSearchItems(tmp));
    };
    const handleChangeSearchItem = (from, to, date, dates, index) => {
        let record = { from: { ...from }, to: { ...to }, date, dates };
        let tmp = [...searchItems];
        tmp.splice(index, 1, record);
        dispatch(setFlightSearchItems(tmp));
    };
    const handleSearchClick = event => {
        event.preventDefault();
        let payload = null;
        payload = {
            flightWay,
            flightClass,
            members,
            searchItems
        };
        setReloading(true);
        dispatch(searchFlightsAsync(payload)).then(response => {
            scollToRef.current.scrollIntoView()
        });
    };
    const handleNotifyClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenNotify(false);
    };
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNotifyClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    const showMailPopUp = () => {
        setVisibleMailPopUp(true);
    };
    const showItinePopUp = () => {
        setVisibleItinePopUp(true);
    };
    const showWaitPopUp = () => {
        setVisibleWaitPopUp(true);
    };
    const handleOnCloseMailPopUp = () => {
        setVisibleMailPopUp(false);
    };
    const handleOnCloseItinePopUp = () => {
        setVisibleItinePopUp(false);
    };
    const handleOnCloseWaitPopUp = () => {
        setVisibleWaitPopUp(false);
    };
    const handleOnSubmitMailPopUp = async data => {
        let res = await ApiService.sendEmail(data);
    };
    const handleSelectFlight = index => {
        setSelectedIndex(index);
    };
    const SBanner = () => {
        if(flights.length >= 1) {
            return (
                <div className="items-center relative min-h-[170px]" style={{marginTop: '27px', marginBottom: '-50px'}}>
                    <img
                        className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-full"
                        src={simg_flights}
                        alt="People working on laptops"
                    />
                    <div className="absolute top-0 left-0 items-center p-5 2xl:px-48 h-full">
                        <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                            Call us on 1-669-307-0932 to book your flight.
                        </h1>
                    </div>
                </div>
            )
        }
        return (<></>)
    };
    
    return (
        <main>
            <Helmet
                title="Book Luxury International Flights | Travel the World in Style | Koyap"
                htmlAttributes={{ lang: 'en' }}
                meta={[
                    {
                        name: 'description',
                        content:
                            'Travel to India, Vietnam, Pakistan, Turkey, Thailand, Malaysia, or Japan with ease. Enjoy maximum comfort with our world-class travel partners.'
                    },
                    {
                        name: 'copyright',
                        content: 'Koyap'
                    },
                    {
                        property: 'og:title',
                        content:
                            'Book Luxury International Flights | Travel the World in Style | Koyap'
                    },
                    {
                        property: 'og:description',
                        content:
                            'Travel to India, Vietnam, Pakistan, Turkey, Thailand, Malaysia, or Japan with ease. Enjoy maximum comfort with our world-class travel partners.'
                    },
                    {
                        property: 'og:url',
                        content: 'https://koyap.com/flights'
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
                    src={img_flights}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 2xl:px-48 h-full">
                    <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                        Fly First or Business Class to World’s Most Desirable
                        Locations
                    </h1>
                </div>
            </div>
            <Paper elevation={3} className="p-5">
                <form ref={form} onSubmit={handleSearchClick}>
                    <Stack
                        py={1}
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 6 }}
                    >
                        <FormControl sx={{ minWidth: 150 }}>
                            <Select
                                value={flightWay}
                                onChange={handleFlightWayChange}
                                autoWidth
                                displayEmpty
                                sx={{ minHeight: 60 }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={0}>
                                    <RepeatIcon />
                                    <span>Round trip</span>
                                </MenuItem>
                                <MenuItem value={1}>
                                    <TrendingFlatIcon />
                                    <span>One way</span>
                                </MenuItem>
                                <MenuItem value={2}>
                                    <MultipleStopIcon />
                                    <span>Multi-city</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <PassengerSelector />
                        <FormControl sx={{ minWidth: 150 }}>
                            <Select
                                value={flightClass}
                                onChange={handleFlightClassChange}
                                autoWidth
                                displayEmpty
                                sx={{ minHeight: 60 }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={2}>Business</MenuItem>
                                <MenuItem value={1}>Premium economy</MenuItem>
                                <MenuItem value={0}>Economy</MenuItem>
                                <MenuItem value={3}>First</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Suspense
                        fallback={
                            <div className="w-full text-center">Loading...</div>
                        }
                    >
                        
                        {searchItems.map((item, index) => {
                            return (
                            <SearchItem
                                key={index}
                                data={item}
                                datePickerType={
                                    flightWay === 0 ? 'range' : 'single'
                                }
                                removable={
                                    flightWay === 2 && searchItems.length > 1
                                }
                                removeCallback={() => handleRemoveClick(index)}
                                changeCallback={(from, to, date, dates) =>
                                    handleChangeSearchItem(
                                        from,
                                        to,
                                        date,
                                        dates,
                                        index
                                    )
                                }
                            />
                        )})}
                    </Suspense>
                    
                    {flightWay === 2 && (
                        <Stack
                            py={1}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row'
                            }}
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                disabled={searchItems.length > 3}
                                onClick={handleAddClick}
                                startIcon={<AddIcon />}
                                color="secondary"
                            >
                                Add Flight
                            </Button>
                        </Stack>
                    )}
                    
                    <div className="relative w-full h-4 text-center">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            className=" absolute left-0 top-4 !rounded-full"
                            // onClick={handleSearchClick}
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </Paper>
            <SBanner/>
            <div ref={scollToRef}></div>
            <FlightSearchResult onSelect={handleSelectFlight} nextAction={showMailPopUp}/>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openNotify}
                autoHideDuration={5000}
                onClose={handleNotifyClose}
                action={action}
            >
                <Alert
                    onClose={handleNotifyClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {errorMessage || 'Please check your network connection!'}
                </Alert>
            </Snackbar>
            <Box
                role="presentation"
                sx={{
                    zIndex: 2,
                    position: 'sticky',
                    bottom: 46,
                    textAlign: 'right',
                    float: 'right',
                    padding: 1
                }}
            >
                <Fab
                    color="success"
                    aria-label="email"
                    onClick={showMailPopUp}
                >
                    <EmailIcon />
                </Fab>
            </Box>
            <ItineraryPopUp
                defaultContent={
                    selectedIndex > -1
                        ? JSON.stringify(flights[selectedIndex], null, 2)
                        : ''
                }
                show={visibleItinePopUp}
                onClose={handleOnCloseItinePopUp}
                nextAction={showMailPopUp}
            />
            <MailPopUp
                defaultContent={
                    selectedIndex > -1
                        ? JSON.stringify(flights[selectedIndex], null, 2)
                        : ''
                }
                show={visibleMailPopUp}
                onClose={handleOnCloseMailPopUp}
                onSubmit={handleOnSubmitMailPopUp}
                waitAction={showWaitPopUp}
            />
            <WaitPopUp
                show={visibleWaitPopUp}
                onClose={handleOnCloseWaitPopUp}
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <img src={rloading} />
            </Backdrop>
            <div className="mb-16 mt-8">
                <div className="prose prose-sm max-w-4xl mx-auto">
                    <p className="mt-2">
                        There’s no better way to reach your desired destination than flying business or first-class. Koyap works with some of the most exclusive airlines in the world and has access to luxury plane tickets for our clients at competitive prices.
                    </p>
                    <p className="mt-2">
                        Enjoy comfortable and spacious cabins, drink champagne in the sky, enjoy luxurious amenities and be treated like royalty. 
                    </p>
                    <p className="mt-2">
                        By booking business and first-class plane tickets through Koyap, you’ll enjoy amazing perks like skipping long customs and security lines and waiting for your plane to board in a business lounge. 
                    </p>
                    <p className="mt-2">
                        Koyap is your personal assistant for all things travel-related.
                    </p>
                    <h3 className="text-xl mt-4 mb-1">
                        [HOW WE DO IT]
                    </h3>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Find the Perfect Business and First-Class Flight
                    </h2>
                    <p className="mt-2">
                        Instead of going through inconvenient search engines and websites trying to find a suitable plane ticket, let our personal travel assistants do the work for you. We just need a brief rundown of your trip and we’ll choose the most suitable luxury carrier. 
                    </p>
                    <p className="mt-2">
                        If something goes wrong or your flight is canceled or delayed for some reason, just reach out to your personal Koyap travel agent and they’ll suggest the best course of action to remedy the situation. Leave nothing to chance and experience Koyap’s world-class service.
                    </p>
                    <h3 className="text-2xl mt-2 mb-1">
                        Koyap provides you with a first-class experience
                    </h3>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 360 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    An upscale experience
                                </h3>
                                <p>
                                    We only work with world-class airlines that offer unmatched first-class and business experience. Their crew will pamper you and treat you like royalty throughout your whole trip. First-class and business tickets also let you skip lines during security and customs, ensuring maximum comfort and convenience. 
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 360 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Unparalleled service
                                </h3>
                                <p>
                                    Koyap will be there throughout your journey to support you with any needs or issues that arise. We do all the booking for you and offer additional services like passport applications, visa renewals and applications, hotel bookings, and car rentals, among others.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 360 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Safety
                                </h3>
                                <p>
                                    Our partner airlines perform frequent aircraft testing to ensure that all current safety standards are met. Your safety is our priority and we employ elaborate measures both in the air and on the ground. The crew is composed of trained experts ready to handle the most demanding of flights.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 460 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Great deals
                                </h3>
                                <p>
                                    Thanks to our elaborate network of partners and a large client base, we’re able to secure the best deals for luxury flights. With Koyap, flying business and first-class has never been easier and more accessible.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 460 }}
                            >
                                <h3
                                    className="text-2xl mt-1 mb-1"
                                    style={{ height: 70 }}
                                >
                                    Travel protection
                                </h3>
                                <p>
                                    Koyap can also broker an amazing travel insurance deal for our clients to ensure their safety during the trip. The travel insurance protects you in different scenarios, such as trip cancellations, travel date changes, trip interruptions and delays, missed connections, lost luggage or other personal belongings, rental car damages, 24-hour ad&d, medical expenses, emergency medical evacuations, and non-medical emergency evacuations
                                </p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 460 }}
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
                    <p>● We deal with all the travel logistics and ticket bookings</p>
                    <p>
                        ● Maximum comfort and privacy - our partner airlines’ luxury plane cabins are spacious and equipped with comfortable furniture and technology.
                    </p>
                    <p>
                        ● Our expertise is luxury travel and we have a vast network of premium partners we work with to provide our clients with an unforgettable experience
                    </p>
                    <p>
                        ● We offer after-hour support for all our clients
                    </p>
                    <p>
                        ● We help them with additional travel requirements - hotel bookings, travel documents, travel insurance, passport renewals, visa applications, and visa renewals
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Explore Our Striking Destinations
                    </h2>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>First and business class tickets to Turkey</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>First and business class tickets to India</h3>
                                <p>● New Delhi</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>First and business class tickets to Pakistan</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>First and business class tickets to Malaysia</h3>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>
                                    First and business class tickets to Japan
                                </h3>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>
                                    First and business class tickets to Thailand
                                </h3>
                                <p>● Phuket</p>
                                <p>● Bangkok</p>
                                <p>● Chiang Mai</p>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                elevation={6}
                                className="p-4"
                                style={{ height: 140 }}
                            >
                                <h3>First and business class tickets to Vietnam</h3>
                                <p>● Hanoi</p>
                                <p>● Ho Chi Minh</p>
                                <p>● Da Nang</p>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2 className="text-2xl font-bold mt-12 mb-3">
                        How It Works
                    </h2>
                    <h3 className="text-xl mt-1 mb-1">
                        Step #1 Discuss your travel plans with your personal travel consultant
                    </h3>
                    <p>
                        Discuss your travel plans (dates, locations, number of passengers, etc.) with one of our travel consultants over the phone. We’ll research current travel requirements for that location and suggest a couple of suitable flight options.
                    </p>
                    <h3 className="text-xl mt-1 mb-1">
                        Step #2 Choose additional services
                    </h3>
                    <p>
                        To make your trip a breeze, use Koyap’s travel expertise to take care of other travel logistics aspects. We can help with organizing travel documents & insurance, passport renewals, visa applications & renewals, hotel bookings, and car rentals.
                    </p>
                    <h3 className="text-xl mt-1 mb-1">
                        Step #3 Fly to your destination first-class
                    </h3>
                    <p>
                        Pack your bags, bring your documents, and get to the desired destination with maximum comfort and luxury. Skip long waiting lines during customs and security and enjoy many other perks of luxury travel
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-3">
                        Enjoy convenient luxury travel
                    </h2>
                    <h3 className="text-2xl mt-1 mb-1">
                        A supreme experience that will exceed all your expectations
                    </h3>
                    <p>
                        When you travel with Koyap, you get a personal travel consultant who will be there for you during the whole trip. We’ll make sure that you enjoy a smooth and unforgettable luxury experience.
                    </p>
                    <p>
                        Schedule a quick consultation call to discuss your travel plan and choose the most suitable business or first-class flight. We’ll give you a quote for your trip and handle all your travel documents if necessary. 
                    </p>
                    <p>
                        Our expertise is luxury travel and we work around the clock to make sure that all our clients’ needs are met. Your personal travel assistant will be available to you at all hours to help with any impending issues or concerns you might have.
                    </p>
                    <p>
                        We also offer frequent member discounts and exclusive deals for travelers who join our mailing list.
                    </p>
                </div>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="OK"
                style={{ background: "#04366e", zIndex:9999 }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
             We use cookies to make sure you can have the best experience on our website. If you continue to use this site we assume that you will be happy with it.
            </CookieConsent>
        </main>
    );
}

export default Flights;
