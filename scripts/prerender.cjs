const { prerender } = require('vite-plugin-ssr/cli')

;(async () => {
  try {
    await prerender()
    console.log('Prerender completed successfully!')
  } catch (error) {
    console.error('Prerender failed:', error)
    process.exit(1)
  }
})()
