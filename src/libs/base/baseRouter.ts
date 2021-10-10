import { Request, Response, Router } from 'express'
import { Logger } from '../Logger'

export class BaseRouter {
  public controller: any
  public r: Router
  public name: string

  constructor(name: string, controller: any) {
    this.name = name
    this.controller = controller
    this.r = Router()

    this.r.route(`/api/${this.name}`)
      .post(async (req: Request, res: Response) => {
        try {
          Logger.info(`${this.name}_POST_BEGIN`, 'request begin', req.body)
          const response = await this.controller.create(req)
          Logger.info(`${this.name}_POST_END`, 'request ended', response)
          res.status(200).json(response)
        } catch (error) {
          Logger.error(`${this.name}_POST_ERROR`, 'internal server error', error)
          res.status(500).json(error)
        }
      })
      .get(async (req: Request, res: Response) => {
        try {
          Logger.info(`${this.name}_GET_BEGIN`, 'request begin', req.body)
          const response = await this.controller.getAll(req)
          Logger.info(`${this.name}_GET_END`, 'request ended', response)
          res.status(200).json(response)
        } catch (error) {
          Logger.error(`${this.name}_GET_ERROR`, 'internal server error', error)
          res.status(500).json(error)
        }
      })
    this.r.route(`/api/${this.name}/:id`)
      .put(async (req: Request, res: Response) => {
        try {
          Logger.info(`${this.name}_PUT_BEGIN`, 'request begin', req.body)
          const response = await this.controller.updateById(req)
          Logger.info(`${this.name}_PUT_END`, 'request ended', response)
          res.status(200).json(response)
        } catch (error) {
          Logger.error(`${this.name}_PUT_ERROR`, 'internal server error', error)
          res.status(500).json(error)
        }
      })
      .get(async (req: Request, res: Response) => {
        try {
          Logger.info(`${this.name}_GET_BY_ID_BEGIN`, 'request begin', req.body)
          const response = await this.controller.getById(req)
          Logger.info(`${this.name}_GET_BY_ID_END`, 'request ended', response)
          res.status(200).json(response)
        } catch (error) {
          Logger.error(`${this.name}_GET_BY_ID_ERROR`, 'internal server error', error)
          res.status(500).json(error)
        }
      })
      .delete(async (req: Request, res: Response) => {
        try {
          Logger.info(`${this.name}_DELETE_BY_ID_BEGIN`, 'request begin', req.body)
          const response = await this.controller.deleteById(req)
          Logger.info(`${this.name}_DELETE_BY_ID_END`, 'request ended', response)
          res.status(200).json(response)
        } catch (error) {
          Logger.error(`${this.name}_DELETE_BY_ID_ERROR`, 'internal server error', error)
          res.status(500).json(error)
        }
      })
  }
}
