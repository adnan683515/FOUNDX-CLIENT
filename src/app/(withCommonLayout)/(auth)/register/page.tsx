'use client'

import { FXform } from "@/src/lib/components/form/FXform"
import { FXinput } from "@/src/lib/components/form/FXinput"
import { signUpValidation } from "@/src/schemas/signup.schema"
import { RegisterService } from "@/src/services/AuthService"
import { TSignUP } from "@/src/TypeScript/Auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormContext } from "react-hook-form"

export default function SignUp() {
  const registerSubmit = async (data: TSignUP) => {
    data.profilePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

    try {
      const result = await RegisterService(data)
      console.log('Register Result:', result)

      
    } catch (err) {
      console.error('Register failed:', err)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-4'>
      <div className='w-full max-w-md bg-gray-800 text-white rounded-2xl shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-center mb-6'>Create Account</h1>

        <FXform onSubmit={registerSubmit} resolver={zodResolver(signUpValidation)}>
          <SignUPInputFields />
          <button
            type='submit'
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 mt-6 rounded-xl transition-colors shadow-md'
          >
            Register
          </button>
        </FXform>

        <p className='text-center text-gray-400 mt-4'>
          Already have an account? <span className='text-indigo-400 hover:underline cursor-pointer'>Login</span>
        </p>
      </div>
    </div>
  )
}




const SignUPInputFields = () => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className='space-y-4'>
      <FXinput
        label='Full Name'
        name='name'
        register={register}
        error={errors.name?.message as string}
        placeholder='Enter your full name'
        required
      />
      <FXinput
        label='Email'
        name='email'
        type='email'
        register={register}
        error={errors.email?.message as string}
        placeholder='Enter your email'
        required
      />
      <FXinput
        label='Password'
        name='password'
        type='password'
        register={register}
        error={errors.password?.message as string}
        placeholder='Enter your password'
        required
      />
      <FXinput
        label='Mobile Number'
        name='mobileNumber'
        register={register}
        error={errors.mobileNumber?.message as string}
        placeholder='Enter your mobile number'
        required
      />
    </div>
  )
}
