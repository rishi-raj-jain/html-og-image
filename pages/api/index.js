import chromium from 'chrome-aws-lambda'

export default async function handler(req, res) {
  const { title, mode, image, width = 1400, height = 720 } = req.query
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
  const page = await browser.newPage()
  await page.setViewport({ width: parseInt(width), height: parseInt(height) })
  await page.waitForTimeout(2000)
  await page.goto(`https://rishi-raj-jain-html-og-image-default.layer0-limelight.link/blogs?name=${title}&image=${image}&mode=${mode}`)
  await page.waitForTimeout(6000)
  const content = await page.$('body')
  const imageBuffer = await content.screenshot({ omitBackground: true })
  await page.close()
  await browser.close()
  res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
  res.setHeader('Content-Type', 'image/png')
  res.send(imageBuffer)
  res.status(200)
}
