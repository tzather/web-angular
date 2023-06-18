# Setup dev environment

To run the dev server

```
npm run server
```

To run the web app

```
npm start
```

To Kill already running localhost

```
sudo kill -9 `sudo lsof -t -i:4200`
```

- `npx npm-check-updates -u` --- upgrade all packages
- `npm list -g depth 0` --- list all global npm packages
- `ng build --named-chunks --stats-json && npx webpack-bundle-analyzer dist/app/stats.json` --- bundle analyzer
