# Commands
* `npm start` for local testing, development build
* `npm run deploy -- -m "MESSAGE_GOES_HERE"` to build and push to the `gh-pages` branch [thanks to react's `gh-pages` package](https://github.com/gitname/react-gh-pages)

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