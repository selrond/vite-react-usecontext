# Vite HMR bug

This repo is a demonstration of HMR breaking in Vite, when consuming React's context
(both through `useContext` and `CountContext.Consumer`).

Steps to reproduce:

1. `npm install`
2. `npm run dev`
3. make a change inside `src/CountProvider.jsx` (any change, add a whitespace for instance)
4. watch the white screen and TypeError logged into browser console

To see the difference from the default vite starter, see [this commit](https://github.com/selrond/vite-react-usecontext/commit/4871ee448b27032031960b88c25d2d81b209344b)
