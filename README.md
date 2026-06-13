# cris-pr.github.io

Personal portfolio for Cristian Sanchez Vazquez.

The site has been modernized from static HTML into a Vite + React + TypeScript + Tailwind CSS application.

## Development

Install dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Structure

```txt
src/
  components/      Reusable React components
  data/            Portfolio content data
  App.tsx          Page composition
  index.css        Tailwind and global styles
```

Legacy HTML project files are still kept in the repository as source history, but the published portfolio is built from the Vite app.