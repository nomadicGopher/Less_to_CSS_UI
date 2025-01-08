<p align="center">
  <img src="less2css_sample.png" alt="less2cssUI" width="50%"/>
</p>

# less2cssUI

## Getting Started

Currently this is configured to easily work with VS Code & the Live Preview extension. Although if you want to use your own HTTP server, the `projectRoot` just need to be set properly inside of `lessToCss.html`.

### OPTION A. Compile directly in the LESS-to-CSS-SPA repo locally

1. Clone this repo.
2. Replace contents of or overwrite `styles.less` with your content.
3. Set the variable of `projectRoot` to be the full directory path of the cloned repo (if you want to see the copy-directory-path button which is useful if downloading the minified file.)
4. Assuming the Live Preview extension is enabled, open `lessToCss.html` to a web browser in VS Code by right cicking on the file in the Explorer (sidebar) and selecting `Show Preview`.

### OPTION B. Package into an existing project

**Example**: https://github.com/nomadicGopher/DirectCMS (/compilers/lessToCss.html)

1. Download `lessToCss.html`.
2. Move `lessToCss.html` from your Download folder to the directory with your LESS file.
3. Set the variable of projectRoot to be the directory path which contains your LESS file.
4. If your LESS file is not named `styles.less`, then update the variable `lessFilePath` to your match your LESS file's name.
5. Assuming the Live Preview extension is enabled, open `lessToCss.html` to a web browser in VS Code by right cicking on the file in the Explorer (sidebar) and selecting `Show Preview`.

   or

   If your own server is running open the browser to `https://localhost:$PORT/$RELATIVE_PATH_FROM_SERVER_TO/lessToCss.html`

## TODO

* [ ] No longer require an HTTP server (reference LESS file data without any APIs)
