import { Navigate, Route, Router } from '@solidjs/router';
import type { Component, ParentProps } from 'solid-js';
import HomePage from './pages/HomePage';
import { AuthProvider } from './providers/auth';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import ProtectedRoute from './ProtectedRoute';
import Footer from './components/Footer';

const App: Component = () => {
  // TODO: Consider protecting routes on this Layout component
  //       and removing the ProtectedRoute wrapper
  const Layout = (props: ParentProps) => {
    return (<>
      <div class="min-h-[100vh]">
        <NavBar/>
        <main>
          {props.children}
        </main>
      </div>
      <Footer/>
    </>);
  }

  return (
    <main>
      <AuthProvider>
        <Router root={Layout}>
          <ProtectedRoute path="/" component={HomePage}/>
          <ProtectedRoute protection="Unauthenticated" path="/login" component={LoginPage}/>
        </Router>
      </AuthProvider>
    </main>
  );
};

export default App;
