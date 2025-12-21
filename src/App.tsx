import { Route, Router } from '@solidjs/router';
import type { Component } from 'solid-js';
import HomePage from './pages/HomePage';
import { AuthProvider } from './providers/auth';
import LoginPage from './pages/LoginPage';

const App: Component = () => {
  return (
    <>
      <AuthProvider>
        <h1 class="text-2xl font-bold">WiPi Web UI</h1>
        <Router>
          <Route path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
