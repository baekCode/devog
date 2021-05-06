import Router from 'koa-router';
import * as aboutCtrl from './about.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js';

const about = new Router();

about.get('/', aboutCtrl.read);
about.post('/', checkLoggedIn, aboutCtrl.write);
about.delete('/', checkLoggedIn, aboutCtrl.checkOwnAbout, aboutCtrl.remove);
about.patch('/', checkLoggedIn, aboutCtrl.checkOwnAbout, aboutCtrl.update);

export default about;