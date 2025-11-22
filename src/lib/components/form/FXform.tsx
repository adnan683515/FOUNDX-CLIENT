'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { signUpValidation } from '@/src/schemas/signup.schema'
import { TSignUP } from '@/src/TypeScript/Auth'
import { RegisterService } from '@/src/services/AuthService'

// ===================== FXform Component =====================
interface FXformProps {
  children: React.ReactNode
  onSubmit: (data: any) => void
  defaultValues?: Record<string, any>
  resolver?: any
}

export const FXform = ({ children, onSubmit, defaultValues, resolver }: FXformProps) => {
  const methods = useForm({ defaultValues, resolver })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
