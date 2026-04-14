# Developer Quick Reference Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Common Tasks

### Adding a New Section

1. **Create component folder and file:**
```bash
mkdir src/components/NewSection
touch src/components/NewSection/NewSection.jsx
```

2. **Create the component:**
```jsx
// src/components/NewSection/NewSection.jsx
export default function NewSection() {
  return (
    <section className="new-section">
      <h2>New Section</h2>
    </section>
  );
}
```

3. **Export from index:**
```javascript
// src/components/index.js
export { default as NewSection } from './NewSection/NewSection';
```

4. **Add to main component:**
```jsx
// src/FlamingoLife.jsx
import { NewSection } from './components';

// In JSX:
<NewSection />
```

5. **Add styles:**
```css
/* src/FlamingoLife.css */
.new-section {
  padding: 120px 80px;
  background: #000;
}
```

### Adding a New Common Component

1. **Create the component:**
```jsx
// src/components/common/Button.jsx
export default function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

2. **Export from common index:**
```javascript
// src/components/common/index.js
export { default as Button } from './Button';
```

3. **Use in any component:**
```jsx
import { Button } from '../common';

<Button variant="secondary" onClick={handleClick}>
  Click Me
</Button>
```

### Adding New Data

1. **Add to constants:**
```javascript
// src/constants/data.js
export const NEW_DATA = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];
```

2. **Import and use:**
```jsx
import { NEW_DATA } from '../../constants/data';

{NEW_DATA.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

### Adding New Assets

1. **Add to assets constants:**
```javascript
// src/constants/assets.js
export const ASSETS = {
  // ... existing assets
  newImage: "https://example.com/image.jpg"
};
```

2. **Use in component:**
```jsx
import { ASSETS } from '../../constants/assets';

<img src={ASSETS.newImage} alt="Description" />
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `Header.jsx`, `ClientGallery.jsx`)
- **Constants**: camelCase files, UPPER_CASE exports (e.g., `data.js` → `DOMAINS`)
- **Styles**: kebab-case classes (e.g., `.section-title`, `.hero-image`)

## Import Patterns

### Preferred (using barrel exports):
```jsx
import { Header, Hero, Domains } from './components';
import { SectionTitle, Accordion } from '../common';
```

### Avoid (direct imports):
```jsx
import Header from './components/Header/Header';
import SectionTitle from '../common/SectionTitle';
```

## Component Patterns

### Basic Section Component
```jsx
import SectionTitle from '../common/SectionTitle';

export default function MySection() {
  return (
    <section className="my-section">
      <SectionTitle>My Section</SectionTitle>
      <p className="section-subtitle">Description here</p>
      {/* Content */}
    </section>
  );
}
```

### Component with State
```jsx
import { useState } from 'react';

export default function InteractiveSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="interactive-section">
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen && <div>Content</div>}
    </section>
  );
}
```

### Component with Props
```jsx
export default function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### Component with Data Mapping
```jsx
import { DATA_ARRAY } from '../../constants/data';
import Item from '../common/Item';

export default function List() {
  return (
    <div className="list">
      {DATA_ARRAY.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}
```

## Styling Guidelines

### Section Styles
```css
.section-name {
  padding: 120px 80px;
  background: #000;
  position: relative;
}

.section-name .section-title {
  margin-bottom: 30px;
}
```

### Responsive Patterns
```css
/* Desktop first */
.component {
  padding: 120px 80px;
}

/* Tablet */
@media (max-width: 1024px) {
  .component {
    padding: 80px 40px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .component {
    padding: 60px 20px;
  }
}
```

## Common Pitfalls

### ❌ Don't:
```jsx
// Hardcoded data in component
const domains = ['Domain 1', 'Domain 2'];

// Inline styles everywhere
<div style={{ padding: '20px', background: '#000' }}>

// Deep imports
import Header from './components/Header/Header';
```

### ✅ Do:
```jsx
// Data in constants
import { DOMAINS } from '../../constants/data';

// CSS classes
<div className="section-container">

// Barrel exports
import { Header } from './components';
```

## Testing Checklist

Before committing:
- [ ] No console errors
- [ ] All imports resolve correctly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] No unused imports
- [ ] Component follows naming conventions
- [ ] Styles are in FlamingoLife.css
- [ ] Data is in constants (if applicable)
- [ ] Component is exported from index.js

## Debugging Tips

### Component not rendering?
1. Check import path
2. Verify export in index.js
3. Check for typos in component name
4. Ensure component is added to parent

### Styles not applying?
1. Check class name spelling
2. Verify CSS is in FlamingoLife.css
3. Check CSS specificity
4. Inspect element in browser DevTools

### Data not showing?
1. Verify import from constants
2. Check data structure
3. Ensure .map() has correct key prop
4. Console.log the data to debug

## Performance Tips

- Use `key` prop in lists (preferably unique IDs, not indexes)
- Avoid inline functions in render (use useCallback if needed)
- Lazy load images for better performance
- Consider code splitting for large sections
- Memoize expensive computations with useMemo

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Buttons have descriptive text or aria-labels
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Semantic HTML elements used

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "feat: add new section component"

# Push and create PR
git push origin feature/new-section
```

## Useful Commands

```bash
# Find all components
find src/components -name "*.jsx"

# Search for usage of a component
grep -r "ComponentName" src/

# Check for unused imports (requires eslint)
npm run lint

# Format code (if prettier is configured)
npm run format
```
