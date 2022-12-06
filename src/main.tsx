import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store as reduxStore } from './redux/store';
import { client as apolloClient } from './lib/apollo';
import App from './App';
import './index.css';
import { AuthProvider } from './context/JWTContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AuthProvider>
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={reduxStore}>
        <App />
      </ReduxProvider>
    </ApolloProvider>
  </AuthProvider>
  // </React.StrictMode>
);
