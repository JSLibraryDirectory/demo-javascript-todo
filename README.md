<p align="center">
  <img alt="logo" src="https://raw.githubusercontent.com/Rapid-SDK/javascript/dev/logo.png" />
</p>
<hr/>

# Example Next.js web app

## How to use

Clone this repository or download it as a [ZIP](https://github.com/Rapid-SDK/rapido-web/archive/master.zip)

```
 curl https://codeload.github.com/rapid-sdk/rapido-web/tar.gz/master | tar -xz
 cd rapido-web-master
```

Visit [http://www.rapid.io/demo](http://www.rapid.io/demo) and obtain a unique demo collection name. Then find `lib/client.js` file and put the unique name to the following constant.

```js
 const RAPID_TODO_COLLECTION_NAME = ''
```

Install it and run

```
 yarn
 yarn run dev
```

## The idea behind the example

RapiDO is a sample to-do list web app based on [Next.js](https://github.com/zeit/next.js) and [Rapid.io](https://www.rapid.io) real-time database. The app is supposed to showcase usage of [Rapid.io JavaScript SDK](https://github.com/Rapid-SDK/javascript).

