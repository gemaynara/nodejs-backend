import {Router} from 'express';

const router = Router();

import {createUsers, getUsers} from '../controllers/users.controller';

router.route('/')
      .get(getUsers)


export default router;