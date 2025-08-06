import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Vite configuration
export default defineConfig({
  plugins: [vue()], // If you're using React, use `@vitejs/plugin-react`
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias for easy imports
    }
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // Main entry file
    }
  },
  server: {
    open: true // Automatically open the app in the browser
  }
});
```

### Explanation:

- **Plugins**: Vite uses plugins to extend its capabilities, and here `@vitejs/plugin-vue` is necessary for supporting Vue.js. If you use React, you would replace this with `@vitejs/plugin-react`.

- **Alias**: An alias is set up to simplify module imports by allowing you to use something like `@/components/MyComponent.vue` instead of relative paths.

- **Rollup Options**: Specifies the entry point for the build, which is your `index.html` file where `main.ts` will be bundled.

- **Server Configuration**: Automatically opens the browser when you run the development server with `vite`.

### Additional Setup Steps:

1. If using Vue.js, make sure to install Vue and the Vite Vue plugin:
   ```bash
   npm install vue
   npm install @vitejs/plugin-vue
   ```

2. Set up your `index.html` to include a reference to your `main.ts` for script management:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="Daniel Imad's Portfolio - Web Developer in Beirut">
     <title>Daniel Imad's Portfolio</title>
     <!-- Add SEO tags and other meta data -->
   </head>
   <body>
     <div id="app"></div>
     <!-- Main script -->
     <script type="module" src="/src/main.ts"></script>
   </body>
   </html>
   ```

3. Within `src/main.ts`, initialize your Vue instance:
   ```typescript
   import { createApp } from 'vue';
   import App from './App.vue';
   
   createApp(App).mount('#app');
   ```

Ensure that your directory structure includes an `src` folder where your `main.ts` and Vue components will reside. With this setup, you can focus on developing a responsive, SEO-optimized single-page application for Daniel Imad's portfolio.

For deployment, follow the instructions specific to your choice of hosting platform (Vercel, Netlify, or Heroku) to ensure proper continuous integration and deployment.
