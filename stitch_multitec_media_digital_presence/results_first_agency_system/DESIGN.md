---
name: Results-First Agency System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#446083'
  primary: '#001830'
  on-primary: '#ffffff'
  primary-container: '#0b2d4d'
  on-primary-container: '#7995bb'
  inverse-primary: '#acc9f0'
  secondary: '#b6250f'
  on-secondary: '#ffffff'
  secondary-container: '#fd583c'
  on-secondary-container: '#590600'
  tertiary: '#14181a'
  on-tertiary: '#ffffff'
  tertiary-container: '#292c2f'
  on-tertiary-container: '#909396'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#acc9f0'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#2b486a'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#3f0300'
  on-secondary-fixed-variant: '#8f1000'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style

The brand personality is authoritative, performance-driven, and transparent. As a marketing agency, the visual language must communicate trust and tangible growth (ROI). The design style is **Corporate / Modern**, characterized by a rigorous grid, clean structural lines, and high-contrast accents that direct the user's attention toward conversion points and key performance data.

The aesthetic avoids unnecessary flourish, favoring a "data-clear" approach that mirrors the agency's direct and conversational tone. Heavy emphasis is placed on white space to ensure that case studies and performance metrics remain the focal point of the user experience.

## Colors

The palette is anchored by a deep **Midnight Navy** (#0B2D4D), conveying stability and professional expertise. This is paired with an **Energetic Vermilion** (#E8492F) used exclusively for "Growth" indicators, primary calls-to-action, and critical highlights.

The background uses a soft **Cool Slate** (#F5F7FA) to reduce eye strain and provide a more premium feel than pure white, while keeping the interface feeling open and modern. Text follows a strict hierarchy using #1A1A1A for readability and #FFFFFF for high-contrast elements on dark backgrounds.

## Typography

This design system utilizes **Montserrat** for all display and heading roles to project confidence and modernity. Headlines should always be set in Bold (700) or SemiBold (600) to maintain the brand's impactful presence.

**Inter** is the workhorse for body copy and UI labels, chosen for its exceptional legibility in data-heavy contexts. A slightly tighter letter spacing is applied to headlines to ensure they feel cohesive, while labels use increased tracking for better scannability at small sizes.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. We utilize an 8px spacing scale to ensure mathematical consistency across all margins, paddings, and component heights.

- **Desktop (1200px+):** 80px side margins with 24px gutters.
- **Tablet (768px - 1199px):** 40px side margins with 20px gutters.
- **Mobile (Up to 767px):** 16px side margins with 16px gutters.

Content containers are capped at 1280px to maintain optimal line lengths for readability. Section vertical padding should be generous (80px - 120px) to separate different marketing offerings and case study results.

## Elevation & Depth

To maintain a professional and "flat" corporate look, depth is used sparingly. Hierarchy is primarily achieved through **Tonal Layers**.

1.  **Level 0 (Base):** #F5F7FA background.
2.  **Level 1 (Cards/Containers):** #FFFFFF surface with a very soft, diffused shadow (0px 4px 20px rgba(11, 45, 77, 0.05)) or a 1px solid border (#E1E4E8).
3.  **Level 2 (Interaction):** Active cards or hover states use a slightly deeper shadow (0px 8px 30px rgba(11, 45, 77, 0.1)) to indicate clickability.

Avoid heavy gradients or skeuomorphic shadows. The goal is to feel clean and "architectural."

## Shapes

The shape language is structured and approachable. A consistent 8px (0.5rem) corner radius is applied to all primary UI elements, including buttons, input fields, and cards. This moderate rounding strikes a balance between the "seriousness" of sharp corners and the "friendliness" of fully rounded pills.

Large image containers or hero sections may use `rounded-xl` (1.5rem) to soften the visual impact of photography.

## Components

### Buttons
- **Primary:** Dark Blue (#0B2D4D) background, White text, 8px rounded corners. Used for high-intent actions like "Get a Quote."
- **Secondary:** Transparent background, Dark Blue border (2px), Dark Blue text. Used for "Learn More" or secondary navigation.
- **Accent:** Accent Red/Orange (#E8492F) background. Reserved for critical "Call Now" or "Conversion" triggers.

### Cards
Cards must have a White background and 16px to 24px of internal padding. Use a subtle border-bottom in the primary color for "Featured" cards to add brand flair without clutter.

### Input Fields
Inputs use a white background with a 1px border (#D1D5DB). On focus, the border transitions to the Primary Dark Blue with a subtle 2px outer glow.

### Chips & Badges
Small, high-contrast badges are used to display ROI percentages or service categories. Use the Accent Red/Orange for positive growth metrics to make them "pop" against the navy and slate theme.

### Lists
Use custom iconography (growth arrows or checkmarks) in the Accent Red/Orange to reinforce the results-oriented narrative within feature lists.