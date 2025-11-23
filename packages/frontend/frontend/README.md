# Frontend - AutoHub Car Showcase

Modern React + TypeScript web application showcasing cars with a beautiful UI.

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Navbar.tsx    # Navigation bar with mobile menu
│   │   ├── Carousel.tsx  # Image carousel/slider
│   │   └── PhotoCard.tsx # Car photo card component
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # React entry point
│   ├── index.css       # Global styles with Tailwind CSS
│   └── ...
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md
```

## Features

- **Responsive Navbar** - Desktop and mobile-friendly navigation
- **Image Carousel** - Auto-playing carousel with manual controls
- **Photo Cards** - Elegant car cards with hover effects and call-to-action buttons
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest React features

## Getting Started

### Prerequisites
- Node.js v18+ and npm

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Components

### Navbar
Responsive navigation bar with:
- Logo/branding
- Desktop menu links
- Mobile hamburger menu
- Call-to-action button

### Carousel
Image carousel featuring:
- Auto-play functionality
- Manual navigation arrows
- Dot indicators
- Text overlay on images

### PhotoCard
Reusable card component with:
- Product image with hover zoom effect
- Title and description
- Category badge
- Learn More button

## Styling

The project uses Tailwind CSS v3 for styling. Global styles are in `src/index.css`.

## Component Examples

### Using PhotoCard
```tsx
<PhotoCard
  image="url-to-image"
  title="Car Title"
  description="Car description"
  category="Sports"
  onLearnMore={() => console.log('Learn more')}
/>
```

### Using Carousel
```tsx
<Carousel
  autoPlay={true}
  interval={5000}
  images={[...]}
/>
```

## Development

Components are located in `src/components/` and follow the naming convention:
- `ComponentName.tsx` - Functional component with TypeScript
- `ComponentName.test.tsx` - Unit tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project
