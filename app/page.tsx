import LoginButton from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-semibold text-white drop-shadow-xl'>
          🔐 Auth
        </h1>
        <p className='text-white'>
          a simple next auth masterclass for authentication service
        </p>
        <div>
          <LoginButton>
            <Button className='' variant={'secondary'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
