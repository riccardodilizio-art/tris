# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


node_modules: tutti i pacchetti installati
public: tutti i file statici: font, video, immagini ecc... (tutta la roba pubblica)
src: sorgente del progetto
-assets: possiamo inserire altre immagini, ma qui inseriamo i file dinamici, mentre in public inseriamo file che non cambieranno mai


gitignore: cosa non mandare su una repo git;
eslint.config.js: tutte le regole per gestire gli errori, formattazione del codice ecc...
index.html: punto di ingresso della nostra applicazione
package-lock e package.json: tutti i pacchetti per far funzionare il progetti;
vite.config.js: gestione dell'intero progetto.


"# tris" 
