# Project Structure Documentation

## Overview
This project has been refactored from a single-file component into a modular, scalable React application following best practices for component organization and maintainability.

## Directory Structure

```
src/
├── components/
│   ├── common/                    # Reusable UI components
│   │   ├── Accordion.jsx          # Expandable accordion component
│   │   ├── BackgroundDecorations.jsx  # Background decorative elements
│   │   ├── DomainItem.jsx         # Individual domain list item
│   │   ├── ReflectionCard.jsx     # Client reflection card
│   │   ├── SectionTitle.jsx       # Reusable section title
│   │   ├── SectionSubtitle.jsx    # Reusable section subtitle
│   │   └── index.js               # Barrel export for common components
│   │
│   ├── Header/
│   │   └── Header.jsx             # Site header with logo and menu
│   │
│   ├── Hero/
│   │   └── Hero.jsx               # Hero section with main title
│   │
│   ├── Domains/
│   │   └── Domains.jsx            # Selected domains section
│   │
│   ├── Disciplines/
│   │   └── Disciplines.jsx        # Our disciplines section with accordions
│   │
│   ├── Clientele/
│   │   ├── Clientele.jsx          # Clientele section wrapper
│   │   └── ClientGallery.jsx      # Client gallery grid
│   │
│   ├── Reflections/
│   │   └── Reflections.jsx        # Client reflections section
│   │
│   ├── Contact/
│   │   └── Contact.jsx            # Contact section with footer
│   │
│   └── index.js                   # Barrel export for all sections
│
├── constants/
│   ├── assets.js                  # Centralized asset URLs
│   └── data.js                    # Static data (domains, disciplines, etc.)
│
├── FlamingoLife.jsx               # Main page component
├── FlamingoLife.css               # Global styles
└── main.jsx                       # App entry point
```

## Component Architecture

### Section Components
Each major section of the page has its own component:
- **Header**: Fixed header with logo and menu button
- **Hero**: Main hero section with large title and image
- **Domains**: List of selected business domains
- **Disciplines**: Interactive accordion list of services
- **Clientele**: Client gallery showcase
- **Reflections**: Client testimonials grid
- **Contact**: Contact section with footer

### Common/Reusable Components
Shared UI elements extracted for reusability:
- **Accordion**: Expandable/collapsible content
- **BackgroundDecorations**: Decorative background elements
- **DomainItem**: Individual domain list item
- **ReflectionCard**: Testimonial card
- **SectionTitle**: Consistent section headings
- **SectionSubtitle**: Consistent section subheadings

## Data Management

### constants/assets.js
Centralized management of all image URLs from Figma:
- Gallery images
- Hero image
- Header overlay
- Background decorations
- Icons

### constants/data.js
Static content data:
- DOMAINS: List of business domains
- DISCIPLINES: List of service disciplines
- REFLECTIONS_DATA: Client testimonial data

## Import Strategy

### Barrel Exports
The project uses barrel exports (index.js files) for cleaner imports:

```javascript
// Instead of:
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

// Use:
import { Header, Hero } from './components';
```

### Component Imports
Each component imports only what it needs:
- Common components from `../common`
- Data from `../../constants/data`
- Assets from `../../constants/assets`

## Styling

### CSS Organization
- **FlamingoLife.css**: Contains all styles for the application
- Uses BEM-like naming conventions
- Responsive design with media queries
- Custom fonts: Breadley Sans, Snell Roundhand

### Style Classes
- `.flamingo-life`: Main container
- `.header`, `.hero`, `.selected-domains`, etc.: Section containers
- `.section-title`, `.section-subtitle`: Reusable text styles
- Component-specific classes follow the pattern: `.component-name-element`

## Best Practices Implemented

1. **Component Separation**: Each section is isolated in its own component
2. **Reusability**: Common UI patterns extracted into shared components
3. **Data Centralization**: Static data and assets managed in constants
4. **Clean Imports**: Barrel exports for better developer experience
5. **Single Responsibility**: Each component has one clear purpose
6. **Scalability**: Easy to add new sections or modify existing ones

## Adding New Components

### To add a new section:
1. Create a new folder in `src/components/`
2. Create the component file (e.g., `NewSection.jsx`)
3. Add the export to `src/components/index.js`
4. Import and use in `FlamingoLife.jsx`

### To add a new common component:
1. Create the component in `src/components/common/`
2. Add the export to `src/components/common/index.js`
3. Import where needed using `import { ComponentName } from '../common'`

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Future Enhancements

Potential improvements for the codebase:
- Add TypeScript for type safety
- Implement lazy loading for sections
- Add unit tests for components
- Create Storybook for component documentation
- Add animation libraries (Framer Motion, GSAP)
- Implement proper image optimization
- Add accessibility improvements (ARIA labels, keyboard navigation)
- Create a design system with component variants
