import { IndexRouterType } from '../../types'

export class IndexController {

  public defaultRoute(): IndexRouterType {
    return {
      message: 'Hello world'
    }
  }
}
