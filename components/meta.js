import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Poppins', sans-serif;
        background: #fff;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
      }
    `}</style>
  </div>
)