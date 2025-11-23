## Repository snapshot

- **Framework**: React 19 with Create React App (react-scripts 5)
- **Language**: TypeScript (JSX with tsx/ts files)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Entry point**: `src/index.tsx`
- **Main component**: `src/App.tsx`
- **Testing**: @testing-library/react with Jest (CRA built-in)
- **Bundler**: Webpack (via react-scripts, not exposed)

## Goals for an AI coding agent

- Be conservative: don't `eject` or change build tooling unless the user explicitly asks.
- Keep changes limited to `src/` and `public/` by default.
- Follow TypeScript best practices: add proper type annotations, use `React.FC<Props>` or function components with explicit return types.
- Use Tailwind CSS classes instead of custom CSS files. Avoid `App.css`-style files.
- Use `@tailwind` directives only in `src/index.css`; do not create new CSS files.

## Important files and patterns

- **`tsconfig.json`**: TypeScript configuration for strict type checking and JSX.
- **`tailwind.config.js`**: Tailwind CSS configuration; content patterns already configured for `src/**/*.{ts,tsx}`.
- **`postcss.config.js`**: PostCSS plugins (Tailwind and autoprefixer).
- **`src/index.tsx`**: React app mount point with `React.StrictMode` and `reportWebVitals()`.
- **`src/App.tsx`**: Main functional component with explicit `JSX.Element` return type. Uses Tailwind classes (e.g., `className="min-h-screen bg-gray-900 text-white"`).
- **`src/App.test.tsx`**: Tests use `@testing-library/react` utilities (`render`, `screen`). File naming: `*.test.tsx`.
- **`src/reportWebVitals.ts`**: Performance monitoring; uses `ReportHandler` type from web-vitals.
- **`src/react-app-env.d.ts`**: Type definitions for CRA.

## Conventions to follow when editing

### TypeScript & Components
- Use functional components with explicit return types:
  ```typescript
  function Header(): JSX.Element {
    return <div className="...">...</div>;
  }
  ```
- Import React only when needed (modern JSX doesn't require it at the top).
- Use `React.FC<Props>` or explicit types for props:
  ```typescript
  interface CardProps {
    title: string;
    children?: React.ReactNode;
  }
  function Card({ title, children }: CardProps): JSX.Element { ... }
  ```

### Styling with Tailwind
- **Do use**: Tailwind utility classes directly in `className` attributes (e.g., `className="flex items-center justify-between"`).
- **Do not**: Create new `.css` files with custom styles; instead, add them to `src/index.css` using `@layer` if absolutely necessary.
- Colors, spacing, typography follow Tailwind's default theme unless extended in `tailwind.config.js`.
- Responsive design: use Tailwind prefixes (`sm:`, `md:`, `lg:`) for breakpoints.

### Testing
- Test files: `*.test.tsx` colocated with component files.
- Use `@testing-library/react` patterns:
  ```typescript
  import { render, screen } from '@testing-library/react';
  test('renders button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  ```
- Mock API calls with jest mocks or mock modules, not manual fetch stubbing.

### File organization
- Components live in `src/` or `src/components/` (flat or nested as needed).
- Tests colocated: `src/components/Button.tsx` and `src/components/Button.test.tsx`.
- Keep types in the same file as components; export for reuse.

## Developer workflows (commands agents can mention or run)

- Install dependencies: `npm install`
- Start dev server: `npm start` (runs on http://localhost:3000 with hot reload)
- Run tests (interactive watch): `npm test`
- Run tests (CI mode, non-interactive): `CI=true npm test -- --watchAll=false`
- Build for production: `npm run build` (outputs to `build/`)

## Integration points & external deps

- **Redux Toolkit** and **react-redux** present but not shown in current `App.tsx`; set up store in `src/store/` if adding state management.
- **React Router DOM** v7 available; configure routes in a separate file (e.g., `src/routes.tsx`) and wrap `<App>` with `<BrowserRouter>`.
- **No server code**: If adding backend calls, use `fetch` or `axios` and mock responses in tests.
- Keep secrets out of client code; use environment variables (`.env`, `.env.local`) and reference via `process.env.REACT_APP_*`.

## What not to do

- Do not run `npm run eject`; this removes CRA tooling and breaks the setup.
- Do not edit `node_modules` or hidden CRA configs.
- Do not commit `.env.local` or secrets to the repo.
- Do not create CSS-in-JS libraries or add CSS modules without explicit approval.
- Do not downgrade React or TypeScript major versions without discussion.

## Example task prompts

1. **"Add a new TypeScript component `src/components/Header.tsx` that displays a logo and navigation menu using Tailwind CSS. Add a test `src/components/Header.test.tsx` that asserts the menu renders."**
   
2. **"Fetch data from `/api/posts` in `App.tsx`, display a list of posts with Tailwind styling, and mock the fetch in tests."**

3. **"Set up Redux Toolkit in `src/store/` and connect a counter slice to the App component."**

## Where to look when confused

- `package.json`: Scripts and dependencies
- `tsconfig.json`: TypeScript compiler options
- `tailwind.config.js`: Tailwind theme and plugin config
- `src/App.tsx`: Component structure and Tailwind usage examples
- `src/App.test.tsx`: Testing patterns

If anything in this file is unclear, tell me:
- Testing patterns
- Adding new pages/routes with React Router
- Setting up Redux Toolkit
- Environment variable usage
