# 🗂️ StoreIt - Cloud Storage Management Platform

<div align="center">
  <p align="center">
    A full-stack cloud storage platform built with Next.js 15, featuring secure file management, real-time analytics, and seamless collaboration tools.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="Appwrite" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB" />
  </p>

  <p align="center">
    <a href="#-project-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-deployment">Deployment</a>
  </p>
</div>

---

##  Project Overview

StoreIt is a modern, full-stack cloud storage management platform that combines the power of **Appwrite's BaaS** with **custom MongoDB analytics** to deliver enterprise-grade file management capabilities. The platform features secure authentication, real-time file operations, advanced search, and comprehensive usage analytics.

###  Key Highlights

- ** Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- ** Secure Authentication**: Passwordless OTP authentication with session management  
- ** Advanced Analytics**: Custom MongoDB integration for user activity tracking
- **Real-time Operations**: File uploads, sharing, and management with instant updates
- ** Responsive Design**: Mobile-first UI with Tailwind CSS and Radix UI components
- ** Premium UX**: Clean, modern interface with smooth animations and interactions
- **Hybrid Architecture**: BaaS + Custom Backend demonstrating versatile full-stack skills

---

## ✨ Features

### 📁 Core File Management
- **📤 Drag & Drop Uploads** - Seamless file uploading with real-time progress tracking
- **🔍 Advanced Search** - Global search with filtering, sorting, and intelligent suggestions
- **👥 File Sharing** - Email-based sharing with granular permissions and access control
- **✏️ File Operations** - Rename, delete, and organize files with instant feedback
- **📱 Mobile Responsive** - Full functionality across all devices and screen sizes
- **🗂️ File Organization** - Categorized by type (Documents, Images, Media, Others)

### 📊 Analytics & Insights  
- **📈 Usage Dashboard** - Real-time storage usage with interactive visual charts
- **🔥 Activity Tracking** - Monitor uploads, downloads, views, and shares with detailed logs
- **🔍 Search Analytics** - Track search patterns, popular queries, and optimization insights
- **📊 Engagement Metrics** - 7-day activity summaries with trend analysis
- **🚨 Smart Notifications** - Automated alerts for storage limits and sharing activities
- **📝 Audit Logging** - Complete activity trail for security and compliance

### 🔒 Security & Performance
- **🔐 OTP Authentication** - Secure passwordless login with email verification
- **⚡ Optimized Performance** - Server-side rendering with intelligent caching strategies
- **🛡️ Access Control** - Role-based permissions with comprehensive audit logging
- **📈 Scalable Architecture** - Hybrid BaaS + custom backend design for future growth
- **🔒 Session Management** - Secure cookie-based sessions with automatic expiration
- **🚀 Real-time Updates** - Instant UI updates without page refreshes

---

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **React 19** - Latest React features with concurrent rendering capabilities  
- **TypeScript** - Type-safe development with comprehensive IntelliSense
- **Tailwind CSS** - Utility-first styling with custom design system
- **Radix UI** - Accessible, unstyled UI primitives for complex components
- **ShadCN/UI** - Beautiful, reusable component library
- **Recharts** - Interactive charts and data visualization
- **React Hook Form** - Performant forms with built-in validation
- **Zod** - TypeScript-first schema validation

### Backend & Services
- **Appwrite** - Backend-as-a-Service for auth, database, and file storage
- **MongoDB** - Custom analytics database with aggregation pipelines
- **Server Actions** - Type-safe server functions with Next.js integration
- **Node.js** - Server-side JavaScript runtime environment

### Development & Deployment  
- **Vercel** - Serverless deployment and hosting platform
- **ESLint** - Code linting with TypeScript and Next.js rules
- **Prettier** - Automated code formatting and style consistency
- **Git** - Version control with conventional commit patterns

---

## 🏗 Architecture

### Hybrid Backend Architecture

The project implements a hybrid architecture combining the best of both worlds:

**Appwrite BaaS for Core Features:**
-  Rapid development with production-ready authentication and storage
-  Built-in security, data validation, and real-time capabilities
-  Scalable infrastructure without DevOps complexity
-  File management with automatic CDN distribution

