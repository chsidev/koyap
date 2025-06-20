import { useState } from 'react';
import ApiService from '../services/ApiService';

const PostContactForm = async (
    values,
    successCallback,
    errorCallback
) => {
    let res = await ApiService.sendEmail({
        name: values.fullName,
        email: values.email,
        phone: "",
        message: values.message
    });

    if (res.status < 400) successCallback();
    else errorCallback();
};

const initialFormValues = {
    fullName: "",
    email: "",
    message: "",
    formSubmitted: false,
    success: false
};

export const useFormControls = () => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required.";

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid.";
        }

        if ("message" in fieldValues)
            temp.message = fieldValues.message.length !== 0 ? "" : "This field is required.";

        setErrors({ ...temp });
    };

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const handleSuccess = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: true
        });
    };

    const handleError = () => {
        setValues({
            ...initialFormValues,
            formSubmitted: true,
            success: false
        });
    };

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.fullName &&
            fieldValues.email &&
            fieldValues.message &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const isValid = Object.values(errors).every((x) => x === "") && formIsValid();
        if (isValid) {
            await PostContactForm(values, handleSuccess, handleError);
        }
    };

    return {
        values,
        errors,
        handleInputValue,
        handleFormSubmit,
        formIsValid
    };
};
