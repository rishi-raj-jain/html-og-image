export function generatePage(title, image, mode) {
  return `
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                />
                <link 
                    rel="stylesheet"
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" 
                />
                <style>
                    body {
                        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                        background-image: radial-gradient(#C1C1C1 0%, transparent 20%), radial-gradient(#C1C1C1 0%, transparent 20%);
                        background-color: #FFFFFF;
                        background-position: 0 0, 10px 10px;
                        background-size: 10px 10px;
                        width: 100%;
                        height: 100%;
                        padding: 0px;
                        margin: 0px;
                    }
                </style>
            </head>
            <body>
                <div class="flex flex-row px-10 items-center justify-center h-screen w-screen ${mode ? 'bg-gray-900' : 'bg-gray-100'}">
                    <div class="px-5 py-0 m-0 w-4/5 h-4/5 flex flex-col">
                        <h5 class="text-2xl text-gray-500">
                            Checkout this article
                        </h5>
                        <h1 class="mt-2 text-4xl sm:text-6xl leading-none font-extrabold tracking-tight ${mode ? 'text-white' : 'text-gray-900'}">
                            ${title}
                        </h1>
                        <div class="flex flex-row items-start mt-auto">
                            <img src="https://rishi.app/static/favicon-image.jpeg" class="rounded-full" style="width: 120px; height: 120px;" />
                            <div class="ml-5 flex flex-col">
                                <h6 class="font-bold text-4xl ${mode ? 'text-gray-300' : 'text-gray-500'}">
                                    Rishi Raj Jain
                                </h6>
                                <p class="text-2xl text-gray-500">
                                    Wanna take everyone along in this web development journey by learning and giving back async
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-0 m-0 w-2/5 h-4/5">
                        <img src="${image}" class="object-cover h-full" />
                    </div>
                </div>
            </body>
        </html>
    `
}