**MongoDB for Advanced Analytics:**
-  Custom user activity tracking and behavioral analytics
-  Complex aggregation pipelines for business intelligence
-  Search optimization and query performance insights  
-  Demonstrates advanced full-stack backend capabilities

**Next.js 15 Modern Architecture:**
-  Server Components for optimal performance and SEO
-  Server Actions for type-safe, secure API communication
-  App Router for intuitive, nested routing patterns
-  Streaming and Suspense for enhanced user experience

---

##  Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0  
- **Git** for version control

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Sainava/Storage-Management-System.git
cd Storage-Management-System
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Environment Setup

Create \`.env.local\` in the root directory:

\`\`\`env
# Appwrite Configuration (Required)
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"  
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your-users-collection-id"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your-files-collection-id"
NEXT_PUBLIC_APPWRITE_BUCKET="your-bucket-id"
NEXT_APPWRITE_KEY="your-api-key"

# MongoDB Analytics (Optional - enhances analytics features)
MONGODB_URI="mongodb://localhost:27017"
MONGODB_ANALYTICS_DB="storeit_analytics"
\`\`\`

### 4. Appwrite Setup

1. **Create Account**: Sign up at [Appwrite](https://appwrite.io/)
2. **Create Project**: Initialize a new project in your dashboard
3. **Configure Authentication**: 
   - Enable Email/Password authentication
   - Set up OTP email templates
4. **Database Setup**:
   - Create database and configure collections:
     - **users**: \`fullName\`, \`email\`, \`avatar\`, \`accountId\`
     - **files**: \`name\`, \`type\`, \`extension\`, \`size\`, \`owner\`, \`users[]\`, \`bucketFileId\`, \`url\`
5. **Storage Configuration**:
   - Create storage bucket for file uploads
   - Set appropriate read/write permissions
6. **Environment Variables**: Copy all configuration IDs to \`.env.local\`

### 5. MongoDB Setup (Optional - Enhances Analytics)

**Option A: Local Development**
\`\`\`bash
# Using Docker (Recommended)
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or install locally on macOS  
brew install mongodb-community
brew services start mongodb-community
\`\`\`

**Option B: MongoDB Atlas (Production)**
1. Create free account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create new cluster (free tier available)
3. Configure network access and database user
4. Copy connection string to \`MONGODB_URI\`

### 6. Run the Application

\`\`\`bash
# Development server
npm run dev

# Production build
npm run build && npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

\`\`\`
storeit/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes (sign-in, sign-up)
│   │   ├── sign-in/page.tsx   # Sign-in page
│   │   ├── sign-up/page.tsx   # Sign-up page  
│   │   └── layout.tsx         # Auth layout with branding
│   ├── (root)/                # Protected application routes
│   │   ├── page.tsx           # Dashboard homepage
│   │   ├── [type]/page.tsx    # Dynamic file type pages
│   │   └── layout.tsx         # Main app layout with navigation
│   ├── globals.css            # Global styles and utility classes
│   └── layout.tsx             # Root layout with fonts and metadata
├── components/                 # Reusable UI components
│   ├── ui/                    # ShadCN UI component library
│   ├── AnalyticsDashboard.tsx # MongoDB analytics dashboard
│   ├── FileUploader.tsx       # Drag & drop file upload
│   ├── Header.tsx             # App header with search and actions
│   ├── Sidebar.tsx            # Navigation sidebar
│   └── ...                    # Additional feature components
├── lib/                       # Utility libraries and configurations  
│   ├── actions/               # Server actions for data operations
│   │   ├── file.actions.ts    # File management operations
│   │   └── user.actions.ts    # User authentication operations
│   ├── analytics/             # MongoDB analytics integration
│   │   ├── mongodb.ts         # Database connection and collections
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── actions.ts         # Analytics server actions
│   ├── appwrite/              # Appwrite BaaS configuration
│   │   ├── config.ts          # Environment configuration
│   │   └── index.ts           # Client initialization
│   └── utils.ts               # Helper functions and utilities
├── constants/                 # Application constants and configuration
│   └── index.ts               # Navigation items, action types, etc.
├── types/                     # TypeScript type definitions
│   └── index.d.ts             # Global type declarations
├── public/                    # Static assets
│   ├── assets/                # Icons, images, and media files
│   └── readme/                # Documentation assets
└── Configuration files
    ├── next.config.ts         # Next.js configuration
    ├── tailwind.config.ts     # Tailwind CSS configuration
    ├── tsconfig.json          # TypeScript configuration
    └── package.json           # Dependencies and scripts
\`\`\`

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Prepare Repository**
   \`\`\`bash
   git add .
   git commit -m "feat: initial deployment"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Import your GitHub repository at [Vercel](https://vercel.com)
   - Configure environment variables from \`.env.local\`  
   - Deploy with automatic builds and previews

3. **Post-Deployment Configuration**
   - Update Appwrite allowed origins with your Vercel domain
   - Test all functionality in production environment
   - Configure custom domain (optional)

### Manual Deployment

\`\`\`bash
# Build optimized production bundle
npm run build

# Start production server
npm start

# Test production build locally
npm run build && npm run start
\`\`\`

### Environment Variables Checklist

Ensure all required environment variables are configured in your deployment platform:

-  All Appwrite configuration variables
-  MongoDB URI (if using analytics features)  
-  Any additional API keys or secrets

---

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server with hot reloading
npm run build        # Build optimized production bundle
npm run start        # Start production server  
npm run lint         # Run ESLint code analysis
npm run lint:fix     # Automatically fix linting issues
npm run type-check   # Run TypeScript compiler checks
\`\`\`

### Code Quality Standards

- **ESLint**: Comprehensive linting with Next.js, React, and TypeScript rules
- **Prettier**: Consistent code formatting across the entire codebase
- **TypeScript**: Strict type checking for improved code reliability  
- **Conventional Commits**: Structured commit messages for better project history

### Development Workflow

1. **Feature Development**: Create feature branch from \`main\`
2. **Code Quality**: Run linting and type checking before commits
3. **Testing**: Test functionality across different file types and user scenarios
4. **Documentation**: Update README and code comments as needed
5. **Pull Request**: Submit PR with descriptive title and detailed description

---

## 📊 MongoDB Analytics Features

The optional MongoDB integration provides powerful analytics capabilities that complement the core Appwrite functionality:

### 🔍 Activity Tracking
- **User Actions**: Comprehensive logging of uploads, downloads, views, and shares
- **File Analytics**: Track individual file engagement and popularity
- **Search Behavior**: Monitor search queries, results, and user patterns
- **Performance Metrics**: Response times and system usage statistics

### 📈 Business Intelligence  
- **Usage Trends**: 7-day, monthly, and custom date range analytics
- **Storage Insights**: Track storage consumption patterns by file type
- **User Engagement**: Identify most active users and engagement patterns
- **Search Optimization**: Analyze query performance and suggest improvements

###  Advanced Features
- **Real-time Dashboard**: Live activity feed and engagement metrics
- **Custom Reports**: Generate detailed analytics for specific time periods
- **Data Export**: Export analytics data for external analysis
- **Notification System**: Automated alerts based on usage patterns

###  Future Enhancements
- **Team Collaboration Analytics**: Multi-user workspace insights
- **Performance Optimization**: Identify and resolve bottlenecks
- **Advanced Segmentation**: User behavior analysis and targeting
- **Custom Dashboard Builder**: User-configurable analytics views

---
## 🙏 Acknowledgments

Special thanks to the amazing open-source projects and services that made this project possible:

- **[Appwrite](https://appwrite.io/)** - Comprehensive Backend-as-a-Service platform
- **[Next.js](https://nextjs.org/)** - The React framework for production applications
- **[MongoDB](https://www.mongodb.com/)** - Document database for modern applications
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework  
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI component primitives
- **[ShadCN/UI](https://ui.shadcn.com/)** - Beautiful and accessible component library
- **[Vercel](https://vercel.com/)** - Platform for frontend frameworks and static sites
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript

---


