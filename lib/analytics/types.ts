// Activity tracking types and interfaces
export interface ActivityLog {
  _id?: string;
  userId: string;
  fileId?: string;
  action: 'upload' | 'download' | 'view' | 'share' | 'rename' | 'delete' | 'search';
  details?: {
    fileName?: string;
    fileType?: string;
    shareEmails?: string[];
    searchQuery?: string;
    oldName?: string;
    newName?: string;
  };
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
}

export interface SearchHistoryEntry {
  _id?: string;
  userId: string;
  query: string;
  resultCount: number;
  filters?: {
    type?: string[];
    sort?: string;
  };
  timestamp: Date;
}

export interface Notification {
  _id?: string;
  userId: string;
  type: 'file_shared' | 'storage_limit' | 'activity_summary' | 'security_alert';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  timestamp: Date;
  expiresAt?: Date;
}

export interface CacheEntry {
  _id?: string;
  key: string;
  value: any;
  expiresAt: Date;
}

export interface FileTag {
  _id?: string;
  fileId: string;
  userId: string;
  tag: string;
  createdAt: Date;
}

// Analytics aggregation types
export interface UserActivitySummary {
  userId: string;
  period: 'daily' | 'weekly' | 'monthly';
  uploads: number;
  downloads: number;
  views: number;
  shares: number;
  searches: number;
  date: Date;
}

export interface PopularFileType {
  type: string;
  count: number;
  totalSize: number;
}

export interface SearchAnalytics {
  topQueries: Array<{ query: string; count: number }>;
  averageResultCount: number;
  noResultQueries: Array<{ query: string; timestamp: Date }>;
}
