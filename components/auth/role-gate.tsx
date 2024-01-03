'use client'

import { useCurrentRole } from '@/hooks/use-current-role'
import { ReactNode } from 'react'
import { FormError } from '../form-error'

type props = {
  children: ReactNode
  allowedRole: 'admin' | 'user'
}

export const RoleGate = ({ children, allowedRole }: props) => {
  const role = useCurrentRole()
  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permission to view this content!' />
    )
  }

  return <>{children}</>
}
