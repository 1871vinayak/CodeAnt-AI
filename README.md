# CodeAnt AI - Repository Management System

A modern web application for managing repositories with AI-powered code review capabilities.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codeant-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🧪 Testing

Run tests with:

```bash
npm run test
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Auth/          # Authentication related components
│   └── Desktop/       # Main application components
├── layouts/           # Layout components
├── routes/           # Route configurations
└── utils/            # Utility functions
```

## 🔑 Key Features

- Modern authentication system
- Repository management
- Real-time search
- Responsive design
- AI-powered code review (coming soon)
- Cloud security scanning (coming soon)

## 🛠️ Tech Stack

- React 18
- Vite
- React Router v6
- Material-UI
- Tailwind CSS

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🔄 State Management

- React hooks for local state
- Context API for global state (when needed)

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Material-UI components
- Custom CSS for specific components

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build settings are automatically configured via `netlify.toml`
3. All routes will be handled correctly thanks to the redirect rules.

Click [CodeAnt AI](https://sunny-moonbeam-8519d1.netlify.app/) to test the working of App.


[![Hosted-Netlify](https://img.shields.io/badge/Hosted-Netlify-success?style=for-the-badge&logo=netlify)](https://sunny-moonbeam-8519d1.netlify.app/)

### Environment Variables

No environment variables are required for basic functionality.

## 🧩 Components

### Authentication
- `SignIn`: Main authentication component
- `SaasProviders`: OAuth providers for SaaS
- `SelfHostedProviders`: Self-hosted authentication options

### Dashboard
- `Dashboard`: Main dashboard view
- `RepositoryList`: List of repositories
- `SearchBar`: Repository search
- `Sidebar`: Navigation sidebar

## 🔒 Security

- Protected routes using React Router
- Authentication state management
- Secure routing patterns

## 🎯 Best Practices

- Component composition
- Custom hooks for logic reuse
- Consistent naming conventions
- Proper error handling
- Responsive design patterns
- Performance optimizations

## 📈 Performance

- Code splitting with React Router
- Lazy loading of components
- Optimized images
- Efficient state management
- Minimized bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

MIT License