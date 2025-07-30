import { defineConfig } from "@vue/cli-service";
import path from 'path'

export default defineConfig({

  transpileDependencies: [
    'some-package',
    'another-package'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@plugin': path.resolve(__dirname, 'plugin'),
      },
      fallback: {
        fs: false,
        path: false,
        crypto: require.resolve("crypto-browserify"),
        os: false,
        util: false,
        buffer: false,
        stream: false,
        events: false,
        assert: false,
        constants: false,
        domain: false,
        http: false,
        https: false,
        net: false,
        tls: false,
        url: false,
        zlib: false,
        querystring: false,
        punycode: false,
        string_decoder: false,
        timers: false,
        tty: false,
        v8: false,
        vm: false,
        worker_threads: false,
      },
    },
    externals: {
      'fs': 'commonjs fs',
      'path': 'commonjs path',
    }
  },
  chainWebpack: (config) => {
    // Handle sql.js WASM file
    config.module
      .rule('wasm')
      .test(/\.wasm$/)
      .set('type', 'webassembly/async');
  },
});
