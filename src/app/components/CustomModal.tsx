'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormData = z.infer<typeof schema>

export default function CustomModal() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    toast.success('Registration successful')
    console.log('Fake registered user:', data)
    reset()
    setIsOpen(false)
  }

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className='text-gray-700 hover:text-blue-600 font-medium transition-colors hidden md:block cursor-pointer'
      >
        SignUp
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50'
          onClick={() => setIsOpen(false)}
        >
          <div
            className='bg-white p-8 rounded-2xl shadow-2xl w-[95%] max-w-md relative'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-5 text-gray-400 hover:text-gray-700 text-2xl font-bold'
            >
              ×
            </button>

            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
              Register Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
              <div>
                <input
                  {...register('name')}
                  placeholder='Full Name'
                  className='border border-gray-300 rounded-md w-full px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email')}
                  placeholder='Email Address'
                  className='border border-gray-300 rounded-md w-full px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type='password'
                  {...register('password')}
                  placeholder='Password'
                  className='border border-gray-300 rounded-md w-full px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.password && (
                  <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
                )}
              </div>

              <button
                type='submit'
                className='bg-blue-600 text-white rounded-md py-3 mt-2 text-lg font-medium hover:bg-blue-700 transition-colors'
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
