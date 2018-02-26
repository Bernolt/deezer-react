# Deezer React App

## Notes
A Git commit template I personally like to follow: [link](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50)

## Installation
### EditorConfig
Consistent coding styles between different editors and IDEs. I use VSCode, but other devs might prefer Sublime or Atom.
### NVM
Make sure everybody is on the same Node version by using a Node Version Manager.
At time of writing LTS is 8.9.4, so let's stick to that. If somebody is stubborn and doesn't want to use NVM, 
we could always write a Node script in our workflow to check the Node version before building the app.
### NPM
I enable `save-exact` by default, so all devs are using the exact same version of used packages.
### Workflow
Heavily inspired by [React Slingshot](https://github.com/coryhouse/react-slingshot), but stripped down the stuff 
I don't need or understand for now. Not using React scripts from [Create React App](https://github.com/facebook/create-react-app),
because it's too limited. I mean, no CSS pre-processor?
