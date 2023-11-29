This is a [Next.js 14.0.3](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest`](https://nextjs.org/docs/getting-started/installation).

## Getting Started with each project

First, add the package-json dependencies:

```bash
npm install
```
Secondly, navigate to folder:

```bash
cd [projectname]
```
Thirdly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Rainbowkit, take a look at the following resources:

- [Rainbowkit Documentation](https://www.rainbowkit.com/docs/introduction) 
- RainbowKit is a React library that makes it easy to add wallet connection to your dapp. It's intuitive, responsive and customizable.

To learn more about WAGMI, take a look at the following resources:

- [WAGMI Documentation](https://wagmi.sh/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Misc
Because I used many times the same `<ConnectButton/>`, it can sometimes respond a bit buggy because it opens the connection for all. I could solve this by making a unique folder for each feature (no time as of now). This is just a template for people, just like me, who are trying to implement a walletconnect feature in the newest nextjs app router system. Feedback is always welcome! 

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
