import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Stub out Figma-specific asset imports so the build works outside of Figma
const figmaAssetStub = {
  name: 'figma-asset-stub',
  enforce: 'pre' as const,
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) return '\0figma-asset-stub'
  },
  load(id: string) {
    if (id === '\0figma-asset-stub') return 'export default ""'
  },
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetStub,
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
