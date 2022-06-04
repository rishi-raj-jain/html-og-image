const { withLayer0, withServiceWorker } = require('@layer0/next/config')

module.exports = withLayer0(
  withServiceWorker({
    target: 'server',
    compress: true,
    layer0SourceMaps: true,
    disableLayer0DevTools: true,
  })
)
