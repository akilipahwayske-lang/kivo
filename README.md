# KIVO - Powering Africa's Intelligent Future

KIVO is a premier AI Consultancy based in Nairobi, Kenya, dedicated to driving innovation and optimization across the continent through intelligent solutions.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd kivo-ai-kenya-hub

# Step 3: Install dependencies
npm install
```

### Development

Start the development server with hot-reloading:

```sh
npm run dev
```

### Building for Production

Create an optimized production build:

```sh
npm run build
```

The output will be in the `dist` directory.

## Technologies

- **Vite**: Next-generation frontend tooling
- **React**: Powerful UI library
- **TypeScript**: Static typing for reliability
- **Tailwind CSS**: Utility-first styling
- **shadcn-ui**: High-quality UI components
- **Framer Motion**: Smooth animations

## Deployment (Cloudflare Pages)

This project is optimized for deployment on Cloudflare Pages.

1. Connect your GitHub repository to Cloudflare Pages.
2. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
3. Deploy!

## License

MIT

