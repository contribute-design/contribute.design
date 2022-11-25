<div align="center">
  <a href="https://contribute.design"><img src="https://i.imgur.com/ZoPpMsS.png" /></a>
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

## Table of contents

- [Table of contents](#table-of-contents)
- [🌟 contribute.design](#-contributedesign)
- [🚀 Quick start](#-quick-start)
  - [For Open Source projects](#for-open-source-projects)
  - [For designers](#for-designers)
- [🌲 contribute.design projects](#-contributedesign-projects)
  - [🙌 .design/](#-design)
  - [🎨 Frontend](#-frontend)
  - [🏗 Backend](#-backend)
  - [🎈 Scrapers](#-scrapers)
  - [💅 Design guideline examples](#-design-guideline-examples)
- [🚢 Contributing and running contribute.design locally](#-contributing-and-running-contributedesign-locally)

## 🌟 contribute.design

> Our goal is to foster and enable design contributions and collaboration with Open Source projects.

We care about:

- **Collaboration**
- **Transparency**
- **Open-source**

## 🚀 Quick start

### For Open Source projects

> If you're an Open Source project looking for designers – we can help you to get exposure and ultimately designers contributing towards your project.

1. Add your `.design` folder with some guidelines to your repository. [See examples](https://github.com/contribute-design/examples)
2. Add a `contribute.design badge` to your README.md

```md
[![contribute.design](https://contribute.design/api/shield/<GH_USER>/<GH_PROJECT>)](https://contribute.design/<GH_USER>/<GH_PROJECT>)
```

3. Your project will automatically be added [to our database](https://contribute.design/projects) and get exposure to hundreds of talented designers.

### For designers

> If you're a designer looking for Open Source projects to contribute to – we can help you get infront of the most exciting projects and impact millions of users.

1. Browse through the projects in our [database](https://contribute.design/projects)
2. Read through their design guidelines and start contributing!

## 🌲 contribute.design projects

It might look simple at a glance but our setup contains a lot of different services and parts.
If you want to learn more about the technical details – check our [contribution guidelines](./CONTRIBUTING.md).

### 🙌 .design/

- [.design/](.design/) - provides you with some basic guidelines of how we intend to run our design process and relevant information on all the things we design

### 🎨 Frontend

The frontend is part of the monorepo and using styletron + a custom baseweb wrapper - [Read more](./CONTRIBUTING.md)

### 🏗 Backend

The backend is part of the monorepo and accessing it's data from Cloudflare KV - [Read more](./CONTRIBUTING.md)

### 🎈 Scrapers

We're using cloudflare workers to scrape repos and store them in KV - [Read more](./CONTRIBUTING.md)

### 💅 Design guideline examples

We have a dedicated repository with some [sample design guidelines](https://github.com/contribute-design/examples) for you to integrate.

## 🚢 Contributing and running contribute.design locally

Check our [design guidelines](./.design) and [contribution guidelines](./CONTRIBUTING.md)
