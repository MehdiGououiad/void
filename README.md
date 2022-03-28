Master branch :
	1 - nextjs app with static side rendering ( indivudual modals are not static site rendered only the home page maybe a fix for a later time)
	2 - bypassed cors isssue on server with a dedicated proxy hosted on google cloud ( built for this practise test but can fix any cors issue you only need to pass it an url parametre with the link you want bypassed)
	3 - request returned by the proxy is cached ( using apichache middleware) 
	4 - All images are lazy loaded / resized with the next/image component
	5 - implementes simple mocked and unmocked api tests with jest 
ServerSideRenedering Branch : 
	1 - in place of SSG , SSR was used
staticSiteRenderingWithRevalidation Branch:
	1 - forced revalidation every 30 seconds

TODO --
-- Implement experimental unstable_revalidate to revalidate pages on demand 
-- Lighthouse score need to be perfect (100/100) //  some quick fixes
-- staticly build all the modals before hand





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
