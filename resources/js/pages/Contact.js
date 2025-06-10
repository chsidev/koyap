import { Button, TextField, Card, Stack, Divider, InputAdornment, IconButton, Typography, Grid } from '@mui/material';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import { useFormControls } from "../services/ContactFormControls";
import callusImg from '../../images/callus.svg';

const inputFields = [
    {
        name: "fullName",
        label: "Full Name",
        id: "my-name",
        icon: <PersonOutlineIcon />
    },
    {
        name: "email",
        label: "Email",
        id: "my-email",
        icon: <MailOutlineIcon />
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 5
    }
];

const Contact = () => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return (
        <>
            {/* <div className="w-full px-6 mt-6">
                <div className="relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center py-12">
                    <div className="w-11/12 sm:w-2/3">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-bold leading-tight">Contact Us</h1>
                    </div>
                </div>
            </div> */}
            <div className="items-center relative min-h-[200px]">
                <img
                    className="flex-none w-full rounded-b-md h-72 bg-slate-100 md:h-[200px]"
                    src={callusImg}
                    alt="People working on laptops"
                />
                <div className="absolute top-0 left-0 items-center p-20 2xl:px-48 h-full w-full">
                    <h1 className="font-bold text-3xl tracking-tight text-center sm:text-4xl lg:text-5xl text-indigo-500">
                        Contact Us
                    </h1>
                </div>
            </div>
            <Stack
                px={2}
                py={1}
                my={3}
                direction="row"
                spacing={3}
                divider={<Divider flexItem />}
            >
                <Card elevation={3} className="p-4" style={{ height: 600, width: 800 }}>
                    <Typography gutterBottom variant="h5" component="div" className='!mt-5'>
                        We'd love to hear from you
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className='!mb-5'>
                        Send us a message and we'll respond as soon as possible
                    </Typography>
                    <Divider className='!my-7' />
                    <form autoComplete="off" onSubmit={handleFormSubmit}>
                    {inputFields.map((inputFieldValue, index) => {
                        return (
                            <TextField
                                key={index}
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                name={inputFieldValue.name}
                                label={inputFieldValue.label}
                                error={errors[inputFieldValue.name]}
                                multiline={inputFieldValue.multiline ?? false}
                                fullWidth
                                rows={inputFieldValue.rows ?? 1}
                                autoComplete="none"
                                {...(errors[inputFieldValue.name] && {
                                    error: true,
                                    helperText: errors[inputFieldValue.name]
                                })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {inputFieldValue.icon}
                                        </InputAdornment>
                                    )
                                }}
                                sx={{marginTop: 3}}
                            />
                        );
                    })}
                    <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        className='!mt-3'
                        disabled={!formIsValid()}
                    >
                        Send Message
                    </Button>
                    </form>
                </Card>
                <Card elevation={3} className="p-4" style={{ height: 600, width: 400 }}>
                    <Typography gutterBottom variant="h5" component="div" className='!mt-5'>
                        Contact Us
                    </Typography>
                    <Divider className='!my-7' />
                    <Typography gutterBottom variant="h6" component="div" className='!mt-5'>
                        Address
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className='!mb-5'>
                        Melbourne, Australia, 105 South Park Avenue
                    </Typography>
                    <Divider className='!my-3' />
                    <Typography gutterBottom variant="h6" component="div" className='!mt-5'>
                        Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className='!mb-5'>
                        Telephone: 2800 256 508 <br/>
                        Mobile: 1-669-307-0932
                    </Typography>
                    <Divider className='!my-3' />
                    <Typography gutterBottom variant="h6" component="div" className='!mt-5'>
                        Email
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className='!mb-5'>
                        koyap@protonmail.com <br/>
                        testexample@koyap.com
                    </Typography>
                    <Divider className='!my-3' />
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ my: 2 }}
                    >
                        <IconButton>
                            <FacebookIcon fontSize="medium" />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon fontSize="medium" />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon fontSize="medium" />
                        </IconButton>
                        <IconButton>
                            <PinterestIcon fontSize="medium" />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon fontSize="medium" />
                        </IconButton>
                    </Grid>
                </Card>
            </Stack>
        </>
    );
};

export default Contact;
