"use client";

import FXform from "@/src/lib/components/form/FXform";
import FXinput from "@/src/lib/components/form/FXinput";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFormContext } from "react-hook-form";


export type TLogin = {

  email : string,
  password : string
} 

export default function Login() {

  const onsubmit = (data: TLogin) => {

    console.log("Form Data:", data);

  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Login
        </h1>

        <FXform onSubmit={onsubmit} resolver={zodResolver(loginValidationSchema)}>

          <FormFields />

          <button
            type="submit"
            className="w-full hover:bg-black text-white py-2 mt-3 rounded-lg transition border border-gray-600"
          >
            Login
          </button>

        </FXform>
      </div>
    </div>
  );
}


function FormFields() {

  const { register , formState : {errors} } = useFormContext();

 

  return (
    <>
      <FXinput
        label="Email"
        type="email"
        required = {true}
        name="email"
        placeholder="Enter your email"
        register={register}
        error={errors?.email?.message  as string}
 
      />

      <FXinput
        label="Password"
        type="password"
        name="password"
        required = {true}
        placeholder="Enter your password"
        register={register}
        error={errors?.password?.message as string}
      />


    </>
  );
}
