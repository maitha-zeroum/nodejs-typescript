import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'

export class Express {
  public port: number
  public app: any

  constructor() {
    const app = express()
    this.port = parseInt(process.env.NODE_PORT, 10) || 8000
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
    this.app = app
  }
}
