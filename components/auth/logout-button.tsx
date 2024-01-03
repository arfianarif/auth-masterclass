'use client'

import { logout } from '@/actions/logout'
import { ReactNode } from 'react'

type props = {
  children: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

import React from 'react'

export const LogoutButton = ({
  children,
  mode = 'redirect',
  asChild,
}: props) => {
  const onClick = () => {
    logout()
  }

  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  )
}
