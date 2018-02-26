# Electron/React

### To get started:
* Run `npm install`

##### Development
* Run `npm run dev` to start webpack-dev-server. Electron will launch automatically after compilation.

##### Production
_You have two options, an automatic build or two manual steps_

###### One Shot
* Run `npm run package` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`, and then an electron-packager run will be triggered for the current platform/arch, outputting to `builds/`

<sup>*</sup> Replace value of `postpackage` in `package.json` to specify build OS: 

* `electron-packager --platform=linux ./ --out=./builds`  for Linux (for x86, x86_64, armv7l, arm64, and mips64el architectures), outputting to `builds/`
* `electron-packager --platform=win32 ./ --out=./builds`  for Windows (also known as win32, for both 32/64 bit), outputting to `builds/`
* `electron-packager --platform=darwin ./ --out=./builds`  for OS X (also known as darwin), outputting to `builds/`
* `electron-packager --platform=mas ./ --out=./builds`  for Mac App Store (also known as mas), outputting to `builds/`

<sup>*</sup> *Note for OS X / MAS target bundles: the `.app` bundle can only be signed when building on a host OS X platform.*
* `electron-packager --platform=all ./ --out=./builds`  for the all platform/arch, outputting to `builds/`

###### Manual
_Recommendation: Update the "postpackage" script call in package.json to specify parameters as you choose and use the `npm run package` command instead of running these steps manually_
* Run `npm run build` to have webpack compile and output your bundle to `dist/bundle.js`
* Then you can call electron-packager directly with any commands you choose

If you want to test the production build after running `npm run build` you can then call `npm run prod`. This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance. Electron will launch automatically after compilation.

For advanced build: https://github.com/electron-userland/electron-packager
