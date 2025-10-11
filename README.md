# Cakrasoft SaaS Documentation

This is the comprehensive documentation website for all Cakrasoft SaaS products and services. The site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator that provides an excellent developer and user experience for technical documentation.

## About

This documentation hub covers all Cakrasoft cloud-based solutions, including:
- Property Management System (PMS)
- Channel Manager
- Booking Engine
- Point of Sale (POS)
- Accounting System
- Banquet Management
- Inventory & Asset Management
- And other integrated hospitality solutions

## Getting Started

### Prerequisites
- Node.js (version 18.0 or above)
- Yarn or npm package manager

### Installation

```bash
yarn install
```
or
```bash
npm install
```

### Local Development

```bash
yarn start
```
or
```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server, making it easy to preview documentation changes in real-time.

### Build

```bash
yarn build
```
or
```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

We welcome contributions to improve our documentation! Please:

1. Fork this repository
2. Create a feature branch for your changes
3. Make your improvements to the documentation
4. Submit a pull request with a clear description of your changes

## Documentation Structure

- `/docs` - Main documentation content
- `/blog` - Blog posts and announcements  
- `/src` - Custom React components and pages
- `/static` - Static assets (images, files, etc.)

## Support

For questions about Cakrasoft products or services, please visit our [official website](https://cakrasoft.com) or contact our support team.

---

**© 2024 PT. Cakra Media Data - All rights reserved.**
