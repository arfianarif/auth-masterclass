import CardWrapper from '@/components/auth/card-wrapper'

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Welcome Back'
      backButtonHref='/auth/register'
      backButtonLabel="Don't have a account ?"
      showSocial
    >
      LoginForm
    </CardWrapper>
  )
}
