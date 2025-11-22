# Next.js Mantine Starter Kit 🚀

A **production-ready** Next.js starter kit featuring the best modern web development tools and practices. Built with **Next.js 16**, **Mantine UI**, **TanStack Router**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Mantine](https://img.shields.io/badge/Mantine-8.3-339af0?style=for-the-badge)

## ✨ Features

### 🎨 **Premium UI/UX**
- **Mantine UI** - Beautiful, accessible components with dark mode support
- **Custom Theme** - Premium color palettes, shadows, and smooth transitions
- **Framer Motion** - Smooth, production-ready animations
- **Responsive Design** - Mobile-first approach that works on all devices
- **Glassmorphism** - Modern design effects and gradients

### 🛠️ **Developer Experience**
- **TypeScript** - Full type safety with strict mode
- **ESLint & Prettier** - Code quality and formatting
- **Vitest** - Fast unit testing with React Testing Library
- **Hot Module Replacement** - Instant feedback with Turbopack
- **Auto-imports** - Optimized imports and tree-shaking

### 🚀 **Performance**
- **Next.js 16** - Latest features with Turbopack
- **React Query** - Powerful data fetching with caching
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Built-in Next.js image optimization
- **Bundle Analysis** - Track and optimize bundle size

### 🔐 **Production Ready**
- **Error Boundaries** - Graceful error handling
- **Environment Config** - Type-safe environment variables
- **API Client** - Axios with interceptors and type safety
- **Form Validation** - Comprehensive validation utilities
- **Storage Utilities** - Type-safe localStorage helpers

## 📦 What's Included

### UI Components
- ✅ Button, Card, Input components with premium styling
- ✅ Loading spinners and skeleton loaders
- ✅ Confirmation dialogs and modals
- ✅ Search input with debouncing
- ✅ Pagination with page size selector
- ✅ Status alerts (info, warning, error, success)
- ✅ Smooth animations (FadeIn, SlideIn)

### Hooks
- ✅ `useAsync` - Handle async operations
- ✅ `useToggle` - Boolean state management
- ✅ `usePrevious` - Track previous values
- ✅ `useClickOutside` - Detect outside clicks
- ✅ Mantine hooks (useDisclosure, useDebouncedValue, etc.)

### Utilities
- ✅ Date formatting and manipulation
- ✅ String utilities (capitalize, slugify, etc.)
- ✅ Object utilities (deep merge, pick, omit)
- ✅ Format utilities (currency, bytes, phone)
- ✅ Validation utilities (email, password, etc.)
- ✅ Storage utilities (type-safe localStorage)
- ✅ Class name utilities (clsx, tailwind-merge)

### Layouts
- ✅ Dashboard layout with sidebar navigation
- ✅ Auth layout with gradient background
- ✅ Error boundary for graceful error handling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd next-mantine-starter

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app! 🎉

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run test         # Run tests with Vitest
```

## 📁 Project Structure

```
next-mantine-starter/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── [[...slug]]/       # Catch-all route for TanStack Router
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── animations/        # Animation components
│   │   ├── common/            # Common components (ErrorBoundary)
│   │   ├── pages/             # Page components
│   │   ├── providers/         # Context providers
│   │   └── ui/                # Reusable UI components
│   ├── hooks/
│   │   └── common/            # Custom React hooks
│   ├── layouts/               # Layout components
│   ├── libs/                  # Third-party library configs
│   ├── routes/                # TanStack Router configuration
│   ├── services/              # API services
│   ├── theme/                 # Mantine theme configuration
│   ├── utils/                 # Utility functions
│   ├── api/                   # API client and React Query setup
│   └── types.ts               # Global TypeScript types
├── tests/                     # Test files
├── public/                    # Static assets
└── package.json
```

## 🎨 Customization

### Theme

Edit `src/theme/theme.ts` to customize colors, fonts, spacing, and component defaults:

```typescript
export const theme = createTheme({
    primaryColor: 'brand',
    fontFamily: 'Inter, sans-serif',
    // ... more customization
});
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=My Awesome App
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

Access them via `src/libs/env.ts` for type safety.

### Adding New Routes

1. Define routes in `src/routes/router.tsx`
2. Create page components in `src/components/pages/`
3. TanStack Router handles the rest!

## 🔧 API Integration

The starter includes a fully configured API client with React Query:

```typescript
// Using the API client
import { api } from '@/api/api-client';

const data = await api.get<User>('/users/1');
await api.post<User>('/users', { name: 'John' });

// Using React Query service
import { createReactQueryApiService } from '@/api/react-query-service';

const userService = createReactQueryApiService<User>('/users', ['users']);
const { data, isLoading } = userService.useGetById(userId);
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with love using:
- [Next.js](https://nextjs.org/)
- [Mantine](https://mantine.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Framer Motion](https://www.framer.com/motion/)

---

**Happy coding! 🚀**
