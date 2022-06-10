import { Schema, Model, ObjectId, model, connect, Mongoose } from 'mongoose'

const DISCONNECTED: number = 0
const DISCONNECTING: number = 3

export class Connect {
  static #db: Mongoose

  static get domain(): string {
    return !process.env.MONGO_DOMAIN ? '' : process.env.MONGO_DOMAIN
  }

  static get port(): string {
    return !process.env.MONGO_PORT ? '' : process.env.MONGO_PORT
  }

  static get db(): string {
    return !process.env.MONGO_DB ? '' : process.env.MONGO_DB
  }

  static get uri(): string {
    return `mongodb://${ this.domain }:${ this.port }/${ this.db }`
  }

  static get #readyState(): number {
    return this.#db.connection?.readyState
  }

  static get #isDisconnecting(): boolean {
    return this.#readyState === DISCONNECTING
  }

  static get #isDisconnected(): boolean {
    return this.#readyState === DISCONNECTED
  }

  static async #init(): Promise<void> {
    if(!this.#db || this.#isDisconnecting || this.#isDisconnected)
      this.#db = await connect(this.uri)

    return
  }

  static async getDb(): Promise<Mongoose> {
    await this.#init()

    return this.#db
  }
}

export interface InterfaceHero {
  id: ObjectId
  name: string
}

export class Hero {
  static #schema: Schema<InterfaceHero> | null
  static #model: Model<InterfaceHero> | null

  static async #init() {
    if(!this.#schema) this.#schema = new Schema<InterfaceHero>({
      name: { type: String, required: true }
    }, {
     _id: false,
      id: true
    })

    if(!this.#model)
      this.#model = model<InterfaceHero>('Hero', this.#schema)

    await Connect.getDb()

    return
  }

  async create(name: string): InterfaceHero {
    // TODO:  Create Method
    return {
      id: 'ObjectId62967e559eae0132948b4b7b',
      name: ''
    }
  }

  async read(id: ObjectId): Model | null {
    // TODO:  Read Method
    return null
  }

  async update(id: ObjectId): Model | null {
    // TODO:  Update Method
  }

  async delete(id: ObjectId): boolean {
    // TODO:  Delete Method
  }
}
