# Brevita Café - Premium Coffee Website

A modern, beautiful café website built with Next.js, featuring glassmorphism design, dark mode support, and responsive layouts.

## Features

✨ **Modern Design**
- Glassmorphism effects with backdrop blur and semi-transparent cards
- Premium color palette (Matte Black, Charcoal, White, Gold, Neon Blue)
- Smooth animations and transitions
- Fully responsive for all devices

🌙 **Dark Mode**
- Built-in dark mode toggle
- Persistent theme preference
- Beautiful color transitions

☕ **Complete Pages**
- **Home**: Hero section with featured items
- **Menu**: Filterable menu with categories (Espresso, Milk Drinks, Hot, Cold)
- **About**: Company story, values, team, and milestones
- **Contact**: Contact form, location, hours, and embedded Google Maps

🎨 **Reusable Components**
- GlassCard: Glassmorphic card component
- GlassButton: Flexible button with multiple variants
- Navbar: Responsive navigation with dark mode toggle
- Toast Notifications: Beautiful toast messages for user feedback
- Loading Skeletons: Animated skeleton screens

📱 **Accessibility**
- Semantic HTML
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animations**: Framer Motion (ready to use)
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brevita-cafe
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
brevita-cafe/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with glassmorphism utilities
│   ├── menu/
│   │   └── page.tsx        # Menu page with filtering
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page with form
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── glass-card.tsx      # Glassmorphic card component
│   ├── glass-button.tsx    # Glass button component
│   ├── toast-provider.tsx  # Toast notification system
│   └── skeleton.tsx        # Loading skeletons
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --accent: oklch(0.65 0.2 41);        /* Gold */
  --background: oklch(0.98 0.001 0);   /* Near white */
  --foreground: oklch(0.16 0.01 240);  /* Dark blue */
}
```

### Glass Effect

Modify the glass utilities in `app/globals.css`:

```css
.glass-card {
  @apply bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg;
}
```

### Menu Items

Edit the `menuItems` array in `app/menu/page.tsx`:

```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Your Drink',
    description: 'Description here',
    price: '$X.XX',
    category: 'espresso',
    icon: '☕',
  },
  // Add more items...
]
```

## Features Breakdown

### Glassmorphism Effects

All cards and components use the `.glass` and `.glass-card` classes:
- `backdrop-blur-xl` for the blur effect
- `bg-white/10` or `bg-black/10` for semi-transparent backgrounds
- `border border-white/20` for frosted glass borders

### Dark Mode

Toggle dark mode using the sun/moon icon in the navbar:
- Automatically persists user preference
- Smooth color transitions
- Optimized colors for both light and dark modes

### Toast Notifications

Show notifications in your components:

```typescript
import { useToast } from '@/components/toast-provider'

export default function MyComponent() {
  const { showToast } = useToast()
  
  const handleAction = () => {
    showToast('Success message!', 'success', 3000)
  }
  
  return <button onClick={handleAction}>Click me</button>
}
```

Toast types: `success`, `error`, `info`, `warning`

### Loading Skeletons

Use animated skeleton screens while loading:

```typescript
import { SkeletonGrid } from '@/components/skeleton'

export default function Page() {
  return <SkeletonGrid count={6} />
}
```

## Bonus Features

### Google Maps Integration

The contact page includes an embedded Google Maps iframe showing the café location. Update the `src` attribute with your actual location coordinates.

### Responsive Navigation

The navbar automatically adapts to mobile screens with a hamburger menu and smooth transitions.

### SEO Optimized

- Proper metadata in layout.tsx
- Semantic HTML elements
- Optimized for search engines

## Performance

- Optimized images and assets
- Code splitting with Next.js
- Static generation where possible
- Efficient CSS with Tailwind
- Fast icon delivery with Lucide

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on the GitHub repository.

---

**Made with ☕ by the Brevita Café team**

For a live demo, visit: [your-domain.com](https://your-domain.com)
