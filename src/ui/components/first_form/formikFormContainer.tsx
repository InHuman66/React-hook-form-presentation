import { useFormik } from "formik";
import React from "react";
import FormikForm from "./formikForm";


export type FormikValuesFor={
    name:string
    fullName:string
    email:string
    phone:string
}
type FormikErrorType = {
    name?:string
    fullName?:string
    email?:string
    phone?:string
}
const FormikFormContainer = ()=>{
    const formik = useFormik({
        initialValues: {
            name: '',
            fullName:'',
            email: '',
            phone:'',
        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name= 'Required';
            }else if (/[@?,."%$#!&*()+0-9]/.test(values.name)) {
                errors.name = 'Name should not contain extraneous characters';
            }
            if (!values.fullName) {
                errors.fullName= 'Required';
            }else if (/[@?,."%$#!&*()+0-9]/.test(values.fullName)) {
                errors.fullName = 'Name should not contain extraneous characters';
            }
            if (!values.email) {
                errors.email= 'Required';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.phone || values.phone === ''){
                errors.phone = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
        },

    });
    return(
        <FormikForm formik={formik}/>
    )
}
export default  FormikFormContainer;