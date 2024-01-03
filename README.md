## Overview
this project uses :
1. Next 14 https://nextjs.org/docs
2. Next Auth Beta https://authjs.dev/guides/upgrade-to-v5
3. Prisma https://www.prisma.io/docs/getting-started
4. Resend https://resend.com/docs/introduction
5. Shadcn UI https://ui.shadcn.com/docs

## Getting Started
1. npm i
2. npx prisma migrate dev --name init
3. npx prisma generate
4. npx prisma db push
5. npm run dev

## For Credentials Verification
this project use third party Resend for credentials, if user do not have emailVerification on fields, they can not login.
1. Creating user by email -> type credentials
2. Email has been sent if RESEND_API_KEY has been setup
3. User check that email for confirm verification
4. if user redirected to that link, it calls server action newVerification
5. if success, user can login

## For Login with Google
1. setup on GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

## For Login with Github
1. setup on GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET

### This Project Road Map ✓
- [x] Register Page
- [x] Login Page
- [x] Verification Credentials
- [x] Credentials Reset Password -> Email -> Form
- [ ] 2FA Authentication
- [ ] Server & Client UI Auth
- [ ] Admin Page
- [ ] Setting Page