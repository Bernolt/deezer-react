# Deezer React App

## Proxy
Deezer API doesn't have CORS enabled, so I use [this simple proxy](https://github.com/koenoe/deezer-react-proxy).
At the time of writing I'm not convinced to mix server-side and client-side in one React app.
In my opinion it's better to keep it separate. We might want to change from Deezer to Spotify in future and then
we only have to change the proxy in theory.

## Notes
A Git commit template I personally like to follow: [link](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50)
### Watchman
Jest uses Watchman by default, to install: `brew install watchman`
### EditorConfig
Consistent coding styles between different editors and IDEs. I use VSCode, but other devs might prefer Sublime or Atom.
### NVM
Make sure everybody is on the same Node version by using a Node Version Manager.
At time of writing LTS is 8.9.4, so let's stick to that.
### NPM
I enable `save-exact` by default, so all devs are using the exact same version of used packages.
### Workflow
Heavily inspired by [React Slingshot](https://github.com/coryhouse/react-slingshot), but stripped down the stuff I don't need or understand for now.
Not using React scripts from [Create React App](https://github.com/facebook/create-react-app),
because it's too limited. I mean, no CSS pre-processor?
### ESLint
I really like the [Airbnb style guide](https://github.com/airbnb/javascript), because it has made me a better developer.
### App structure
Heavily inspired by [SoundRedux](https://github.com/andrewngu/sound-redux), but also looked at [Mern](https://github.com/Hashnode/mern-starter).

## Installation
### Run app
```
npm start
```
### Build app
```
npm run build
```
### Test app
```
npm test
```
