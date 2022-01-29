import './index.css';
import Router from './router';


function matchMode() {
    const body = document.body;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
        if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
        }
    } else {
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        }
    }
}

matchMode();

function App() {
  return (
    <Router />
  );
}

export default App;
