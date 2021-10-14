import { BaseController } from '../../libs/base'

export class UserController extends BaseController {
  constructor() {
    super('users')
  }

  public ping(): string {
    return 'pong'
  }
}
