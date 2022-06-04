const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .match('/api', ({ cache }) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: 31536000,
      },
      edge: {
        maxAgeSeconds: 31536000,
        forcePrivateCaching: true
      },
    })
  })
  .use(nextRoutes)
