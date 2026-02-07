# Unused Dependencies - Safe to Remove

## Animation & Effects (Unused)

```bash
bun remove aos @tsparticles/engine @tsparticles/react @tsparticles/slim motion @react-three/fiber three simplex-noise
```

## Form Handling (Unused)

```bash
bun remove react-hook-form @hookform/resolvers zod
```

## UI Components (Unused - Radix UI deps with no components created)

```bash
bun remove @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

## Utilities (Unused)

```bash
bun remove dotted-map mini-svg-data-uri date-fns cmdk input-otp react-day-picker react-resizable-panels react-syntax-highlighter @types/react-syntax-highlighter recharts embla-carousel-react sonner vaul next-themes @tabler/icons-react radix-ui
```

## Run All At Once

```bash
bun remove aos @tsparticles/engine @tsparticles/react @tsparticles/slim motion @react-three/fiber three simplex-noise react-hook-form @hookform/resolvers zod @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip dotted-map mini-svg-data-uri date-fns cmdk input-otp react-day-picker react-resizable-panels react-syntax-highlighter @types/react-syntax-highlighter recharts embla-carousel-react sonner vaul next-themes @tabler/icons-react radix-ui
```

## Estimated Savings

- **node_modules size:** ~15-20 MB reduction
- **Install time:** ~30-40% faster
- **Bundle size:** No change (these weren't imported)

## Safe to Keep

These are actually used in the codebase:

- gsap (animation library - heavily used)
- lucide-react (icons)
- @radix-ui/react-accordion (FAQ component)
- @radix-ui/react-slot (Button component)
- class-variance-authority (button variants)
- clsx, tailwind-merge (styling utilities)
