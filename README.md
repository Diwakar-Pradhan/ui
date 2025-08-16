# UI Component Library

A modern React component library built with TypeScript, Vite, and Storybook. This project provides reusable, accessible, and well-documented UI components for building consistent user interfaces.

## 🚀 Features

- **TypeScript-first**: Full type safety and IntelliSense support
- **Storybook Integration**: Interactive component documentation and testing
- **Vite Build System**: Fast development and optimized builds
- **Component-driven**: Modular and reusable UI components
- **Accessibility**: WCAG 2.1 compliant components
- **Responsive Design**: Mobile-first approach

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ui
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development Server
Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### 4. Storybook Development
Start Storybook for component development:
```bash
npm run storybook
```
Storybook will open at `http://localhost:6006`

### 5. Build for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── DataTable.tsx    # Data table component
│   │   ├── InputField.tsx   # Form input component
│   │   └── *.stories.tsx  # Component stories
│   ├── stories/            # Storybook examples
│   ├── assets/              # Static assets
│   └── App.tsx             # Main application
├── public/                  # Public assets
├── .storybook/             # Storybook configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Approach & Architecture

### Component Design Philosophy
1. **Atomic Design**: Components are built from simple to complex, promoting reusability
2. **Props-driven**: All components use props for configuration and data flow
3. **Composition over Inheritance**: Components are designed to be composed together
4. **Type Safety**: Full TypeScript support with strict type checking

### Development Workflow
1. **Component-First**: Develop components in isolation using Storybook
2. **Test-Driven**: Write stories and tests before implementation
3. **Documentation**: Each component includes comprehensive documentation
4. **Accessibility**: Components are built with accessibility in mind from the start

### Technology Stack
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Storybook**: Component development and documentation
- **CSS Modules**: Scoped styling for components
- **ESLint**: Code linting and formatting

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler checks |

## 📚 Component Documentation

### DataTable Component
A flexible data table component with sorting, filtering, and pagination capabilities.

**Usage:**
```typescript
import { DataTable } from './components/DataTable';

<DataTable
  columns={columns}
  data={data}
  onSort={handleSort}
  onFilter={handleFilter}
/>
```

### InputField Component
A reusable form input component with validation and accessibility features.

**Usage:**
```typescript
import { InputField } from './components/InputField';

<InputField
  label="Email"
  type="email"
  value={email}
  onChange={setEmail}
  required
  error={emailError}
/>
```

## 🎨 Styling Approach

- **CSS Modules**: Each component has its own CSS module for scoped styling
- **Design Tokens**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first responsive breakpoints
- **Dark Mode**: Support for light/dark theme switching

## 🔧 Development Guidelines

### Creating New Components
1. Create component file in `src/components/`
2. Create corresponding `.stories.tsx` file
3. Add TypeScript interfaces for props
4. Include accessibility attributes
5. Write comprehensive documentation

### Code Standards
- Use TypeScript for all new files
- Follow React functional component patterns
- Include PropTypes or TypeScript interfaces
- Write unit tests for complex components
- Ensure accessibility compliance (WCAG 2.1)

## 🚢 Deployment

### Storybook Deployment
```bash
npm run build-storybook
```
Deploy the `storybook-static` folder to your hosting provider.

### Application Deployment
```bash
npm run build
```
Deploy the `dist` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email [support@example.com](mailto:support@example.com) or create an issue in the repository.
