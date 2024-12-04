- this project is related to git repo: [https://github.com/clarklindev/microservices-stephengrider-with-node-and-react.git](https://github.com/clarklindev/microservices-stephengrider-with-node-and-react.git )

- specifically `## section 12 - code sharing and re-use between services (52min)`
- this is the shared module / npm package to be used by other services

### tsconfig
- "declaration": true -> Generate .d.ts files from TypeScript and JavaScript files in your project. 
- "outdir": './build'

### package.json
- `"main": "index.js"` this specifies the file to look for in the output (we set as `build` in tsconfig) folder

```json

"scripts": {
  "build": "tsc"
}

```

### running cmd
```
pnpm run build
```

### gitignore
- ignore the build folder and node_modules