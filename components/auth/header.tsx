import { cn } from '@/lib/utils'

type props = {
  label: string
}

export const Header = ({ label }: props) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center py-4'>
      <h1 className={cn('text-3xl font-semibold')}>🔐 Auth</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  )
}
