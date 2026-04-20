# Performance Overview
Lasbouq is designed as a performance-first system using static-rendering strategies.

## Principles
- Static-first delivery (SSG/ISR)
- Minimal js on critical routes
- Priority based delivery of assets (critical for lcp)
- Graceful degradation on failures (UI fallbacks)

## Web vitals
### Performance Targets

| Metric | Target |
|--------|--------|
| LCP    | < 2.5s |
| CLS    | < 0.1  |
| INP    | < 200ms |

### Current Measurements

| Device  | LCP | CLS | INP | Status |
|---------|-----|-----|-----|--------|
| Desktop | ~1.2s | 0 | <100ms | ✅ |
| Mobile  | ~2.7s | 0 | <150ms | 🟡 (font-related) |
