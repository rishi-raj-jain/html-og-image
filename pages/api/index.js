import chromium from 'chrome-aws-lambda'
import { generatePage } from '@/lib/page'

export default async function handler(req, res) {
  const {
    title,
    mode = false, // light mode
    image = 'https://images.unsplash.com/photo-1579123521334-44e68095cd7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    width = 1400,
    height = 720,
  } = req.query
  const dom = generatePage(title, image, mode)
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
  const page = await browser.newPage()
  await page.setViewport({ width: parseInt(width), height: parseInt(height) })
  await page.setContent(dom)
  await page.waitForTimeout(10000)
  const content = await page.$('body')
  const imageBuffer = await content.screenshot({ omitBackground: true })
  await page.close()
  await browser.close()
  res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
  res.setHeader('Content-Type', 'image/png')
  res.send(imageBuffer)
  res.status(200)
}
