import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;