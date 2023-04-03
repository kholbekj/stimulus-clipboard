import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StimulusClipboard',
        fileName: 'stimulus-clipboard'
      },
      rollupOptions: {
        external: ['stimulus'],
        output: {
          globals: {
            'stimulus': 'Stimulus'
          }
        }
      }
    }
  }
})
