import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';
import path from 'path';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.dev';
import { chalkProcessing } from './chalkConfig';

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const port = process.env.PORT || 3000;
const staticDir = isProduction ? 'dist' : 'src';
const middleware = [historyApiFallback()];

if (!isProduction) {
  const bundler = webpack(config);
  middleware.push(webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,

    // These settings suppress noisy webpack output,
    // so only errors are displayed to the console.
    logLevel: 'silent',

    // for other settings see
    // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
  }));
  middleware.push(webpackHotMiddleware(bundler));
}

app.use(cors());
app.use('/api', proxy('https://api.deezer.com'));
app.use(middleware);
app.use('/', express.static(path.join(__dirname, '..', staticDir)));

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(chalkProcessing(`Running ${process.env.NODE_ENV || 'development'} build`));

  return browserSync({
    online: false,
    open: false,
    port: port + 1,
    proxy: `localhost:${port}`,
    ui: false,
    watch: true,
    ignore: '**/*.js',
    ghostMode: false,
  });
});
