import { BaseRouter } from '../../libs/base'
import { UserController } from '../controllers/UserController'

export class UserRouter extends BaseRouter {
  constructor() {
    super('users', new UserController())
  }
}
