import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import * as routers from '../app/routes'
import { connectMongoDb } from './MongoDb'

export class Express {
  public port: number
  public app: any

  constructor() {
    const app = express()
    this.port = process.env.NODE_PORT ? parseInt(process.env.NODE_PORT, 10) : 8000
    app.set('port', this.port)
    app.use(express.static('./public'))
    // tslint:disable-next-line: deprecation
    app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true }))
    // tslint:disable-next-line: deprecation
    app.use(bodyParser.json({ limit: '1024mb' }))
    app.use(methodOverride())
    app.use(cors())
    app.use(helmet())
    app.use(compression())
    app.use(new routers.CustomerRouter().r)
    app.use(new routers.UserRouter().r)
    app.use(new routers.IndexRouter().r)

    connectMongoDb()
    this.app = app
  }
}
