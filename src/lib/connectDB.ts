import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db:Db | null = null;

export const connectDB = async () => {
  if (db) return db;
  try {
    const url = process.env.NEXT_PUBLIC_MONGODB_URL as string;
    const client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("agri_market");
    return db;
  } catch (error) {
    console.log(error);
  }
};
