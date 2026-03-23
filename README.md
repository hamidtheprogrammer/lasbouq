# LASBOUQ SPACES

![Last Commit](https://img.shields.io/github/last-commit/hamidtheprogrammer/LASBOUQ)
![Status](https://img.shields.io/badge/status-work%20in%20progress-yellow)

## Overview
A platform for an agency that provides premium workspaces for teams across multiple locations. The platform relies heavily on visual appeal and frequent content updates. It uses static site generation for core pages, ISR for refreshment, and Server-Side Rendering only when justified to optimize performance as content scales.

## Business Constraints
- Content-heavy directory
- SEO critical
- Must load well on slow networks
- Low backend dependency
- Safe to update content frequently

more @ [Product requirement](docs/product-requirement.md)

## Rendering Strategy
```
Page	        Strategy
Home	        SSG
Locations	    SSG
City pages	    ISR
Space details	ISR
Filters	        Client-side
```

## Architecture Overview
See 👉 [System Architecture](docs/system-architecture.md)

## Implemented features

### Homepage (SSG)
- Hero section
- About section
- Locations section
- Benefits section
- Membership CTA
- Footer section

### Spaces (ISR)
- Static Filter
- Static product grid

### Space detail(ISR)
- Detail on workspace

### API
- added revalidate api for content update when cms changes


## Planned features
- Implement sanity cms (in progress)
- application page
- About page

## Getting started

### Tech stack
- React 19.2.3
- Next 16.1.4

### Prequisites
- node.js 18.*
- npm

### Installation
```bash
# Clone the TEAMHUB repository from GitHub to your local machine
git clone https://github.com/hamidtheprogrammer/lasbouq.git

# change to client directory
cd client

# install all dependencies
npm install

# start app
npm run dev
```

## Tests

[Functional tests](docs/tests/functional/homepage-test.md)