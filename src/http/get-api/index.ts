// Learn more about Begin HTTP functions: https://docs.begin.com/en/functions/http/

let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
  </head>
  <body>
    <h1 class="center-text">
      Hello world!
    </h1>
    <p class="center-text">
      Your new route is ready to go!
    </p>
    <p class="center-text">
      Learn more about building <a href="https://docs.begin.com/en/functions/http/" class="link" target="_blank">Begin HTTP functions here</a>.
    </p>
  </body>
</html>
`

// HTTP function
export async function handler (req: object) {
  console.log(req)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: html
  }
}
