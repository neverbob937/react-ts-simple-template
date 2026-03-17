import ReactDOM from 'react-dom/client';
import App from './App';
import PageProvider from './app/providers/PageProvider';
import GoldProvider from './app/providers/GoldProider';
import MoneyProvider from './app/providers/MoneyProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PageProvider>
    <GoldProvider>
      <MoneyProvider>
        <App />
      </MoneyProvider>
    </GoldProvider>
  </PageProvider>
);
