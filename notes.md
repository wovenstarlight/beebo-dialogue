# Commands
* **Development (default test task):** `npm run dev` for local testing, development build
* **Production (default build task):** `npm run deploy -- -m "MESSAGE_GOES_HERE"` to build and push to the `gh-pages` branch [thanks to react's `gh-pages` package](https://github.com/gitname/react-gh-pages)

# Import order
For consistency.
* React hooks (useState, useEffect, memo etc.)
* Other module imports (dom-to-image etc.)
* Contexts (BlockContext etc.)
* Translation (Trans, useTranslation etc.)
* Constants (sorted alphabetically)
* Components (sorted alphabetically)
* Utils (sorted alphabetically)
* Stylesheets