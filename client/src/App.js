import {Redirect, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import AboutWritePage from './pages/AboutWirtePage';

function App() {
  return (
    <>
      <Helmet><title>DEVOG</title></Helmet>
      <Switch>
        <Route component={PostListPage} path={['/@:username', '/']} exact/>
        <Route component={PostPage} path='/@:username/:postId'/>
        <Route component={LoginPage} path='/login'/>
        <Route component={RegisterPage} path='/register'/>
        <Route component={WritePage} path='/write'/>
        <Route component={AboutPage} path='/about'/>
        <Route component={AboutWritePage} path='/about-write'/>
        <Redirect from={'*'} to={'/'}/>
      </Switch>
    </>
  );
}

export default App;
