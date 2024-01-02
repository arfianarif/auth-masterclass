import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      {children}
    </div>
  )
}

export default AuthLayout
