# BASE FOLD GROUP TEMPLATE

## Tools

- **React**: The core frontend library for building modular, component-based user interfaces.
- **Vite**: Our build tool. Chosen for its esbuild-powered speed, significantly reducing compilation and hot-reload times compared to older bundlers.
- **Tailwind**: Utility-first styling. We explicitly use v3 to maintain our robust tailwind.config.js architecture, allowing seamless brand switching across the portfolio via CSS variables.
- **Lucide React**: A clean, minimalist SVG icon library that perfectly fits the high-end, precise aesthetic of our 1-syllable brands.
- **clsx & tailwind-merge**: Utility functions essential for dynamically constructing CSS classes without style conflicts. This is a foundational requirement for scaling our UI primitives.
- **Framer Motion**: A production-ready motion library for React. Used for subtle, high-performance (60fps) physics-based animations that give the websites a premium, tactile feel.
- **Shadcn/UI**: (Upcoming integration) A collection of beautifully designed, accessible components that we can copy and paste directly into our apps, ensuring absolute ownership of our code.
- **GitHub Actions & Pages**: Our CI/CD pipeline for automated, zero-friction deployments directly from our individual brand repositories.
