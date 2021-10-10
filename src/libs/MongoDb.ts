import { MongoClient, Db } from 'mongodb'
import { Logger } from './Logger'

let mongoConnection: MongoClient | null = null

export const connectMongoDb = async (): Promise<Db> => {
  try {
    const uri = 'mongodb+srv://maitha:aula1234@cognitionsystem.xodhy.mongodb.net/maitha?retryWrites=true&w=majority'

    if (!mongoConnection) {
      mongoConnection = await MongoClient.connect(uri)
      Logger.info('MONGO_CONNECT_SUCCESS', 'Mongo connected')
    }

    return mongoConnection.db()
  } catch (error) {
    Logger.error('MONGO_CONNECTION_ERROR', 'Can\'t connect mongodb', error)
  }
}
