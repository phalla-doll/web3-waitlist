# Web3 Hero Section

A high-fidelity, dark-themed landing page hero section designed for Web3 projects, featuring cinematic video backgrounds and modern glassmorphism effects.

## Features

- **Cinematic Experience**: Full-screen video background with overlay for text readability.
- **Modern Typography**: Uses "General Sans" from Fontshare for a clean, contemporary look.
- **Glassmorphism**: Subtle transparency and blur effects on UI elements.
- **Custom UI Components**: Bespoke "Glow Buttons" with gradient borders and lighting effects.
- **Responsive Design**: Fully responsive navigation and layout for all device sizes.
- **Animations**: Smooth fade-in entrance animations for content.

## Technologies Used

- **React**: Component-based UI architecture.
- **Tailwind CSS**: Utility-first styling for rapid development and custom designs.
- **Lucide React**: Modern, lightweight icons.

## File Structure

- `index.html`: Main entry point, includes Tailwind CDN and font imports.
- `index.tsx`: React application entry point.
- `App.tsx`: Main layout component handling the video background.
- `components/`:
  - `Navbar.tsx`: Responsive top navigation bar.
  - `Hero.tsx`: Main hero content with call-to-action.
  - `GlowButton.tsx`: Reusable button component with custom glow styles.

## Usage

This project is built using standard React patterns without a build step in this specific environment (using ES modules via `index.html`). To use in a standard create-react-app or Vite project, ensure Tailwind CSS is configured.
