<div align="center">
  <h1>contribute<span style="color:#E11D48">,</span>design</h1>
  <h3>Welcome to the contribute.design repository</h3>
  <strong>All you need for design <> engineering collaboration on open source projects</strong>
  <h6>Made with ❤️ by designers and developers for developers and designers</h6>
</div>
<br>
<p align="center">
  <a href="https://contribute.design/contribute-design/contribute.design">
    <img src="https://contribute.design/api/shield/contribute-design/contribute.design" alt="Design contributions for contribute.design">
  </a>
</p>

## contribute.design

> what we are

what we do

what we care about:

* 🌟 **Collaboration**: 
* ♾ **Transparency**: 
* 🧵 **Open-source**: 

## 🌲 contribute.design projects

It might look simple at a glance but our setup contains a lot of different services and parts

### 🙌 .design/

* [.design/](./design) - provides you with some basic guidelines of how we intend to run our design process and relevant information on all the things we design

### 🎨 Frontend

The frontend is part of the monorepo and using styletron + a custom baseweb wrapper
### 🏗 Backend

The backend is part of the monorepo and accessing it's data from Cloudflare KV
### 🎈 Scrapers

We're using cloudflare workers to scrape repos and store them in KV 

## 🚀 Running contribute.design locally

Add an `.env` file to the root of your main repository which contains all the relevant keys for the local datastore

```bash 
CLOUDFLARE_KV_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_NAMESPACE_LOG=
CLOUDFLARE_NAMESPACE_PROJECTS=
CLOUDFLARE_NAMESPACE_PROJECT_CHECKS=
PROJECTS_WORKER_URL=
PROJECT_CHECKS_WORKER_URL=
GITHUB_TOKEN=
NEXT_PUBLIC_ENABLE_SITE_PREVIEW=
```
    

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deployments on Vercel

We're deploying every branch to a preview-environment on Vercel. The `main` branch gets promoted to production. 

Our builds are using vercel's edge-functions and therefor the experimental runtime!
