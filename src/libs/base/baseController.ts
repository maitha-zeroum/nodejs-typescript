import { Request } from 'express'
import { Collection, ObjectId } from 'mongodb'
import { connectMongoDb } from '../MongoDb'

export class BaseController {
  private repository: string

  constructor(repository: string) {
    this.repository = repository
  }

  public async getRepository(): Promise<Collection> {
    const db = await connectMongoDb()
    return db.collection(this.repository)
  }

  public async create(req: Request): Promise<any> {
    const repository = await this.getRepository()
    const now = new Date()
    const rs = await repository.insertOne({
      ...req.body,
      createdAt: now,
      updatedAt: now,
      deletedAt: null
    })

    return repository.findOne({
      _id: rs.insertedId
    })
  }

  public async updateById(req: Request): Promise<any> {
    const repository = await this.getRepository()
    await repository.updateOne({
      _id: new ObjectId(req.params.id)
    }, {
      $set: req.body,
      $currentDate: {
        updatedAt: true
      }
    })
    return repository.findOne({
      _id: new ObjectId(req.params.id)
    })
  }

  public async getAll(req: Request): Promise<any> {
    const repository = await this.getRepository()
    const page = req.query.page ? parseInt(req.query.page.toString(), 10) : 0
    const limit = req.query.limit ? parseInt(req.query.limit.toString(), 10) : 20
    return repository.find({
      deletedAt: null
    }).skip(page).limit(limit).toArray()
  }

  public async getById(req: Request): Promise<any> {
    const repository = await this.getRepository()
    return repository.findOne({
      _id: new ObjectId(req.params.id),
      deletedAt: null
    })
  }

  public async deleteById(req: Request): Promise<any> {
    const repository = await this.getRepository()
    await repository.updateOne({
      _id: new ObjectId(req.params.id)
    }, {
      $currentDate: {
        deletedAt: true
      }
    })
  }
}
