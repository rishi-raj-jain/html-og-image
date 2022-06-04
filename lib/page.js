export function generatePage(title, image, mode) {
  return `
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                />
                <style id="_style">

                  *,
                  ::before,
                  ::after {
                    box-sizing: border-box;
                    /* 1 */
                    border-width: 0;
                    /* 2 */
                    border-style: solid;
                    /* 2 */
                    border-color: #e5e7eb;
                    /* 2 */
                  }

                  ::before,
                  ::after {
                    --tw-content: '';
                  }

                  html {
                    line-height: 1.5;
                    /* 1 */
                    -webkit-text-size-adjust: 100%;
                    /* 2 */
                    -moz-tab-size: 4;
                    /* 3 */
                    tab-size: 4;
                    /* 3 */
                    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    /* 4 */
                  }

                  body {
                    margin: 0;
                    /* 1 */
                    line-height: inherit;
                    /* 2 */
                  }

                  hr {
                    height: 0;
                    /* 1 */
                    color: inherit;
                    /* 2 */
                    border-top-width: 1px;
                    /* 3 */
                  }

                  /*
                  Add the correct text decoration in Chrome, Edge, and Safari.
                  */

                  abbr:where([title]) {
                    -webkit-text-decoration: underline dotted;
                            text-decoration: underline dotted;
                  }

                  /*
                  Remove the default font size and weight for headings.
                  */

                  h1,
                  h2,
                  h3,
                  h4,
                  h5,
                  h6 {
                    font-size: inherit;
                    font-weight: inherit;
                  }

                  /*
                  Reset links to optimize for opt-in styling instead of opt-out.
                  */

                  a {
                    color: inherit;
                    text-decoration: inherit;
                  }

                  /*
                  Add the correct font weight in Edge and Safari.
                  */

                  b,
                  strong {
                    font-weight: bolder;
                  }

                  code,
                  kbd,
                  samp,
                  pre {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    /* 1 */
                    font-size: 1em;
                    /* 2 */
                  }

                  /*
                  Add the correct font size in all browsers.
                  */

                  small {
                    font-size: 80%;
                  }

                  sub,
                  sup {
                    font-size: 75%;
                    line-height: 0;
                    position: relative;
                    vertical-align: baseline;
                  }

                  sub {
                    bottom: -0.25em;
                  }

                  sup {
                    top: -0.5em;
                  }

                  /*
                  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
                  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
                  3. Remove gaps between table borders by default.
                  */

                  table {
                    text-indent: 0;
                    /* 1 */
                    border-color: inherit;
                    /* 2 */
                    border-collapse: collapse;
                    /* 3 */
                  }

                  /*
                  1. Change the font styles in all browsers.
                  2. Remove the margin in Firefox and Safari.
                  3. Remove default padding in all browsers.
                  */

                  button,
                  input,
                  optgroup,
                  select,
                  textarea {
                    font-family: inherit;
                    /* 1 */
                    font-size: 100%;
                    /* 1 */
                    line-height: inherit;
                    /* 1 */
                    color: inherit;
                    /* 1 */
                    margin: 0;
                    /* 2 */
                    padding: 0;
                    /* 3 */
                  }

                  /*
                  Remove the inheritance of text transform in Edge and Firefox.
                  */

                  button,
                  select {
                    text-transform: none;
                  }

                  /*
                  1. Correct the inability to style clickable types in iOS and Safari.
                  2. Remove default button styles.
                  */

                  button,
                  [type='button'],
                  [type='reset'],
                  [type='submit'] {
                    -webkit-appearance: button;
                    /* 1 */
                    background-color: transparent;
                    /* 2 */
                    background-image: none;
                    /* 2 */
                  }

                  /*
                  Use the modern Firefox focus style for all focusable elements.
                  */

                  :-moz-focusring {
                    outline: auto;
                  }

                  :-moz-ui-invalid {
                    box-shadow: none;
                  }

                  /*
                  Add the correct vertical alignment in Chrome and Firefox.
                  */

                  progress {
                    vertical-align: baseline;
                  }

                  /*
                  Correct the cursor style of increment and decrement buttons in Safari.
                  */

                  ::-webkit-inner-spin-button,
                  ::-webkit-outer-spin-button {
                    height: auto;
                  }

                  /*
                  1. Correct the odd appearance in Chrome and Safari.
                  2. Correct the outline style in Safari.
                  */

                  [type='search'] {
                    -webkit-appearance: textfield;
                    /* 1 */
                    outline-offset: -2px;
                    /* 2 */
                  }

                  /*
                  Remove the inner padding in Chrome and Safari on macOS.
                  */

                  ::-webkit-search-decoration {
                    -webkit-appearance: none;
                  }

                  ::-webkit-file-upload-button {
                    -webkit-appearance: button;
                    /* 1 */
                    font: inherit;
                    /* 2 */
                  }

                  /*
                  Add the correct display in Chrome and Safari.
                  */

                  summary {
                    display: list-item;
                  }

                  /*
                  Removes the default spacing and border for appropriate elements.
                  */

                  blockquote,
                  dl,
                  dd,
                  h1,
                  h2,
                  h3,
                  h4,
                  h5,
                  h6,
                  hr,
                  figure,
                  p,
                  pre {
                    margin: 0;
                  }

                  fieldset {
                    margin: 0;
                    padding: 0;
                  }

                  legend {
                    padding: 0;
                  }

                  ol,
                  ul,
                  menu {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                  }

                  /*
                  Prevent resizing textareas horizontally by default.
                  */

                  textarea {
                    resize: vertical;
                  }

                  /*
                  1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
                  2. Set the default placeholder color to the user's configured gray 400 color.
                  */

                  input::placeholder,
                  textarea::placeholder {
                    opacity: 1;
                    /* 1 */
                    color: #9ca3af;
                    /* 2 */
                  }

                  /*
                  Set the default cursor for buttons.
                  */

                  button,
                  [role="button"] {
                    cursor: pointer;
                  }

                  /*
                  Make sure disabled buttons don't get the pointer cursor.
                  */

                  :disabled {
                    cursor: default;
                  }

                  img,
                  svg,
                  video,
                  canvas,
                  audio,
                  iframe,
                  embed,
                  object {
                    display: block;
                    /* 1 */
                    vertical-align: middle;
                    /* 2 */
                  }

                  /*
                  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
                  */

                  img,
                  video {
                    max-width: 100%;
                    height: auto;
                  }

                  [hidden] {
                    display: none;
                  }

                  *, ::before, ::after {
                    --tw-translate-x: 0;
                    --tw-translate-y: 0;
                    --tw-rotate: 0;
                    --tw-skew-x: 0;
                    --tw-skew-y: 0;
                    --tw-scale-x: 1;
                    --tw-scale-y: 1;
                    --tw-pan-x:  ;
                    --tw-pan-y:  ;
                    --tw-pinch-zoom:  ;
                    --tw-scroll-snap-strictness: proximity;
                    --tw-ordinal:  ;
                    --tw-slashed-zero:  ;
                    --tw-numeric-figure:  ;
                    --tw-numeric-spacing:  ;
                    --tw-numeric-fraction:  ;
                    --tw-ring-inset:  ;
                    --tw-ring-offset-width: 0px;
                    --tw-ring-offset-color: #fff;
                    --tw-ring-color: rgb(59 130 246 / 0.5);
                    --tw-ring-offset-shadow: 0 0 #0000;
                    --tw-ring-shadow: 0 0 #0000;
                    --tw-shadow: 0 0 #0000;
                    --tw-shadow-colored: 0 0 #0000;
                    --tw-blur:  ;
                    --tw-brightness:  ;
                    --tw-contrast:  ;
                    --tw-grayscale:  ;
                    --tw-hue-rotate:  ;
                    --tw-invert:  ;
                    --tw-saturate:  ;
                    --tw-sepia:  ;
                    --tw-drop-shadow:  ;
                    --tw-backdrop-blur:  ;
                    --tw-backdrop-brightness:  ;
                    --tw-backdrop-contrast:  ;
                    --tw-backdrop-grayscale:  ;
                    --tw-backdrop-hue-rotate:  ;
                    --tw-backdrop-invert:  ;
                    --tw-backdrop-opacity:  ;
                    --tw-backdrop-saturate:  ;
                    --tw-backdrop-sepia:  ;
                  }

                  /* __play_end_base__ */

                  /* __play_start_components__ */

                  /* __play_end_components__ */

                  /* __play_start_utilities__ */

                  .m-0 {
                    margin: 0px;
                  }

                  .mt-2 {
                    margin-top: 0.5rem;
                  }

                  .mt-auto {
                    margin-top: auto;
                  }

                  .ml-5 {
                    margin-left: 1.25rem;
                  }

                  .flex {
                    display: flex;
                  }

                  .h-screen {
                    height: 100vh;
                  }

                  .h-4\/5 {
                    height: 80%;
                  }

                  .h-full {
                    height: 100%;
                  }

                  .w-screen {
                    width: 100vw;
                  }

                  .w-4\/5 {
                    width: 80%;
                  }

                  .w-2\/5 {
                    width: 40%;
                  }

                  .flex-row {
                    flex-direction: row;
                  }

                  .flex-col {
                    flex-direction: column;
                  }

                  .items-start {
                    align-items: flex-start;
                  }

                  .items-center {
                    align-items: center;
                  }

                  .justify-center {
                    justify-content: center;
                  }

                  .rounded-full {
                    border-radius: 9999px;
                  }

                  .bg-gray-900 {
                    --tw-bg-opacity: 1;
                    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
                  }

                  .bg-gray-100 {
                    --tw-bg-opacity: 1;
                    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
                  }

                  .object-cover {
                    object-fit: cover;
                  }

                  .px-10 {
                    padding-left: 2.5rem;
                    padding-right: 2.5rem;
                  }

                  .py-0 {
                    padding-top: 0px;
                    padding-bottom: 0px;
                  }

                  .text-2xl {
                    font-size: 1.5rem;
                    line-height: 2rem;
                  }

                  .text-4xl {
                    font-size: 2.25rem;
                    line-height: 2.5rem;
                  }

                  .font-extrabold {
                    font-weight: 800;
                  }

                  .font-bold {
                    font-weight: 700;
                  }

                  .leading-none {
                    line-height: 1;
                  }

                  .tracking-tight {
                    letter-spacing: -0.025em;
                  }

                  .text-gray-500 {
                    --tw-text-opacity: 1;
                    color: rgb(107 114 128 / var(--tw-text-opacity));
                  }

                  .text-white {
                    --tw-text-opacity: 1;
                    color: rgb(255 255 255 / var(--tw-text-opacity));
                  }

                  .text-gray-900 {
                    --tw-text-opacity: 1;
                    color: rgb(17 24 39 / var(--tw-text-opacity));
                  }

                  .text-gray-300 {
                    --tw-text-opacity: 1;
                    color: rgb(209 213 219 / var(--tw-text-opacity));
                  }

                  /* __play_end_utilities__ */

                  /* __play_start_utilities__ */

                  @media (min-width: 640px) {
                    .sm\:text-6xl {
                      font-size: 3.75rem;
                      line-height: 1;
                    }
                  }

                  /* __play_end_utilities__ */
                </style>
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
                    <div class="px-10 py-0 m-0 w-4/5 h-4/5 flex flex-col">
                        <h5 class="text-2xl text-gray-500">
                            Checkout this article
                        </h5>
                        <h1 class="mt-2 text-4xl sm:text-6xl leading-none font-extrabold tracking-tight ${mode ? 'text-white' : 'text-gray-900'}">
                            ${title.replace(/\%20/g, ' ')}
                        </h1>
                        <div class="flex flex-row items-start mt-auto">
                            <img src="https://rishi.app/static/favicon-image.jpg" class="rounded-full" style="width: 120px; height: 120px;" />
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
                    <div class="px-10 py-0 m-0 w-2/5 h-4/5">
                        <img src="${image}" class="object-cover h-full" />
                    </div>
                </div>
            </body>
        </html>
    `
}
