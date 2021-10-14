import { BaseRouter } from '../../libs/base'
import { UserController } from '../controllers/userController'

export class UserRouter extends BaseRouter {
  constructor() {
    super('users', new UserController())
    this.r.route('/api/users/others/ping').get(async (req, res) => {
      res.status(200).json({
        message: new UserController().ping()
      })
    })
  }
}
