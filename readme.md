
# Webfeed CSS

This repository contains both a CSS as well as a TypeScript version of the minimum CSS required to render a Webfeed in a browser environment. The TypeScript version has RawJS typings, so the CSS can be an argument in a call to `raw.style()` or `raw.css()`.

The CSS file is available on jsDelivr. If you want to include the CSS file statically in your HTML, use the following snippet:

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/webfeed-css/webfeed.css">
```

## CommonJS Installation / Usage

```
npm install webfeed-css
```
```
const webfeedCss = require("webfeed-css") as typeof import("webfeed-css");

// Use it somewhere.
document.head.append(raw.style(webfeedCss));
```
