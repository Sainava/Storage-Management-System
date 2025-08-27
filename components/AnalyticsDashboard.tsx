import React from "react";
import { getDashboardAnalytics, getUserActivityLogs } from "@/lib/analytics/actions";
import { formatDateTime } from "@/lib/utils";

const AnalyticsDashboard = async () => {
  const [analytics, recentActivity] = await Promise.all([
    getDashboardAnalytics(),
    getUserActivityLogs(10)
  ]);

  if (!analytics) return null;

  return (
    <div className="space-y-6">
      {/* Activity Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-sm text-gray-500">Uploads (7d)</h4>
          <p className="text-2xl font-bold text-green-600">{analytics.uploads}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-sm text-gray-500">Downloads (7d)</h4>
          <p className="text-2xl font-bold text-blue-600">{analytics.downloads}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-sm text-gray-500">Views (7d)</h4>
          <p className="text-2xl font-bold text-purple-600">{analytics.views}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-sm text-gray-500">Shares (7d)</h4>
          <p className="text-2xl font-bold text-orange-600">{analytics.shares}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-sm text-gray-500">Searches (7d)</h4>
          <p className="text-2xl font-bold text-red-600">{analytics.searches}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="h4 text-light-100 mb-4">Recent Activity</h3>
        {recentActivity.length > 0 ? (
          <div className="space-y-3">
            {recentActivity.map((activity: any, index: number) => (
              <div key={index} className="flex items-center gap-3 p-2 border-b border-gray-100 last:border-0">
                <div className={`w-2 h-2 rounded-full ${
                  activity.action === 'upload' ? 'bg-green-500' :
                  activity.action === 'download' ? 'bg-blue-500' :
                  activity.action === 'view' ? 'bg-purple-500' :
                  activity.action === 'share' ? 'bg-orange-500' :
                  activity.action === 'search' ? 'bg-red-500' :
                  'bg-gray-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium capitalize">{activity.action}</span>
                    {activity.details?.fileName && (
                      <span className="text-gray-600"> • {activity.details.fileName}</span>
                    )}
                    {activity.details?.searchQuery && (
                      <span className="text-gray-600"> • "{activity.details.searchQuery}"</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDateTime(activity.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No recent activity</p>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
