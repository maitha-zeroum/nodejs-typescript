import {
  Response,
  Request,
  Router
} from 'express'
import { IndexController } from '../controllers/indexController'

export class IndexRouter {
  public r: Router

  constructor() {
    const controller = new IndexController()
    this.r = Router()
    this.r.route('*').get((req: Request, res: Response) => {
      res.status(200).json(controller.defaultRoute())
    })
  }
}
