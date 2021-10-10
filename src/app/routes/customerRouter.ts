import { BaseRouter } from '../../libs/base'
import { CustomerController } from '../controllers/customerController'

export class CustomerRouter extends BaseRouter {
  constructor() {
    super('customers', new CustomerController())
  }
}
