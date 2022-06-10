"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
const mongoose_1 = require("mongoose");
const DISCONNECTED = 0;
const DISCONNECTING = 3;
class Connect {
    static #db;
    static get domain() {
        return !process.env.MONGO_DOMAIN ? '' : process.env.MONGO_DOMAIN;
    }
    static get port() {
        return !process.env.MONGO_PORT ? '' : process.env.MONGO_PORT;
    }
    static get db() {
        return !process.env.MONGO_DB ? '' : process.env.MONGO_DB;
    }
    static get uri() {
        return `mongodb://${this.domain}:${this.port}/${this.db}`;
    }
    static get #readyState() {
        return this.#db.connection?.readyState;
    }
    static get #isDisconnecting() {
        return this.#readyState === DISCONNECTING;
    }
    static get #isDisconnected() {
        return this.#readyState === DISCONNECTED;
    }
    static async #init() {
        if (!this.#db || this.#isDisconnecting || this.#isDisconnected)
            this.#db = await (0, mongoose_1.connect)(this.uri);
        return;
    }
    static async getDb() {
        await this.#init();
        return this.#db;
    }
}
exports.Connect = Connect;
