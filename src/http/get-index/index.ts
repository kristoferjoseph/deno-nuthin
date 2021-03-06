// TODO: modify the body object!
let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Deno baby</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h1 class="center-text">
      I made a Deno 🦕
    </h1>
    <p id="message"></p>
    <script type="module" crossorigin="">
      let msg = document.getElementById('message')
      async function getMessage() {
        let result = await (await fetch('/api')).json()
        message.innerHTML = result.message
      }
      getMessage()
    </script>
  </body>
</html>
`

export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
