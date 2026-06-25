# Final Launch Readiness & Optimization Plan

Comprehensive audit and upgrade of the Lovet’s Locs and Braids website to ensure production readiness, SEO dominance, accessibility compliance, and conversion optimization.

## Scope Summary
- **Audit & Fix:** Full sweep for broken routes, duplicate metadata, and thin content.
- **Branding:** Complete removal of "Dala" references, replaced with "Lovet’s Locs and Braids".
- **SEO & Indexability:** Robots.txt, XML Sitemap, unique titles/meta, canonical tags, and comprehensive Structured Data (JSON-LD).
- **Performance:** 95+ Lighthouse scores via WebP/AVIF, lazy loading, and code splitting.
- **Accessibility:** WCAG 2.1 AA compliance (ARIA, contrast, keyboard nav).
- **Local SEO:** Content expansion (800+ words per service) targeting Boston/West Roxbury markets.
- **Conversion:** Sticky CTAs, functional booking/e-commerce, and security hardening (CSP, headers).

## Auth & RLS model
**Auth in scope:** no
**Model:** no_auth_public_read
**RLS strategy:** Public read-only for services/products. No user accounts required for current phase.
**Frontend implication:** Ensure forms handle errors gracefully; booking/contact are the primary write vectors (via email/external integration).

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** not_applicable (App is currently static/client-side driven)

## Affected Areas
- **Global:** `index.html`, `robots.txt`, `sitemap.xml`, `package.json`, `vite.config.ts`
- **Frontend Components:** `src/components/common/SEO.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/components/common/FloatingButtons.tsx`
- **Pages:** All files in `src/pages/` (Home, About, Services, Products, Gallery, etc.)
- **Security:** Security headers in `index.html` or vite config.

## Phases

### Phase 1: Branding & Cleanup (quick_fix_engineer)
- Remove all "Dala", "Gebeya", and "starter template" references from `index.html`, `package.json`, and footer.
- Replace with Lovet's Locs and Braids branding.
- Implement Phase 3 (Robots.txt) and Phase 24 (Custom 404 page).

### Phase 2: SEO & Structured Data (frontend_engineer)
- **Metadata:** Implement Phase 5 (Titles), Phase 6 (Descriptions), and Phase 7 (Canonicals) in `src/components/common/SEO.tsx` or per page.
- **Sitemap:** Generate `public/sitemap.xml` (Phase 4).
- **Schema:** Implement Phase 8 (HairSalon), Phase 9 (FAQ), and Phase 22 (Product) JSON-LD scripts (Phase 8, 9, 10).
- **Social:** Implement Phase 11 (Open Graph) and Phase 12 (GSC Placeholder).

### Phase 3: Content Expansion & Local SEO (frontend_engineer)
- **Service Pages:** Expand content in `src/pages/Services.tsx` and individual service sections to 800+ words (Phase 17, 18).
- **Image SEO:** Audit and update all `<img>` tags with descriptive alt text, width/height, and lazy loading (Phase 19).
- **FAQ:** Add visible FAQ section to Home or Services page (Phase 9).

### Phase 4: Performance & Accessibility (frontend_engineer)
- **Optimization:** Implement Phase 14 & 15 (WebP/AVIF, font-display, code splitting).
- **Accessibility:** Audit and fix contrast, ARIA labels, and keyboard focus states (Phase 16).
- **Pre-rendering:** Configure vite-plugin-ssr or similar if feasible, or ensure SEO component is robust.

### Phase 5: Conversion & Security (frontend_engineer)
- **CTAs:** Add sticky mobile buttons (Call, Book, WhatsApp) (Phase 20).
- **Booking/E-comm:** Final verification of booking and product checkout flows (Phase 21, 22).
- **Security:** Add security meta tags/headers for CSP and XSS protection (Phase 23).

### Phase 6: Final QA (quick_fix_engineer)
- Resolve "Nibbler" issues: thin content, broken links, missing OG tags.
- Verify Lighthouse scores and mobile responsiveness.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. quick_fix_engineer — Branding cleanup and basic SEO files.
2. frontend_engineer — Advanced SEO, Content, Performance, and Security implementation.
3. quick_fix_engineer — Final QA and minor adjustments.

**Per-agent instructions:**

### 1. quick_fix_engineer (Cleanup & Basic Config)
- **Phases:** Phase 2, 3, 24
- **Scope:** 
  - Search and replace all "Dala", "Gebeya", "mydala" with "Lovet's Locs and Braids".
  - Update `index.html` meta tags.
  - Create `public/robots.txt` allowing all and pointing to sitemap.
  - Create `src/pages/NotFound.tsx` and route it in `App.tsx`.
- **Files:** `index.html`, `package.json`, `src/App.tsx`, `public/robots.txt`, `src/components/layout/Footer.tsx`

### 2. frontend_engineer (The "Heavy Lift")
- **Phases:** Phase 4-23, 25
- **Scope:** 
  - **SEO:** Update `SEO.tsx` to handle dynamic titles, meta, and JSON-LD. Generate `public/sitemap.xml`.
  - **Content:** Expand text in `Services.tsx`, `About.tsx`, and `Home.tsx` to meet word count requirements. Use the keywords provided in the prompt.
  - **Performance:** Ensure images are WebP/AVIF (if available in assets). Add `loading="lazy"` to all non-hero images.
  - **Accessibility:** Add ARIA labels to all buttons/links. Check color contrast on "Dark Blue + Purple" theme.
  - **Conversion:** Add a sticky bottom bar for mobile with "Call", "WhatsApp", and "Book" buttons.
  - **Security:** Add security meta tags/headers for CSP and XSS protection (Phase 23).
- **Files:** `src/components/common/SEO.tsx`, `src/pages/*.tsx`, `src/components/layout/Navbar.tsx`, `src/components/common/FloatingButtons.tsx`

### 3. quick_fix_engineer (Final QA)
- **Phases:** Phase 26, 27
- **Scope:** Check for any remaining Dala references. Run a final check on all links and console errors.
- **Files:** All project files.

**Do not dispatch:** supabase_engineer (No DB migrations or backend logic changes requested beyond static SEO/Frontend optimization).
