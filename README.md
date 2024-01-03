## Overview
1. this project use next14, prisma, resend, mysql, shadcn ui, next-auth@beta

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