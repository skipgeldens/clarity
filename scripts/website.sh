#!/usr/bin/env bash

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# update website for production storybook urls
# NOTE: this leave core untouched b/c vuepress code uses the //localhost:6006 url and we are
// replacing the '/localhost:6006' part with 'storybook/angular'
find . -type f -name "*.html" -print0 | xargs -0 perl -pi -e 's/\/localhost:6006/storybook\/angular/g'
find . -type f -name "*.js" -print0 | xargs -0 perl -pi -e 's/\/localhost:6006/storybook\/angular/g'

node -r dotenv/config -- ./node_modules/.bin/netlify deploy --dir=./dist/website --message="Website - $GITHUB_REF@$GITHUB_SHA"
