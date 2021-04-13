import {Route, Switch, Redirect} from 'react-router-dom';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route component={PostListPage} path={['/@:username', '/']} exact/>
      <Route component={PostPage} path='/@:username/:postId'/>
      <Route component={LoginPage} path='/login'/>
      <Route component={RegisterPage} path='/register'/>
      <Route component={WritePage} path='/write'/>
      <Redirect from={'*'} to={'/'}/>
    </Switch>
  );
}

export default App;
