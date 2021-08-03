import React from "react";
import classes from "./firstForm.module.scss";
import {Resolver, SubmitHandler, useForm} from "react-hook-form";

type Inputs ={
    name: string
    lastName:string
    password: string
}

const FirstForm = ()=>{
    const {register, handleSubmit, watch, formState:{errors}}=useForm<Inputs>()
    const onSubmit = (data:SubmitHandler<Inputs>)=>{
        console.log(data)
    }
    console.log(watch("name"))
    return(
        <div className={classes.wrapper_component}>
            <div className={classes.wrapper_form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input   {...register("name")}/>
                    <input  {...register("lastName")}/>
                    <input placeholder={"password"} {...register("password")}/>
                    <div className={classes.button_submit_wrapper}>
                        <button type="submit">Test</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export  default  FirstForm;
