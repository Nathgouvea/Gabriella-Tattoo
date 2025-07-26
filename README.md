# Gabriella Tattoo Website

A modern, responsive website for Gabriella Tattoo, showcasing fine-line tattoo artistry with a beautiful, minimalist design.

## Features

- 🌍 Multi-language support (English, Portuguese, Spanish)
- 📱 Fully responsive design
- 🎨 Beautiful portfolio gallery
- 💫 Smooth animations and transitions
- 🎯 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Shadcn/ui** - UI components

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Gabriella-Tattoo
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── figma/          # Figma-specific components
│   ├── Home.tsx        # Home page component
│   ├── Gallery.tsx     # Gallery page component
│   └── translations.ts # Multi-language translations
├── assets/             # Images and static assets
├── styles/             # Global styles
├── App.tsx             # Main app component
└── main.tsx            # Application entry point
```

## Customization

### Adding New Images

1. Place your images in the `src/assets/` directory
2. Update the import statements in the components to reference your new images
3. The `figma:asset/` alias is configured to point to `src/assets/`

### Adding New Languages

1. Update the `Language` type in the components
2. Add translations to `src/components/translations.ts`
3. Update the language switcher buttons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

#### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at: `https://[your-username].github.io/Gabriella-Tattoo/`

#### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository is public (or you have GitHub Pro for private repos)

### Local Production Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Optimization

- All assets are optimized during build
- CSS is minified and purged
- JavaScript is bundled and minified
- Images are optimized for web

## License

This project is private and proprietary.
