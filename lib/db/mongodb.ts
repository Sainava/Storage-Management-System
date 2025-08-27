import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// Database and collection helpers
export const getDatabase = async () => {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB_NAME || 'storeit');
};

export const getUsersCollection = async () => {
  const db = await getDatabase();
  return db.collection('users');
};

export const getFilesCollection = async () => {
  const db = await getDatabase();
  return db.collection('files');
};

// Initialize indexes (run this once in production or during deployment)
export const initializeIndexes = async () => {
  const db = await getDatabase();
  
  // Users collection indexes
  const usersCollection = db.collection('users');
  await usersCollection.createIndex({ email: 1 }, { unique: true });
  await usersCollection.createIndex({ accountId: 1 }, { unique: true });
  
  // Files collection indexes
  const filesCollection = db.collection('files');
  await filesCollection.createIndex({ ownerId: 1 });
  await filesCollection.createIndex({ users: 1 });
  await filesCollection.createIndex({ type: 1 });
  await filesCollection.createIndex({ name: 1 });
  await filesCollection.createIndex({ createdAt: -1 });
  await filesCollection.createIndex({ size: -1 });
  await filesCollection.createIndex({ ownerId: 1, type: 1 });
  
  console.log('Database indexes initialized');
};
