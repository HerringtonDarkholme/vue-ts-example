module.exports = {
    entry: { app: './app.ts', },
    output: { filename: 'app.js' },

    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['', '.ts', '.vue', '.js']
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'vue-ts' }
        ],
    },
    vue: {
      // instruct vue-loader to load TypeScript
      loaders: { js: 'vue-ts-loader', },
      // make TS' generated code cooperate with vue-loader
      esModule: true
    },
}
