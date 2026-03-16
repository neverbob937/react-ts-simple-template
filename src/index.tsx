import ReactDOM from 'react-dom/client';
import App from './App';
import PageProvider from './app/providers/PageProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PageProvider>
    <App />
  </PageProvider>
);
