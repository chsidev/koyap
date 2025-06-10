import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Collapse,
    List,
    ListSubheader,
    ListItemButton,
    ListItemText,
    Avatar,
    Tooltip,
    ListItemAvatar,
    Divider,
    Backdrop,
    CircularProgress,
    Skeleton,
    Stack,
    Paper,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Typography,
    OutlinedInput,
    Checkbox,
    Slider,
    Button,
    Popover,
    Box,
    ButtonBase
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { base_url } from '../constants';
import {setFlights} from "../store/flightSlice";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import tempData from '../data/airlines.json';

const minDistance = 100;
const membersSelectBtnClasses =
    "box-border relative inline-flex items-center text-base rounded cursor-text border-solid border-[1px] border-gray-400 hover:border-black h-[56px]";

function FlightSearchResult({ onSelect, nextAction }) {
    const dispatch = useDispatch();
    const { flights, loading, error, initial, availableAirlines, prices } = useSelector(
        state => state.flight
    );
    // const flights = tempData.PricedItineraries;
    const [anchorElPrice, setAnchorElPrice] = React.useState(null);
    const openPrice = Boolean(anchorElPrice);
    const [expandedItems, setExpandedItems] = React.useState([]);
    const [selectedFlightIndex, setSelectedFlightIndex] = React.useState(-1);
    const [stops, setStops] = React.useState(3);
    const [airlines, setAirlines] = React.useState([]);
    const [filteredFlights, setFilteredFlights] = React.useState([]);
    const [priceRange, setPriceRange] = React.useState([200, 600]);
    const [sortBy, setSortBy] = React.useState('');
    const [reloading, setReloading] = React.useState(false);
    const handleClick = index => {
        let i = expandedItems.indexOf(index);
        let tmp = [];
        if (i === -1) {
            tmp = [...expandedItems, index];
        } else {
            tmp = [...expandedItems];
            tmp.splice(i, 1);
        }
        setSelectedFlightIndex(Math.floor(index / 10));
        setExpandedItems(tmp);
        onSelect(Math.floor(index / 10));
    };
    React.useEffect(() => {
        setFilteredFlights([...flights]);
        setExpandedItems([]);
    }, [flights]);
    React.useEffect(() => {
        if (prices.length === 0) setPriceRange([0, 1000]);
        else setPriceRange([...prices]);
    }, [prices]);
    React.useEffect(() => {
        setReloading(true)
        setTimeout(() => setReloading(false), 500);
        if (sortBy === 'stops') {
            let tmp = [...filteredFlights];
            tmp.sort((a, b) => (a.AirItinerary.OriginDestinationOptions[0].FlightSegments.length - b.AirItinerary.OriginDestinationOptions[0].FlightSegments.length));
            setFilteredFlights(tmp);
        }
        if (sortBy === 'price') {
            let tmp = [...filteredFlights];
            tmp.sort((a, b) => (a.AirItineraryPricingInfo.TotalPrice - b.AirItineraryPricingInfo.TotalPrice));
            setFilteredFlights(tmp);
        }
        // return setOpen([]);
    }, [sortBy]);
    React.useEffect(() => {
        setReloading(true)
        setTimeout(() => setReloading(false), 500);
        let tmp = [...flights];
        if (stops === 3) {
            setFilteredFlights(tmp);
        } else {
            tmp = tmp.filter(item => {
                for (let i = 0; i < item.AirItinerary.OriginDestinationOptions.length; i++) {
                    if (item.AirItinerary.OriginDestinationOptions[i].FlightSegments.length - 1 > stops) return false;
                }
                return true;
            });
            setFilteredFlights(tmp);
        }
    }, [stops]);
    React.useEffect(() => {
        setReloading(true)
        setTimeout(() => setReloading(false), 500);
        let tmp = [...flights];
        if (airlines.length === 0) {
            setFilteredFlights(tmp);
        } else {
            tmp = tmp.filter(item => {
                for (let i = 0; i < item.AirItinerary.OriginDestinationOptions.length; i++) {
                    for (let j = 0; j < item.AirItinerary.OriginDestinationOptions[i].FlightSegments.length; j++) {
                        if (airlines.indexOf(item.AirItinerary.OriginDestinationOptions[i].FlightSegments[j].MarketingAirlineName) > -1) return true;
                    }
                }
                return false;
            });
            setFilteredFlights(tmp);
        }
    }, [airlines]);
    React.useEffect(() => {
        setReloading(true)
        setTimeout(() => setReloading(false), 500);
        let tmp = [...flights];
        if (priceRange.length === 0) {
            setFilteredFlights(tmp);
        } else {
            tmp = tmp.filter(item => {
                return item.AirItineraryPricingInfo.TotalPrice >= priceRange[0] && item.AirItineraryPricingInfo.TotalPrice <= priceRange[1];
            });
            setFilteredFlights(tmp);
        }
    }, [priceRange]);
    const handleChangeStops = e => {
        setStops(e.target.value);
    };
    const handleChangeAirlines = e => {
        setAirlines(
            typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
        );
    };
    const handleChangeSortBy = e => {
        setSortBy(e.target.value);
    };
    const handleClickPrice = (event) => {
        setAnchorElPrice(event.currentTarget);
    };
    const handleClosePrice = () => {
        setAnchorElPrice(null);
    };
    const handleChangePriceRange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], (prices[1]??1000) - minDistance);
                setPriceRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setPriceRange([clamped - minDistance, clamped]);
            }
        } else {
            setPriceRange(newValue);
        }
    };

    return (
        <List
            sx={{
                bgcolor: 'background.paper',
                marginTop: 3,
                marginX: 2,
                minHeight: 30
            }}
            subheader={
                <ListSubheader component="div" sx={{ top: 68.5 }}>
                    {(!error && !loading && !initial) && ('Search Results - ' + filteredFlights.length + ' Flights found')}
                    {(error || loading) && 'Search Results'}
                </ListSubheader>
            }
        >
            {!initial && flights.length === 0 && !error && !loading && (
                <div className="w-full text-center text-2xl text-slate-500 pt-8">
                    No data!
                </div>
            )}
            {!loading && !initial && (
                <Paper elevation={3} className="px-5 mb-4" sx={{ marginX: -2 }}>
                    <Stack
                        py={1}
                        justifyContent="space-between"
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 1 }}
                    >
                        <Typography variant="body1" component="div" sx={{ alignSelf: 'center', minWidth: 60, width: {xs: '100%', md: '65px'} }}>Filter By: </Typography>
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Stops</InputLabel>
                            <Select
                                value={stops}
                                label="Stops"
                                onChange={handleChangeStops}
                            >
                                <MenuItem value={3}>Any number of stops</MenuItem>
                                <MenuItem value={0}>Non-stop only</MenuItem>
                                <MenuItem value={1}>1 stop or fewer</MenuItem>
                                <MenuItem value={2}>2 stop or fewer</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Airlines</InputLabel>
                            <Select
                                value={airlines}
                                multiple
                                label="Airlines"
                                onChange={handleChangeAirlines}
                                input={<OutlinedInput label="Airlines" />}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {availableAirlines.map((item, index) => (
                                    <MenuItem key={index} value={item}>
                                        <Checkbox checked={airlines.indexOf(item) > -1} />
                                        <ListItemText primary={item} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>
                            {/*<Button
                            variant="outlined"
                            disableElevation
                            onClick={handleClickPrice}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            Price
                        </Button>*/}
                            <div className="inline-flex flex-col relative align-top border-0 p-0 min-w-[130px]">
                                <div
                                    className={
                                        membersSelectBtnClasses +
                                        (openPrice ? " border-[#1976d2] border-2" : "")
                                    }
                                    onClick={handleClickPrice}
                                >
                                    <div className="relative text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden min-h-[1.5rem] select-none rounded cursor-pointer border-0 box-content m-0 block min-w-0 w-full animate-[mui-auto-fill-cancel] px-3.5 py-4 pr-[32px]">
                                        <div className="absolute left-[14px] w-full">
                                            <span className="text-base text-gray-500">Price</span>
                                        </div>
                                        <ArrowDropDownIcon
                                            className={
                                                openPrice
                                                    ? "right-2 absolute rotate-180"
                                                    : "right-2 absolute"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <Popover
                                open={openPrice}
                                anchorEl={anchorElPrice}
                                onClose={handleClosePrice}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Box sx={{ width: 600, padding: 4, paddingTop: 6 }}>
                                    <Slider
                                        min={prices[0]??0}
                                        max={prices[1]??1000}
                                        value={priceRange}
                                        onChange={handleChangePriceRange}
                                        valueLabelDisplay="on"
                                        disableSwap
                                    />
                                </Box>
                            </Popover>
                        </FormControl>
                        <FormControl sx={{ float: 'right', minWidth: 90 }}>
                            <InputLabel>Sort by</InputLabel>
                            <Select
                                label="Sort by"
                                value={sortBy}
                                onChange={handleChangeSortBy}
                            >
                                <MenuItem value={'price'}>Price</MenuItem>
                                <MenuItem value={'departure'}>Departure</MenuItem>
                                <MenuItem value={'arrival'}>Arrival</MenuItem>
                                <MenuItem value={'stops'}>Stops</MenuItem>
                                <MenuItem value={'duration'}>Duration</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Paper>
            )}
            {!loading &&
                filteredFlights.map((item, index) => {
                    let originDestinationOptions = item.AirItinerary.OriginDestinationOptions;
                    return (
                        <div className={selectedFlightIndex === index? "border-orange-800 border-2 rounded mb-[24px]": "mb-[24px]"} key={index}>
                            {originDestinationOptions.map(
                                (option, indexOption) => {
                                    let flightSegments = option.FlightSegments;
                                    let stops = flightSegments.length - 1;
                                    var ddt = new Date(flightSegments[0].DepartureDate);
                                    var adt = new Date(flightSegments[stops].ArrivalDate);
                                    var dmt = ddt.getMonth();
                                    var amt = adt.getMonth();
                                    var dda = ddt.getDay();
                                    var ada = adt.getDay();
                                    var ddd = ddt.getDate();
                                    var add = adt.getDate();
                                    var dhr = ddt.getHours();
                                    var ahr = adt.getHours();
                                    var dampm = "AM";
                                    var aampm = "AM";
                                    var dmi = ddt.getMinutes();
                                    var ami = adt.getMinutes();
                                    switch(dda) {
                                        case 1:
                                            dda = "Mon";
                                        case 2:
                                            dda = "Tue";
                                        case 3: 
                                            dda = "Wed";
                                        case 4:
                                            dda = "Thu";
                                        case 5:
                                            dda = "Fri";
                                        case 6:
                                            dda = "Sat";
                                        case 0:
                                            dda = "Sun";
                                    }
                                    switch(ada) {
                                        case 1:
                                            ada = "Mon";
                                        case 2:
                                            ada = "Tue";
                                        case 3: 
                                            ada = "Wed";
                                        case 4:
                                            ada = "Thu";
                                        case 5:
                                            ada = "Fri";
                                        case 6:
                                            ada = "Sat";
                                        case 0:
                                            ada = "Sun";
                                    }
                                    switch(dmt) {
                                        case 0:
                                            dmt = "Jan";
                                        case 1:
                                            dmt = "Feb";
                                        case 2:
                                            dmt = "Mar";
                                        case 3:
                                            dmt = "Apr";
                                        case 4:
                                            dmt = "May";
                                        case 5: 
                                            dmt = "Jun";
                                        case 6:
                                            dmt = "Jul";
                                        case 7:
                                            dmt = "Aug";
                                        case 8:
                                            dmt = "Sep";
                                        case 9:
                                            dmt = "Oct";
                                        case 10:
                                            dmt = "Nov";
                                        case 11:
                                            dmt = "Dec";
                                    }
                                    switch(amt) {
                                        case 0:
                                            amt = "Jan";
                                        case 1:
                                            amt = "Feb";
                                        case 2:
                                            amt = "Mar";
                                        case 3:
                                            amt = "Apr";
                                        case 4:
                                            amt = "May";
                                        case 5: 
                                            amt = "Jun";
                                        case 6:
                                            amt = "Jul";
                                        case 7:
                                            amt = "Aug";
                                        case 8:
                                            amt = "Sep";
                                        case 9:
                                            amt = "Oct";
                                        case 10:
                                            amt = "Nov";
                                        case 11:
                                            amt = "Dec";
                                    }
                                    if(dhr < 12) {
                                        dampm = "AM";
                                    }else if(dhr == 12) {
                                        dampm = "PM";
                                    } else {
                                        dhr = dhr - 12;
                                        dampm = "PM";
                                    }
                                    if(ahr < 12) {
                                        aampm = "AM";
                                    } else if(ahr == 12 ) {
                                        aampm = "PM";
                                    } else {
                                        ahr = ahr - 12;
                                        aampm = "PM";
                                    }
                                    return (
                                        <React.Fragment key={indexOption}>
                                            <Divider
                                                variant="inset"
                                                component="li"
                                            />
                                            <ListItemButton
                                                alignItems="flex-start"
                                                className="!bg-slate-200 hover:bg-slate-300"
                                                onClick={() => handleClick(index * 10 + indexOption)}
                                            >
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt={flightSegments[0].MarketingAirlineName}
                                                        variant="rounded"
                                                        src={base_url + '/' + flightSegments[0].AirlineLogo}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    sx={{ width: '50%' }}
                                                    primary={flightSegments[0].MarketingAirlineName}
                                                    secondary={dmt + " " + ddd + ",   " + dhr + ":" + dmi + " " + dampm + ' - ' + amt + " " + add + ",   " + ahr + ":" + ami + " " + aampm}
                                                />
                                                <ListItemText
                                                    sx={{ width: '35%' }}
                                                    primary={`Total price: $${item.AirItineraryPricingInfo.TotalPrice}`}
                                                    // secondary={`Base price: ${item.AirItineraryPricingInfo.BasePrice}`}
                                                />
                                                <ListItemText
                                                    sx={{ width: '15%' }}
                                                    primary={stops === 0 ? 'Nonstop' : `${stops} stop`}
                                                    secondary={option.JourneyTotalDuration.replace('.', 'd ')}
                                                />
                                                {expandedItems.indexOf(index * 10 + indexOption) > -1 ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse
                                                in={expandedItems.indexOf(index * 10 + indexOption) > -1}
                                                timeout="auto"
                                                unmountOnExit
                                            >
                                                <List
                                                    component="div"
                                                    disablePadding={false}
                                                >
                                                    {flightSegments.map(
                                                        (flightSegment, subIndex) => {
                                                            var ddt = new Date(flightSegment.DepartureDate);
                                                            var adt = new Date(flightSegment.ArrivalDate);
                                                            var dmt = ddt.getMonth();
                                                            var amt = adt.getMonth();
                                                            var dda = ddt.getDay();
                                                            var ada = adt.getDay();
                                                            var ddd = ddt.getDate();
                                                            var add = adt.getDate();
                                                            var dhr = ddt.getHours();
                                                            var ahr = adt.getHours();
                                                            var dampm = "AM";
                                                            var aampm = "AM";
                                                            var dmi = ddt.getMinutes();
                                                            var ami = adt.getMinutes();
                                                            switch(dda) {
                                                                case 1:
                                                                    dda = "Mon";
                                                                case 2:
                                                                    dda = "Tue";
                                                                case 3: 
                                                                    dda = "Wed";
                                                                case 4:
                                                                    dda = "Thu";
                                                                case 5:
                                                                    dda = "Fri";
                                                                case 6:
                                                                    dda = "Sat";
                                                                case 0:
                                                                    dda = "Sun";
                                                            }
                                                            switch(ada) {
                                                                case 1:
                                                                    ada = "Mon";
                                                                case 2:
                                                                    ada = "Tue";
                                                                case 3: 
                                                                    ada = "Wed";
                                                                case 4:
                                                                    ada = "Thu";
                                                                case 5:
                                                                    ada = "Fri";
                                                                case 6:
                                                                    ada = "Sat";
                                                                case 0:
                                                                    ada = "Sun";
                                                            }
                                                            switch(dmt) {
                                                                case 0:
                                                                    dmt = "Jan";
                                                                case 1:
                                                                    dmt = "Feb";
                                                                case 2:
                                                                    dmt = "Mar";
                                                                case 3:
                                                                    dmt = "Apr";
                                                                case 4:
                                                                    dmt = "May";
                                                                case 5: 
                                                                    dmt = "Jun";
                                                                case 6:
                                                                    dmt = "Jul";
                                                                case 7:
                                                                    dmt = "Aug";
                                                                case 8:
                                                                    dmt = "Sep";
                                                                case 9:
                                                                    dmt = "Oct";
                                                                case 10:
                                                                    dmt = "Nov";
                                                                case 11:
                                                                    dmt = "Dec";
                                                            }
                                                            switch(amt) {
                                                                case 0:
                                                                    amt = "Jan";
                                                                case 1:
                                                                    amt = "Feb";
                                                                case 2:
                                                                    amt = "Mar";
                                                                case 3:
                                                                    amt = "Apr";
                                                                case 4:
                                                                    amt = "May";
                                                                case 5: 
                                                                    amt = "Jun";
                                                                case 6:
                                                                    amt = "Jul";
                                                                case 7:
                                                                    amt = "Aug";
                                                                case 8:
                                                                    amt = "Sep";
                                                                case 9:
                                                                    amt = "Oct";
                                                                case 10:
                                                                    amt = "Nov";
                                                                case 11:
                                                                    amt = "Dec";
                                                            }
                                                            if(dhr < 12) {
                                                                dampm = "AM";
                                                            }else if(dhr == 12) {
                                                                dampm = "PM";
                                                            } else {
                                                                dhr = dhr - 12;
                                                                dampm = "PM";
                                                            }
                                                            if(ahr < 12) {
                                                                aampm = "AM";
                                                            } else if(ahr == 12 ) {
                                                                aampm = "PM";
                                                            } else {
                                                                ahr = ahr - 12;
                                                                aampm = "PM";
                                                            }
                                                            var DAC = flightSegment.DepartureAirportName.split(", ")[1];
                                                            var DAN = flightSegment.DepartureAirportName.split(", ")[0].replace("-", " ");
                                                            var AAC = flightSegment.ArrivalAirportName.split(", ")[1];
                                                            var AAN = flightSegment.ArrivalAirportName.split(", ")[0].replace("-", " ");
                                                            return(
                                                            <React.Fragment key={subIndex}>
                                                                <Divider
                                                                    variant="inset"
                                                                    component="li"
                                                                />
                                                                <ListItemButton
                                                                    sx={{ pl: 4 }}
                                                                >
                                                                    <Tooltip title={flightSegment.MarketingAirlineName}>
                                                                        <ListItemAvatar>
                                                                            <Avatar
                                                                                alt={flightSegment.MarketingAirlineName}
                                                                                variant="rounded"
                                                                                src={base_url + '/' + flightSegment.AirlineLogo}
                                                                            />
                                                                            {/* <span>{flightSegment.MarketingAirlineName}</span> */}
                                                                        </ListItemAvatar>
                                                                    </Tooltip>
                                                                    <ListItemText
                                                                        sx={{ width: '48%' }}
                                                                        primary={
                                                                            <>
                                                                                <FlightTakeoffIcon className="mr-2 bg-gray-300 rounded-t-full" />
                                                                                {dmt + " " + ddd + ",   " + dhr + ":" + dmi + " " + dampm}
                                                                            </>
                                                                        }
                                                                        secondary={DAC + ' (' + flightSegment.DepartureAirport + ' - ' + DAN + ')'}
                                                                    />
                                                                    <ListItemText
                                                                        sx={{ width: '33%' }}
                                                                        primary={
                                                                            <>
                                                                                <FlightLandIcon className="mr-2 bg-gray-300 rounded-t-full" />
                                                                                {amt + " " + add + ",   " + ahr + ":" + ami + " " + aampm}
                                                                            </>
                                                                        }
                                                                        secondary={AAC + ' (' + flightSegment.ArrivalAirport + ' - ' + AAN + ')'}
                                                                    />
                                                                    
                                                                    <Box
                                                                        role="presentation"
                                                                        sx={{
                                                                            width: '19%'
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            size="medium"
                                                                            variant="outlined"
                                                                            className=" absolute left-0 top-4 !rounded-full"
                                                                            color="success"
                                                                            sx={{
                                                                                marginBottom: 3,
                                                                            }}
                                                                            onClick={nextAction}
                                                                        >
                                                                            Book
                                                                        </Button>
                                                                    </Box>
                                                                </ListItemButton>
                                                            </React.Fragment>
                                                        )}
                                                    )}
                                                </List>
                                            </Collapse>
                                        </React.Fragment>
                                    );
                                }
                            )}
                            {/*<Divider
                                variant="fullWidth"
                                sx={{ marginBottom: 3 }}
                                component="li"
                            />*/}
                        </div>
                    );
                })}
            {loading && (
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ pl: 2 }}
                    divider={
                        <Divider variant="inset" orientation="horizontal" />
                    }
                >
                    {[...Array(6)].map((value, index) => (
                        <Stack key={index} direction="row" spacing={3}>
                            <Skeleton
                                variant="rectangular"
                                width={45}
                                height={45}
                                animation="wave"
                                sx={{ borderRadius: 1 }}
                            />
                            <Stack
                                direction="column"
                                spacing={0.4}
                                justifyContent="center"
                                alignItems="flex-start"
                            >
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={150}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={300}
                                />
                            </Stack>
                            <Stack
                                direction="column"
                                spacing={0.4}
                                justifyContent="center"
                                alignItems="flex-end"
                                sx={{ position: 'absolute', right: 10 }}
                            >
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={100}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    width={200}
                                />
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            )}
             <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={reloading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </List>
    );
}

FlightSearchResult.propTypes = {
    onSelect: PropTypes.func
};

// Specifies the default values for props:
FlightSearchResult.defaultProps = {
    onSelect: () => {}
};

export default FlightSearchResult;
