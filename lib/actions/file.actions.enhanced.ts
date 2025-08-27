"use server";

// Enhanced file actions that integrate with MongoDB analytics
// These wrap your existing Appwrite actions to add tracking

import { 
  uploadFile as originalUploadFile,
  getFiles as originalGetFiles,
  renameFile as originalRenameFile,
  updateFileUsers as originalUpdateFileUsers,
  deleteFile as originalDeleteFile
} from '@/lib/actions/file.actions';

import { logActivity, logSearchQuery } from '@/lib/analytics/actions';

// Enhanced upload with activity logging
export const uploadFileWithAnalytics = async (props: UploadFileProps) => {
  try {
    const result = await originalUploadFile(props);
    
    // Log the upload activity
    if (result) {
      await logActivity({
        action: 'upload',
        fileId: result.$id,
        details: {
          fileName: result.name,
          fileType: result.type,
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

// Enhanced file search with analytics
export const getFilesWithAnalytics = async (props: GetFilesProps) => {
  try {
    const result = await originalGetFiles(props);
    
    // Log search activity if there's a search text
    if (props.searchText) {
      await logSearchQuery(
        props.searchText, 
        result.total || 0,
        {
          types: props.types,
          sort: props.sort,
        }
      );
      
      await logActivity({
        action: 'search',
        details: {
          searchQuery: props.searchText,
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('Search failed:', error);
    throw error;
  }
};

// Enhanced rename with activity logging
export const renameFileWithAnalytics = async (props: RenameFileProps) => {
  try {
    const result = await originalRenameFile(props);
    
    // Log the rename activity
    if (result) {
      await logActivity({
        action: 'rename',
        fileId: props.fileId,
        details: {
          oldName: result.name.replace(`.${props.extension}`, ''),
          newName: props.name,
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('Rename failed:', error);
    throw error;
  }
};

// Enhanced sharing with activity logging
export const updateFileUsersWithAnalytics = async (props: UpdateFileUsersProps) => {
  try {
    const result = await originalUpdateFileUsers(props);
    
    // Log the sharing activity
    if (result) {
      await logActivity({
        action: 'share',
        fileId: props.fileId,
        details: {
          fileName: result.name,
          shareEmails: props.emails,
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('Share failed:', error);
    throw error;
  }
};

// Enhanced delete with activity logging
export const deleteFileWithAnalytics = async (props: DeleteFileProps) => {
  try {
    const result = await originalDeleteFile(props);
    
    // Log the delete activity
    if (result) {
      await logActivity({
        action: 'delete',
        fileId: props.fileId,
        details: {
          // Note: file name not available after deletion
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('Delete failed:', error);
    throw error;
  }
};

// New action: Log file view/download
export const logFileAccess = async (fileId: string, fileName: string, action: 'view' | 'download') => {
  try {
    await logActivity({
      action,
      fileId,
      details: {
        fileName,
      }
    });
  } catch (error) {
    console.error(`Failed to log ${action}:`, error);
  }
};
