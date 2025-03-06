# Commands
* **Development:** `npm run dev` for local testing, development build
* **Preview production:** `npx vite build && npx vite preview` to view the built version locally. CSS gets flattened in the build so make sure it works right
* **Production:** `npm run deploy -- -m "MESSAGE_GOES_HERE"` to build and push to the `gh-pages` branch [thanks to react's `gh-pages` package](https://github.com/gitname/react-gh-pages)

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