/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import './styles.css';
import App from './App';
import log from 'loglevel';

const root = document.getElementById('root');

if (import.meta.env.DEV) {
  log.setLevel("TRACE");
  if (!(root instanceof HTMLElement)) {
    throw new Error(
      'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
  }
} else {
  log.setLevel("WARN");
}

render(() => <App />, root!);
