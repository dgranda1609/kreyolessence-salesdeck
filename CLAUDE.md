# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive web-based sales pitch deck for Kreyol Essence built with React.js and Tailwind CSS. The application features 15 slides showcasing the company's natural beauty products and authentic Haitian heritage through smooth animations and responsive design.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture & Structure

### Core Technologies
- **React.js 18.2.0** with hooks and functional components
- **Vite 4.3.2** for fast development and build tooling
- **Tailwind CSS 3.3.2** with custom design system
- **Framer Motion 10.18.0** for animations and page transitions
- **Lucide React 0.263.1** for consistent iconography
- **React Router DOM 6.8.1** for potential routing needs

### Component Architecture
- **App.jsx**: Main application component managing slide state, keyboard navigation, and page transitions
- **components/Sidebar.jsx**: Interactive collapsible sidebar with progress tracking and direct slide navigation
- **slides/**: 15 individual slide components (Slide01.jsx through Slide15.jsx)
- **slides/SlideTemplate.jsx**: Reusable template for creating new slides

### State Management
- Uses React hooks (useState, useEffect) for local state management
- Main state includes: currentSlide, isCollapsed, direction (for animations)
- Keyboard navigation handled through useEffect with event listeners

### Animation System
- Framer Motion handles all page transitions with directional sliding
- Custom slide variants for enter/center/exit states
- Spring-based transitions for smooth user experience

## Custom Design System

### Brand Colors (Tailwind Config)
- **primary**: Green tones (Kreyol Essence brand color)
- **secondary**: Red accents (Haitian flag inspiration)
- **accent**: Blue elements for trust and professionalism
- **earth**: Natural browns and beiges for authenticity
- **neutral**: Clean grays for readability

### Typography
- **font-display**: Playfair Display for headers and titles
- **font-serif**: Merriweather for elegant text
- **font-script**: Dancing Script for cultural elements
- **font-sans**: Inter (default) for clean, readable body text

### Custom Utilities
- Custom shadows: `shadow-soft`, `shadow-strong`, `shadow-inner-soft`
- Custom animations: `animate-fade-in`, `animate-slide-in`, `animate-slide-up`
- Extended spacing: `space-18`, `space-88`, `space-128`

## Navigation System

### Keyboard Navigation
- **Arrow Keys**: Left/Right for previous/next slide
- **Space Bar**: Advance to next slide
- **Home/End**: Jump to first/last slide
- All keyboard events handled in App.jsx useEffect

### Interactive Elements
- Sidebar with clickable slide titles for direct navigation
- Floating navigation controls in bottom-right corner
- Progress indicator showing current slide position
- Collapsible sidebar functionality

## Slide Development

### Adding New Slides
1. Create new component in `src/slides/` following naming convention (Slide##.jsx)
2. Import and add to slides array in App.jsx
3. Update sidebar navigation titles in Sidebar.jsx
4. Use SlideTemplate.jsx as starting point for consistent structure

### Slide Structure Pattern
```jsx
// Standard slide component structure
const Slide##= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-earth-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        {/* Slide content */}
      </div>
    </div>
  );
};
```

## Responsive Design

- Mobile-first approach with collapsible sidebar
- Breakpoints handled through Tailwind responsive utilities
- Sidebar transforms to icon-only on mobile
- Touch-friendly navigation controls

## Development Guidelines

### Component Conventions
- Use functional components with hooks
- Import Framer Motion for animations when needed
- Follow existing className patterns for consistency
- Use Lucide React for all icons

### Styling Guidelines
- Leverage custom Tailwind utilities and brand colors
- Maintain consistent spacing using defined scale
- Use gradient backgrounds: `bg-gradient-to-br from-white to-earth-50`
- Apply custom shadows for depth and elevation

### Content Structure
- Slides 1-3 have complete content implementation
- Slides 4-15 use template structure ready for content population
- Follow established visual hierarchy and typography patterns