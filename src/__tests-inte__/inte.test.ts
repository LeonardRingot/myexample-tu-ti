import { Collection, Db, Document, MongoClient } from "mongodb";
import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import { connectToDb } from "../connect";

let connection;
let clientMongo: MongoClient;

beforeAll(async () => {
    connection = await connectToDb();
    const uri = "mongodb+srv://project_test:94hwAsMoM0E98wpo@cluster0.wihxaix.mongodb.net/?retryWrites=true&w=majority";
    clientMongo = await MongoClient.connect(uri);
})

describe("POST / - set a point", () => {
    it("set a point", async () => {
        const result = await request(app).post("/api/v1/point").send({ "lieu": "La cabane à bouc" }).set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        const collection = await getCollection('points', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['lieu']).toEqual("La cabane à bouc")
        expect(result.body.lieu).toEqual("La cabane à bouc");
        expect(result.statusCode).toEqual(200);
    });


    it("set an already existing point", async () => {
        const result = await request(app).post("/api/v1/point")
            .send({ "lieu": "La cabane à bouc" })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        expect(result.statusCode).toEqual(500);

    });
});

describe("GET / - retrieve list of points", () => {
    it("get list of points", async () => {
        const result = await request(app).get("/api/v1/point");

        const collection = await getCollection('points', clientMongo);
        const resultToCheck: Document | null = await collection.findOne();

        expect(resultToCheck!['lieu']).toEqual("La cabane à bouc")
        expect(result.body[0].lieu).toEqual("La cabane à bouc");
        expect(result.statusCode).toEqual(200);
    });
});

afterAll(async () => {
    await mongoose.connections[0].db.dropCollection('points');
    await mongoose.connections[0].db.dropCollection('exemplaires');
    await mongoose.disconnect()
    await clientMongo.close();

})

/**
 * 
 * @param coll 
 * @param client 
 * @returns 
 */
async function getCollection(coll: string, client: MongoClient): Promise<Collection> {
    const url = 'mongodb+srv://project_test:94hwAsMoM0E98wpo@cluster0.wihxaix.mongodb.net/'
    const db = client.db(process.env.MONGO_DB_NAME);
    const collection = db.collection(coll)
    return collection;
}

