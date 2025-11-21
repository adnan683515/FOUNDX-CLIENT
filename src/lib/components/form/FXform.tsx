"use client";

import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

interface TformConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends TformConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function FXform({ children, defaultValues, resolver, onSubmit }: IProps) {

  const formConfig: TformConfig = {};

  if (defaultValues) formConfig.defaultValues = defaultValues;
  if (resolver) formConfig.resolver = resolver;

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
