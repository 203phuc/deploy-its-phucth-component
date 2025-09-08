# ITS Sandbox Component

## Overview

This repository contains reusable React components for the ITS Sandbox project. The components are designed to be modular, customizable, and easy to integrate into various applications within the ITS ecosystem.

## Features

- Modern React components built with TypeScript
- Storybook integration for component documentation and development
- Unit tests using Vitest
- Pre-configured with ESLint, Prettier, and lint-staged for code quality
- Vite for fast development and build

## Getting Started

### Prerequisites

- Node.js (v20 required)
- Yarn (v4 required)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd its-sandbox-component
yarn install
```

### Running Storybook

To view and develop components in isolation:

```bash
yarn run storybook
```

### Running the App

To start the development server:

```bash
yarn run dev
```

### Running Tests

To execute unit tests:

```bash
yarn run test
```

### Linting and Formatting

To check code quality and formatting:

```bash
yarn run lint
yarn run format
```

## Using GitLab Package Registry

This project supports installing dependencies from a private GitLab Package Registry. To configure access:

1. **Yarn 4 is pre-configured for the GitLab Package Registry.**

- See `.yarnrc.yml` for all registry and authentication settings.
- No `.npmrc` file is needed.

2. **Configure environment variables**:

- Copy `.env.example` to `.env` and update the values as needed.
- Ensure `CI_SERVICE_REPOSITORY_TOKEN` is set to your personal or CI token with access to the registry.

3. **Install dependencies**:

```bash
yarn install
```

For CI/CD, set the environment variables in your pipeline settings or secrets. See `.env.example` for required variables.

## Project Structure

- `src/` - Source code for components
  - `examples/` - Example components and stories
  - `pages/` - Example pages for demonstration
  - `styles/` - Shared styles (e.g., Tailwind CSS)
- `public/` - Static assets
- `storybook.config.json` - Storybook configuration
- `vite.config.ts` - Vite configuration

## Contributing

Contributions are welcome! Please open issues or submit pull requests for any improvements or bug fixes. Ensure your code follows the existing style and passes all checks before submitting.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
