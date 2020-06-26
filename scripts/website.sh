#!/usr/bin/env bash

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# update website for production storybook
echo 'replacing iframe src for production'
pwd
ls -al dist/website
ls -al dist/website/assets
ls -al dist/website/assets/js
sed -i '' -e 's/\/localhost:6006/storybook\/angular/g' dist/website/assets/js/*.js

node -r dotenv/config -- ./node_modules/.bin/netlify deploy --dir=./dist/website --message="Website - $GITHUB_REF@$GITHUB_SHA"
