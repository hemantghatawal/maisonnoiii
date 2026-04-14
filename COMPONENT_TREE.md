# Component Tree

## Visual Component Hierarchy

```
FlamingoLife (Main Container)
│
├── Header
│   ├── Logo (maison no. 3)
│   └── MenuButton
│
├── BackgroundDecorations
│   ├── Decoration 1 (La Maison SVG)
│   └── Decoration 2 (Group 3)
│
├── Hero
│   ├── HeroImage
│   ├── HeroTitle ("LA MAISON")
│   └── HeroSubtitle
│
├── Domains (Selected Domains)
│   ├── SectionTitle
│   ├── SectionSubtitle
│   └── DomainsList
│       ├── DomainItem (Gems & Jewelry)
│       ├── DomainItem (Fashion)
│       ├── DomainItem (Lifestyle)
│       ├── DomainItem (Real Estate...)
│       ├── DomainItem (Automotive)
│       ├── DomainItem (Food & Beverage)
│       ├── DomainItem (FMCG)
│       └── DomainItem (Events)
│
├── Disciplines (Our Disciplines)
│   ├── DisciplinesBackground
│   ├── DisciplinesTitle (Sticky)
│   └── DisciplinesList
│       ├── Accordion (branding)
│       ├── Accordion (technology)
│       ├── Accordion (marketing)
│       ├── Accordion (creative suite)
│       ├── Accordion (public relations)
│       ├── Accordion (event & experiences)
│       └── Accordion (consulting)
│
├── Clientele
│   ├── SectionTitle
│   ├── ClienteleSubtitle
│   └── ClientGallery
│       ├── GalleryItem (8 images in grid)
│       └── ...
│
├── Reflections (Client Reflections)
│   ├── SectionTitle
│   ├── ReflectionsSubtitle
│   └── ReflectionsGrid
│       ├── ReflectionCard
│       ├── ReflectionCard
│       ├── ReflectionCard
│       ├── ReflectionCard
│       ├── ReflectionCard
│       └── ReflectionCard
│
└── Contact
    ├── ContactTitle
    ├── ContactSubtitle
    └── Footer
        ├── FooterLeft ("back on top")
        ├── FooterCenter (Copyright)
        └── FooterRight ("Follow Us")
```

## Component Relationships

### Parent-Child Relationships

**FlamingoLife** (Root)
- Direct children: 8 major sections
- Manages overall page layout
- No state management (delegated to children)

**Disciplines**
- Manages accordion state
- Controls which accordion is open
- Uses `useState` hook

**Clientele**
- Wrapper component
- Delegates gallery rendering to ClientGallery

**ClientGallery**
- Renders 8 gallery items
- Manages positioning via inline styles

**Reflections**
- Maps over REFLECTIONS_DATA
- Renders 6 ReflectionCard components

### Reusable Component Usage

**SectionTitle** used in:
- Domains
- Clientele
- Reflections

**SectionSubtitle** used in:
- Domains

**Accordion** used in:
- Disciplines (7 instances)

**DomainItem** used in:
- Domains (8 instances)

**ReflectionCard** used in:
- Reflections (6 instances)

## Data Flow

```
constants/data.js
    ├──> DOMAINS ──────────> Domains Component
    ├──> DISCIPLINES ──────> Disciplines Component
    └──> REFLECTIONS_DATA ─> Reflections Component

constants/assets.js
    ├──> ASSETS.header* ───> Header Component
    ├──> ASSETS.hero ──────> Hero Component
    ├──> ASSETS.gallery.* ─> ClientGallery Component
    ├──> ASSETS.disciplines*> Disciplines Component
    ├──> ASSETS.laMaison* ─> BackgroundDecorations
    └──> ASSETS.arrowUp ───> Accordion Component
```

## State Management

### Local State
- **Disciplines Component**: `openAccordion` state
  - Tracks which accordion is currently open
  - Type: `number | null`
  - Updates via `setOpenAccordion`

### Props Flow
- **Accordion**: Receives `title`, `isOpen`, `onToggle`
- **DomainItem**: Receives `title`
- **ReflectionCard**: Receives `name`, `text`
- **SectionTitle**: Receives `children`, `className`
- **SectionSubtitle**: Receives `children`, `className`, `cursive`

## Component Responsibilities

| Component | Responsibility | State | Props |
|-----------|---------------|-------|-------|
| FlamingoLife | Page layout orchestration | None | None |
| Header | Site branding & navigation | None | None |
| Hero | Main hero section | None | None |
| Domains | Display domain list | None | None |
| Disciplines | Interactive service list | Yes | None |
| Clientele | Client showcase wrapper | None | None |
| ClientGallery | Gallery grid rendering | None | None |
| Reflections | Testimonials display | None | None |
| Contact | Contact info & footer | None | None |
| Accordion | Expandable content | None | Yes |
| DomainItem | Domain list item | None | Yes |
| ReflectionCard | Testimonial card | None | Yes |
| SectionTitle | Section heading | None | Yes |
| SectionSubtitle | Section subheading | None | Yes |
| BackgroundDecorations | Decorative elements | None | None |
