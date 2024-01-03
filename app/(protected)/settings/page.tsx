'use client'

import { logout } from '@/actions/logout'
import { useSession } from 'next-auth/react'

const SettingsPage = () => {
  const session = useSession()

  const onClick = () => {
    logout()
  }
  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={onClick}>Sign Out</button>
    </div>
  )
}

export default SettingsPage
