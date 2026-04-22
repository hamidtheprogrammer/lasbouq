# Performance Overview
Lasbouq is designed as a performance-first system using static-rendering strategies.

## 1. Principles
- Static-first delivery (SSG/ISR)
- Minimal js on critical routes
- Priority based delivery of assets (critical for lcp)
- Graceful degradation on failures (UI fallbacks)

## 2. Rendering strategies
| Page | Rendering | Impact |
|------|-----------|--------|
| Home | SSG       | Instance response from cdn |
| Spaces (paginated list of workspaces) | ISR     | Cached responses with periodic revalidation |
| Space detail | ISR | cached responses with periodic validation |
| Membership page | SSG + CSR | Form rendered on client for interactivity while other parts of page is statically generated |

The above approach ensures:
- fast initial load speed
- less load on origin server
- global delivery reach through cdn

## 3.Web vitals
### Performance Targets

| Metric | Target |
|--------|--------|
| LCP    | < 2.5s |
| CLS    | < 0.1  |
| INP    | < 200ms |

### Current Measurements with web vitals on google search console

#### homepage
| Device  | LCP | CLS | INP | Status |
|---------|-----|-----|-----|--------|
| Desktop | ~1.2s | 0 | <100ms | ✅ |
| Mobile  | ~1.5s | 0 | <150ms | ✅ |

#### spaces page
| Device  | LCP | CLS | INP | Status |
|---------|-----|-----|-----|--------|
| Desktop | <1.0s | 0 | <100ms | ✅ |
| Mobile  | ~3.3s | 0.003 | <150ms | 🟡 |

#### spaces detail page
| Device  | LCP | CLS | INP | Status |
|---------|-----|-----|-----|--------|
| Desktop | <1.0s | 0 | <100ms | ✅ |
| Mobile  | ~2.8s | 0.004 | <150ms | 🟡 |

## 4. Measurement and observability
- RUM are collected to observer real world performance insight
- Google web vitals are used to record baseline performance metric
- Chrome recorder for measuring asset delivery and code execution sequence to ensure accurate priority allocation

## 5. Recent changes to performance optimization

| Change                                                   | Impact | Tradeoffs |
|----------------------------------------------------------|--------|-----------|
| Reduced hero image size (~20kb),reduced font weight variety |mobile HOMEPAGE LCP improved from ~2.7s → ~1.5s | less image quality
| Forced nextjs static rendering on SPACES PAGE due to dynamic rendering behavior | 🟡  | less clean architecture


