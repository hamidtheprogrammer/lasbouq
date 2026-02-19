# LASBOUQ SPACES

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

## Project Phases
### Phase 1 (current)
- Static pages only
- No filtering
- No backend

### Phase 2
- Client-side filtering
- Skeleton loading
- Performance tuning

### Phase 3
- Thin API
- Observability
- Scaling content

## Implemented features 
### Homepage
- Hero section
- About section
- Locations section
- Benefits section

## Planned features
- homepage
- workspaces catalogue page
- workspace detail page
- application page

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