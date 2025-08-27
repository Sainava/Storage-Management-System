"use server";

import { getActivityLogsCollection, getSearchHistoryCollection, getNotificationsCollection } from '@/lib/analytics/mongodb';
import type { ActivityLog, SearchHistoryEntry, Notification } from '@/lib/analytics/types';
import { getCurrentUser } from '@/lib/actions/user.actions';

// Activity Logging
export const logActivity = async (activity: Omit<ActivityLog, 'userId' | 'timestamp'>) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return;

    const collection = await getActivityLogsCollection();
    const activityLog: ActivityLog = {
      ...activity,
      userId: currentUser.$id,
      timestamp: new Date(),
    };

    await collection.insertOne(activityLog);
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
};

export const getUserActivityLogs = async (limit = 50) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const collection = await getActivityLogsCollection();
    const logs = await collection
      .find({ userId: currentUser.$id })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return logs;
  } catch (error) {
    console.error('Failed to get activity logs:', error);
    return [];
  }
};

export const getFileActivityLogs = async (fileId: string, limit = 20) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const collection = await getActivityLogsCollection();
    const logs = await collection
      .find({ 
        fileId,
        userId: currentUser.$id 
      })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return logs;
  } catch (error) {
    console.error('Failed to get file activity logs:', error);
    return [];
  }
};

// Search History
export const logSearchQuery = async (query: string, resultCount: number, filters?: any) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return;

    const collection = await getSearchHistoryCollection();
    const searchEntry: SearchHistoryEntry = {
      userId: currentUser.$id,
      query,
      resultCount,
      filters,
      timestamp: new Date(),
    };

    await collection.insertOne(searchEntry);
  } catch (error) {
    console.error('Failed to log search query:', error);
  }
};

export const getSearchHistory = async (limit = 20) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const collection = await getSearchHistoryCollection();
    const history = await collection
      .find({ userId: currentUser.$id })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return history;
  } catch (error) {
    console.error('Failed to get search history:', error);
    return [];
  }
};

export const getPopularSearchQueries = async (limit = 10) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const collection = await getSearchHistoryCollection();
    const pipeline = [
      { $match: { userId: currentUser.$id } },
      { $group: { _id: '$query', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: limit },
      { $project: { query: '$_id', count: 1, _id: 0 } }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    return results;
  } catch (error) {
    console.error('Failed to get popular search queries:', error);
    return [];
  }
};

// Notifications
export const createNotification = async (notification: Omit<Notification, 'timestamp' | 'read'>) => {
  try {
    const collection = await getNotificationsCollection();
    const newNotification: Notification = {
      ...notification,
      read: false,
      timestamp: new Date(),
    };

    const result = await collection.insertOne(newNotification);
    return result.insertedId;
  } catch (error) {
    console.error('Failed to create notification:', error);
    return null;
  }
};

export const getUserNotifications = async (limit = 50) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return [];

    const collection = await getNotificationsCollection();
    const notifications = await collection
      .find({ userId: currentUser.$id })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return notifications;
  } catch (error) {
    console.error('Failed to get notifications:', error);
    return [];
  }
};

export const markNotificationAsRead = async (notificationId: string) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return false;

    const collection = await getNotificationsCollection();
    const result = await collection.updateOne(
      { _id: notificationId, userId: currentUser.$id },
      { $set: { read: true } }
    );

    return result.modifiedCount > 0;
  } catch (error) {
    console.error('Failed to mark notification as read:', error);
    return false;
  }
};

// Analytics aggregations
export const getDashboardAnalytics = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return null;

    const collection = await getActivityLogsCollection();
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const pipeline = [
      { 
        $match: { 
          userId: currentUser.$id,
          timestamp: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: '$action',
          count: { $sum: 1 }
        }
      }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    
    const analytics = results.reduce((acc, item) => {
      acc[item._id] = item.count;
      return acc;
    }, {});

    return {
      uploads: analytics.upload || 0,
      downloads: analytics.download || 0,
      views: analytics.view || 0,
      shares: analytics.share || 0,
      searches: analytics.search || 0,
    };
  } catch (error) {
    console.error('Failed to get dashboard analytics:', error);
    return null;
  }
};
