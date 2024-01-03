## Overview
this project uses :
- Next 14 https://nextjs.org/docs
- Next Auth Beta https://authjs.dev/guides/upgrade-to-v5
- Prisma https://www.prisma.io/docs/getting-started
- Resend https://resend.com/docs/introduction
- Shadcn UI https://ui.shadcn.com/docs

## Getting Started
- npm i
- npx prisma migrate dev --name init
- npx prisma generate
- npx prisma db push
- npm run dev

## For Credentials Verification
this project use third party Resend for credentials, if user do not have emailVerification on fields, they can not login.
- Creating user by email -> type credentials
- Email has been sent if RESEND_API_KEY has been setup
- User check that email for confirm verification
- if user redirected to that link, it calls server action newVerification
- if success, user can login

## For Login with Google
- setup on GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

## For Login with Github
- setup on GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET

### This Project Road Map ✓
- [x] Register Page
- [x] Login Page
- [x] Verification Credentials
- [x] Credentials Reset Password -> Email -> Form
- [ ] 2FA Authentication
- [ ] Server & Client UI Auth
- [ ] Admin Page
- [ ] Setting Page