import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('MongoDB URI is required for analytics features');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Analytics Database (separate from Appwrite)
export const getAnalyticsDB = async () => {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_ANALYTICS_DB || 'storeit_analytics');
};

// Collections for additional features
export const getActivityLogsCollection = async () => {
  const db = await getAnalyticsDB();
  return db.collection('activity_logs');
};

export const getSearchHistoryCollection = async () => {
  const db = await getAnalyticsDB();
  return db.collection('search_history');
};

export const getNotificationsCollection = async () => {
  const db = await getAnalyticsDB();
  return db.collection('notifications');
};

export const getCacheCollection = async () => {
  const db = await getAnalyticsDB();
  return db.collection('cache');
};

export const getFileTagsCollection = async () => {
  const db = await getAnalyticsDB();
  return db.collection('file_tags');
};

// Initialize indexes for analytics collections
export const initializeAnalyticsIndexes = async () => {
  const db = await getAnalyticsDB();
  
  // Activity logs indexes
  const activityLogs = db.collection('activity_logs');
  await activityLogs.createIndex({ userId: 1, timestamp: -1 });
  await activityLogs.createIndex({ fileId: 1, timestamp: -1 });
  await activityLogs.createIndex({ action: 1, timestamp: -1 });
  await activityLogs.createIndex({ timestamp: -1 });
  
  // Search history indexes
  const searchHistory = db.collection('search_history');
  await searchHistory.createIndex({ userId: 1, timestamp: -1 });
  await searchHistory.createIndex({ query: 'text' });
  
  // Notifications indexes
  const notifications = db.collection('notifications');
  await notifications.createIndex({ userId: 1, read: 1, timestamp: -1 });
  await notifications.createIndex({ timestamp: -1 });
  
  // Cache indexes
  const cache = db.collection('cache');
  await cache.createIndex({ key: 1 }, { unique: true });
  await cache.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
  
  // File tags indexes
  const fileTags = db.collection('file_tags');
  await fileTags.createIndex({ fileId: 1 });
  await fileTags.createIndex({ tag: 1 });
  await fileTags.createIndex({ userId: 1, tag: 1 });
  
  console.log('Analytics database indexes initialized');
};
