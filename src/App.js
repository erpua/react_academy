import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Test from '../src/views/Test';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/TodosView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect changing for componentDidMount');
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

        <Suspense fallback={<p>Downloading...</p>}>
          <Switch>

          <Route path="/test/:testId">
            <Test/>
          </Route>

            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute
              path="/register"
              restricted
              redirectTo="/todos"
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute 
              path="/login" 
              restricted 
              redirectTo="/todos"
            >
              <LoginView />
            </PublicRoute>

            <PrivateRoute 
              path="/todos" 
              redirectTo="/login"
            >
              <TodosView />
            </PrivateRoute>
          </Switch>
        </Suspense>
    </Container>
  );
}