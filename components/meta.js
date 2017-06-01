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
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscaled;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
        font-size: 62.5%;
      }
      body {
        font-family: 'Poppins', sans-serif;
        background: #fff;
        font-size: 1.4rem;
        color: #242A49;
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