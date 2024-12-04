- this project is related to git repo: [https://github.com/clarklindev/microservices-stephengrider-with-node-and-react.git](https://github.com/clarklindev/microservices-stephengrider-with-node-and-react.git )

- specifically `## section 12 - code sharing and re-use between services (52min)`
- this is the shared module / npm package to be used by other services

#### tsconfig.json
- "declaration": true -> Generate .d.ts files from TypeScript and JavaScript files in your project. 
- "outdir": './build'

#### package.json
- `"main": "index.js"` this specifies the file to look for in the output (we set as `build` in tsconfig) folder
- below commented out as we use 'rimraf' package
<!-- - we installed the `del-cli` npm module
- del command used in the script is not valid for your operating system 
  - FIX: we install `cross-env` so `del-cli`  -->
- install `rimraf` as dev-dependency -> it can delete the directory itself without error if it doesn't exist
```json
"scripts": {
  "clean": "rimraf ./build",
  "build": "pnpm run clean && tsc"
}
```
#### 'name'
- this is value they will use for importing when working with this module
- eg. `import {} from '@organization/common'`

#### 'main' 
- package.json `main` property ->  when we are importing this module, what are they importing? we want it to reference `./build/index.js`
- ie. when using this package, and you reference the module via an import: `import {} from '@organization/common'`, where does this import point to...

#### 'types' 
- types is the reference to the types file generated when calling tsc compile.

#### 'files'
- 'files' -> an array that specifies what we want npm to include in our package

```json
"main": "./build/index.js",
"types": "./build/index.d.ts",
"files": ["build/**/*"] 
```
#### .gitignore
- add .gitignore 
- ignore the 'build' folder and 'node_modules'

#### running cmd
```
pnpm run build
```

### steps to updating
1. update the common/ shared repo (add / commit)

2. update the version (after commit)
- always have to update the version number when we publish our package
- look at semmantic versioning
- MANUALLY update the 'version' property of our package: `package.json`
- AUTO-INCREMENT: `pnpm version patch`

3. npm run build

4. npm publish

#### pub script
- can add to package.json "pub" script 
- NOT FOR PRODUCTION -> AS ALL CHANGES ARE ADDED TO COMMIT AT ONCE, ITS TOO GENERIC, VERSIONING NOT SPECIFIC

```js
"scripts": {
  "clean": "rimraf ./build",
  "build": "pnpm run clean && tsc",

  //VERSION BUMP HAPPENING AFTER
  // "pub": "git add . && git commit -m \"updates\" && pnpm version patch && pnpm run build && pnpm publish",

  // UPDATED
  "pub": "pnpm version patch && git add . && git commit -m \"update version to $(node -p -e \"require('./package.json').version\")\" && pnpm run build && pnpm publish"
},
```

#### using pub script
- make a change
- `pnpm run pub`

- NOTE: if you already added and commited to github, you still need to run 

```cmd
pnpm version patch && pnpm run build && pnpm publish
```