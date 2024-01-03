'use client'

import { UserButton } from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm fixed top-0'>
      <div className='flex gap-x-2'>
        <Button asChild variant={pathname === '/server' ? 'default' : 'ghost'}>
          <Link href='/server'>Server</Link>
        </Button>
        <Button asChild variant={pathname === '/client' ? 'default' : 'ghost'}>
          <Link href='/client'>Client</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'ghost'}>
          <Link href='/admin'>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'ghost'}
        >
          <Link href='/settings'>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar
