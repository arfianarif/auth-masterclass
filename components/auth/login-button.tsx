'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type props = {
  children: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

import React from 'react'

const LoginButton = ({ children, mode = 'redirect', asChild }: props) => {
  const router = useRouter()
  const onClick = () => {
    router.push('auth/login')
  }

  if (mode === 'modal') {
    return <span>TODO: Implement Modal</span>
  }
  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  )
}

export default LoginButton
