# react-ssr-boilerplate

This is a simple boilerplate application demonstrating server-side rendering and basic data retrieval. Built with [React], the application is universal (WIP 🚧), insofar as it can be served by a standard webserver and rendered on the client (see [CSR]) or served by the included [Express] server which provides server-side rendering (see [SSR]).

No `create-react-app` here, this is all custom `webpack`, `eslint`, and `babel` configuration!

## Why SSR?
Server-side rendering seems, to me, a good approach for this type of website. The faster First Contentful Paint ([FCP]) means that prospective clients / employers—likely pressed for time and with many candidates a click away—will spend `500 - 2,000ms` more on one's portfolio. It also means that web crawlers will more easily crawl the app's content and links, a key ingredient in the dark arts of SEO.

## Available Scripts

In the project directory, you can run:

### `yarn bundle-dev`
Executes Webpack with the `watch` and `debug` flags.

### `yarn start-dev`
Executes `nodemon` with `babel-node` on the file `./src/server/server.js`.

Run these two in tandem to compile changes on the fly and refresh the Express server.


[React]: https://reactjs.org/
[Express]: https://expressjs.com/
[CSR]: https://developers.google.com/web/updates/2019/02/rendering-on-the-web#csr
[SSR]: https://developers.google.com/web/updates/2019/02/rendering-on-the-web#server-rendering
[FCP]: https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint