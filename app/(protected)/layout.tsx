import { ReactNode } from 'react'
import Navbar from './_components/navbar'

type props = {
  children: ReactNode
}

const ProtectedLayout = ({ children }: props) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
