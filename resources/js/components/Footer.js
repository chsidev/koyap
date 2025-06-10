import React from 'react';
import {
    Button,
    Stack,
    Box,
    Grid,
    Avatar,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ClickAwayListener
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../images/logo1.svg';

function Footer() {
    return (
        <div className="w-full bg-gray-900 z-[1201] relative text-gray-400 px-5 py-10">
            <Box sx={{ flexGrow: 1 }} className="w-full !mx-auto rounded-md xl:!w-3/4">
                {/* <Divider /> */}
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                    <div className='mr-10'>
                        <img src={logo} className="h-[80px]" alt='Koyap logo' />
                    </div>
                    <Grid container sx={{ width: '100%', margin: '0 !important' }} spacing={2}>
                        {/* <Grid item xs={3} sx={{ paddingLeft: '0 !important' }}>
                            <Typography variant="h6" component="div" className='!mb-3 text-gray-200'>
                            <span className='footer-text-decor'>Comp</span>any
                            </Typography>
                            <Typography variant="body1" component="div">
                                About
                            </Typography>
                            <Typography variant="body1" component="div">
                                How it works
                            </Typography>
                        </Grid> */}
                        <Grid item xs={4} sx={{ paddingLeft: '0 !important' }}>
                            <Typography variant="h6" component="div"  className='!mb-3 text-gray-200'>
                            <span className='footer-text-decor'>Expl</span>ore
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./flights">Flights</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./hotels">Hotels</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./cars">Cars</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./cruises">Cruises</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ paddingLeft: '0 !important' }}>
                            <Typography variant="h6" component="div"  className='!mb-3 text-gray-200'>
                                <span className='footer-text-decor'>Term</span>s and Policies
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./privacypolicy">Privacy policy</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./termsofuse">Terms of use</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ paddingLeft: '0 !important' }}>
                            <Typography variant="h6" component="div"  className='footer-text-decor !mb-3 text-gray-200'>
                                Help
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./documents">Documents</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./passportrenewal">Passport Renewal</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./visaapplication">Visa Application</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./visarenewal">Visa Renewal</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./insurance">Insurance</a>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <a  href="./contact">Contact Us</a>
                            </Typography>
                            {/* <Typography variant="body1" component="div">
                                Blog
                            </Typography> */}
                            {/* <Typography variant="body1" component="div">
                                Corporate
                            </Typography> */}
                        </Grid>
                    </Grid>
                </Stack>
                {/* <Divider className='bg-gray-400' /> */}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ my: 2 }}
                >
                    <IconButton className='!text-gray-400'>
                        <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton className='!text-gray-400'>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton className='!text-gray-400'>
                        <TwitterIcon fontSize="large" />
                    </IconButton>
                    <IconButton className='!text-gray-400'>
                        <PinterestIcon fontSize="large" />
                    </IconButton>
                    <IconButton className='!text-gray-400'>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Divider className='bg-gray-400' />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div className='mt-3'>Copyright © 2022 Koyap, Inc. All rights reserved.</div>
                </Grid>
            </Box>
        </div>
    );
}

export default Footer;
