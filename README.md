# SE*Vassa klor — Static site (Jekyll)

Small Jekyll-based website for the SE*Vassa klor Maine Coon cattery.

## What this repo contains

- Jekyll site using the `minima` theme.
- Content pages: `index.html`, `kittens.md`, `kopa_katt.md`, `maine_coon.md`, `contact.md`.
- Templates: `_layouts/default.html`, `_includes/header.html`, `_includes/footer.html`.
- Static assets under `assets/` (CSS, images, kitten gallery images).
- Gems managed via `Gemfile` (`jekyll`, `minima`, `webrick`, `jekyll-sitemap`).
- `CNAME` indicates a custom domain for GitHub Pages deployment.

## Quick start (macOS)

Prerequisites: Ruby (system or rbenv/rvm), Bundler.

If you prefer to install prerequisites with Homebrew, common packages to install are:

```bash
# Install Homebrew if you don't have it:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Useful packages for Jekyll development
brew install ruby node

# If you use rbenv to manage Ruby versions
brew install rbenv

# Then install bundler (use the ruby from Homebrew or rbenv-managed Ruby)
gem install bundler
```

1. Install Bundler if needed:

```bash
gem install bundler
```

2. Install project gems:

```bash
bundle install
```

3. Serve locally with live reload:

```bash
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000` in your browser.

## Notes & recommendations

- The site currently hard-codes production domain and some absolute image URLs in `_layouts/default.html`. Consider moving `url` and other site-specific values into `_config.yml` and reference them with Liquid (`{{ site.url }}`) so the site is portable between local builds and production.

## Deploy / GitHub Pages

This repository includes a `CNAME` and appears intended for GitHub Pages. Common deployment approaches:

- Push the site to the `gh_pages` branch and set the repository Pages source to that branch.
- Use GitHub Actions to build the site and push the generated `_site` to the `gh-pages` branch (or to the repository's Pages root) if you prefer building in CI.

## License & contacts

This repo does not include a license file. Add one if you plan to share or accept contributions.

Questions or follow-ups: open an issue or ask in this repo.
