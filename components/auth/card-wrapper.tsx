'use client'

import { ReactNode } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Header } from '@/components/auth/header'
import { Social } from '@/components/auth/social'
import { BackButton } from '@/components/auth/back-button'

type props = {
  children: ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: props) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <Header label={headerLabel} />
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
