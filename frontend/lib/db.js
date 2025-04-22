// file: lib/db.js

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI; // Use your MongoDB URI from .env
const MONGODB_DB = process.env.MONGODB_DB; // Your database name

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, we use a global variable to prevent repeatedly creating MongoDB client connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's safe to always create a new MongoClient
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client;
}
