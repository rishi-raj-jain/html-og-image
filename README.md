# Deploy OG Image Generator to Layer0

A deployment of OG Image Generator to Layer0.

## Demo

https://rishi-raj-jain-html-og-image-default.layer0-limelight.link/api?title=Incremental%20Static%20Generation&image=https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?cs=srgb&dl=pexels-ho%C3%A0i-nam-12079516.jpg&fm=jpg

## Try It Now

[![Deploy with Layer0](https://docs.layer0.co/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/rishi-raj-jain/html-og-image)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/rishi-raj-jain/html-og-image.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run the Next.js app locally on Layer0

Run the Next.js app with the command:

```bash
npm run 0:dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Layer0

You can do a production build of your app and test it locally using:

```bash
npm run 0:build && npm run 0:run
```

Setting --production runs your app exactly as it will be uploaded to the Layer0 cloud using serverless-offline.

## Deploying to Layer0

Deploying requires an account on Layer0. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Layer0 by running the following in the root folder of your project:

```bash
npm run 0:deploy
```

See [deploying](https://docs.layer0.co/guides/deploying) for more information.

## Author

- Rishi Raj Jain ([@rishi*raj_jain*](https://twitter.com/rishi_raj_jain_)) - [Layer0](https://layer0.co)
