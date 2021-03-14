import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl.js';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObejctId, postsCtrl.read);
posts.delete('/:id', postsCtrl.checkObejctId, postsCtrl.remove);
posts.patch('/:id', postsCtrl.checkObejctId, postsCtrl.update);

export default posts;