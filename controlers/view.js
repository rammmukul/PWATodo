import App from '../view/App'
import fetch from 'isomorphic-fetch'
const React = require('react')
const renderToString = require('react-dom/server').renderToString

module.exports.App = (req, res) => {
  fetch('http://127.0.0.1:8000/api/')
    .then(res => res.json())
    .then(data =>
      res.send(`
          <!DOCTYPE html>
          <head>
            <title>Universal React</title>
            <link rel="stylesheet" href="/view/style.css">
            <script src="/view/scripts/index.js" defer></script>
            <script>window.__initialData__ = '${JSON.stringify(data)}'</script>
          </head>
          <body>
            <div id="root">${renderToString(<App initialData={data} />)}</div>
          </body>
        </html>
      `)
    )
}
