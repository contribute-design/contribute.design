<div align="center">
<a href="https://contribute.design"><img src="https://i.imgur.com/ZoPpMsS.png" /></a>
  <h1>👋 Welcome</h1>
</div>
<br>
<p align="center">
  <a href="https://contribute.design/contribute-design/contribute.design">
    <img src="https://contribute.design/api/shield/contribute-design/contribute.design" alt="Design contributions for contribute-design/contribute.design">
  </a>
</p>

Hi! You've arrived at our contributing page and are now one step away from contributing to bridging the gap between product design and open source software. We're thankful for all your contributions, whether it's helping us find issues in our code, highlighting features we're missing, contributing to the codebase or proposing design and ux improvements. If you've found your way here, you'll soon be ready to join in the fun of building features and fixing bugs directly with us - and we're thrilled to have you on board!

To get you started on a good foot, we've created an easy overview of the most important things to get you started below as well as a [Code of Conduct](./CODE_OF_CONDUCT.md) for contributing to our projects.

## Table of contents

- [Table of contents](#table-of-contents)
- [Our typical workflow](#our-typical-workflow)
- [Contributing Ideas](#contributing-ideas)
- [Contributing Design](#contributing-design)
- [Contributing Code](#contributing-code)
  - [General Prerequisites](#general-prerequisites)
  - [General Setup](#general-setup)
  - [API](#api)
  - [Frontend](#frontend)
  - [Cloudflare Workers](#cloudflare-workers)
  - [Tests](#tests)
- [Additional Resources](#additional-resources)
- [Conventions](#conventions)
  - [Git Commit Messages](#git-commit-messages)

## Our typical workflow

1. We typically start with a discussion in a GitHub issue. Make sure to chose the right labels when creating issues.
2. We promise to pick up your thoughts and foster fruitful discussions
3. Feel free to contribute not only thoughts but also designs, ideas, etc in those issues once the conversation goes into that direction.
4. After a successfull consensus issues will be re-tagged, assigned and worked on.
5. We love to work in draft PRs and have deployment previews enabled on every draft PR
6. Feel free to fork the code and create a PR against our main branch.
7. Your work will be reviewed and eventually merged.

## Contributing Ideas

We encourage you to think out of the box, go crazy and feel free to create issues for whatever you feel is important.

## Contributing Design

As we love to dogfood you can find all the guides regarding design contributions in our [.design folder](./.design/)

## Contributing Code

This is the monorepo serving the Frontend, API and our Cloudflare workers which all power [contribute.design](https://contribute.design)

### General Prerequisites

1. Install Node.js `>=16` minimum, [latest LTS is recommended](https://nodejs.org/en/about/releases/)

   - Recommended: use [`nvm`](https://github.com/nvm-sh/nvm) for managing Node.js versions

2. Install [`yarn`](https://yarnpkg.com) (for installing node dependencies)
3. Install [`ts-node`](https://github.com/TypeStrong/ts-node) (for running Node.js scripts written in TypeScript)
4. Install [`wrangler`](https://developers.cloudflare.com/workers/wrangler/) (for local development of cloudflare workers)

Copy paste these commands to install the global dependencies:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16
npm install --global yarn ts-node wrangler
```

### General Setup

To set up and build all the packages, follow these steps:

```bash
git clone https://github.com/contribute-design/contribute.design
cd contribute.design
yarn install
yarn dev
```

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
SENDGRID_TOKEN=
SENDGRID_NEWSLETTER_LIST=
NEXT_PUBLIC_POSTHOG_TOKEN=
NEXT_PUBLIC_ENABLE_SITE_PREVIEW=
```

The monorepo shares helpers and components between all 3 services (API, Frontend, Cloudflare Workers)

We're deploying every branch to a preview-environment on Vercel. The `main` branch gets promoted to production.

> Our builds are using vercel's edge-functions and therefor the experimental runtime!

### API

As we're using NextJS on Vercel all our API code is within the `/pages/api` folder

### Frontend

The frontend is served from within the `/pages` folder and relies on helpers and components outside of it

### Cloudflare Workers

Workers are within the `/workers` folder and do NOT get deployed automatically yet. There are a lot of open issues to ease up the DX of workers.

### Tests

Our current test coverage is 0... We're aiming to fix this ASAP and welcome any support on this.

## Additional Resources

- [.design](./.design/) - All things regarding UI, UX, Proudct and Architectural design
- [CODE_OF_CONDUCT](./CODE_OF_CONDUCT.md) - All things regarding UI, UX, Proudct and Architectural design

## Conventions

### Git Commit Messages

We structure our messages like this:

```
<type>(area): <subject>
<BLANK LINE>
<body>
```

Example

```
feat(workers): new awesome feature

Closes #111
```

List of types:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
