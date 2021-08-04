import React from "react";
import classes from "./formikForm.module.scss";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";
import {FormikProps, FormikValues} from "formik";
import {FormikValuesFor} from "./formikFormContainer";


type propsType ={
    formik: FormikProps<FormikValuesFor>
}

const FormikForm:React.FC<propsType> = (props)=>{
    return(
        <div className={classes.wrapper_component}>
            <div className={classes.wrapper_form}>
                <form onSubmit={props.formik.handleSubmit}>
                    <input placeholder={"name"}/>
                    <input placeholder={"last name"}/>
                    <input placeholder={"email"}/>
                    <input placeholder={"phone"}/>
                    <input placeholder={"password"}/>
                    <input placeholder={"repeat password"}/>
                    <div className={classes.button_submit_wrapper}>
                        <button type="submit">Test</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export  default  FormikForm;
