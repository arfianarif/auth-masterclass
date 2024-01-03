'use client'

import { admin } from '@/actions/admin'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { toast } from 'sonner'

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.success) {
        toast.success(data.success)
      }
      if (data.error) {
        toast.error(data.error)
      }
    })
  }
  const onAPIRouteClick = () => {
    fetch('/api/admin')
      .then((response) => {
        if (response.ok) {
          toast.success('Allowed API route!')
        } else {
          toast.error('Forbidden API Route!')
        }
      })
      .catch()
  }
  return (
    <Card className='w-[600px] '>
      <CardHeader>
        <p className='text-2xl font-semibold text-center'>🔑 Admin</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole='admin'>
          <FormSuccess message='You are allowed to see this content!' />
        </RoleGate>
        <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
          <p className='text-sm font-medium'>Admin only API route</p>
          <Button onClick={onAPIRouteClick}>Click to test</Button>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
          <p className='text-sm font-medium'>Admin only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage
