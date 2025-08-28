# 🗂️ StoreIt - Cloud Storage Management Platform

<div align="center">
  <p align="center">
    A full-stack cloud storage platform built with Next.js 15, featuring secure OTP authentication, file management, and real-time sharing capabilities.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="Appwrite" />
  </p>

  <p align="center">
    <a href="#-project-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-deployment">Deployment</a> •
    <a href="#-roadmap">Roadmap</a>
  </p>
</div>

---

## 🎯 Project Overview

StoreIt is a modern, full-stack cloud storage management platform built with **Next.js 15** and **Appwrite**. It features secure passwordless authentication, comprehensive file management, and real-time sharing capabilities - all wrapped in a beautiful, responsive interface.

**Perfect for showcasing:**
- Modern web development with Next.js 15 App Router
- Secure authentication patterns with OTP verification
- File upload/management workflows
- Real-time updates and responsive design
- Integration with Backend-as-a-Service platforms

### 🌟 Key Highlights

- **🚀 Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **🔐 Secure Authentication**: Passwordless OTP authentication via email
- **📁 Complete File Management**: Upload, organize, share, and manage files
- **👥 Real-time Sharing**: Email-based file sharing with instant updates
- **📊 Usage Dashboard**: Visual storage usage tracking with interactive charts
- **📱 Responsive Design**: Mobile-first UI with Tailwind CSS and ShadCN components
- **⚡ High Performance**: Server components and optimized file handling

---

## ✨ Current Features

### 🔐 Authentication & Security
- **Passwordless Login**: Secure OTP authentication sent via email
- **Session Management**: Secure cookie-based sessions with auto-expiration
- **Protected Routes**: Route-level protection for authenticated users
- **Account Creation**: Simple signup with email verification

### 📁 File Management
- **📤 File Upload**: Drag & drop interface with real-time progress tracking
- **🗂️ File Organization**: Automatic categorization by type (Documents, Images, Media, Others)
- **�� Search & Filter**: Global search with sorting options (name, date, size)
- **✏️ File Operations**: Rename and delete files with instant UI updates
- **📱 Responsive Grid**: Beautiful file grid that adapts to all screen sizes

### 👥 Sharing & Collaboration
- **📧 Email Sharing**: Share files with others via email addresses
- **🔗 Secure Links**: Generate secure download links for shared files
- **👁️ File Preview**: In-browser preview for images and documents
- **📥 Easy Downloads**: One-click file downloads with proper file types

### 📊 Dashboard & Analytics
- **📈 Usage Overview**: Visual storage usage breakdown by file type
- **📊 Interactive Charts**: Beautiful charts showing storage distribution
- **📋 Recent Activity**: Quick access to recently uploaded files
- **💾 Storage Tracking**: Real-time storage usage with 2GB limit visualization

### 🎨 User Experience
- **🌙 Modern UI**: Clean, professional interface with smooth animations
- **📱 Mobile Responsive**: Full functionality across all devices
- **⚡ Fast Loading**: Optimized with Next.js Server Components
- **🔄 Real-time Updates**: Instant UI updates without page refreshes

---

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Server Components
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first styling framework
- **ShadCN/UI** - Modern, accessible component library
- **Radix UI** - Headless UI primitives for complex components
- **Recharts** - Interactive charts for data visualization
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation

### Backend & Services
- **Appwrite** - Backend-as-a-Service for auth, database, and storage
- **Server Actions** - Type-safe server functions with Next.js
- **File Storage** - Secure file storage with Appwrite buckets

### Development & Deployment
- **Vercel** - Deployment and hosting platform
- **ESLint** - Code linting and quality enforcement
- **Git** - Version control with clean commit history

---

## 🚀 Quick Start

### Prerequisites

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
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your-project-id"
NEXT_PUBLIC_APPWRITE_DATABASE="your-database-id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="your-users-collection-id"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="your-files-collection-id"
NEXT_PUBLIC_APPWRITE_BUCKET="your-bucket-id"
NEXT_APPWRITE_KEY="your-api-key"
\`\`\`

### 4. Appwrite Setup

1. **Create Account**: Sign up at [Appwrite](https://appwrite.io/)
2. **Create Project**: Initialize a new project in your dashboard
3. **Configure Authentication**:
   - Enable Email/Password authentication
   - Set up email templates for OTP
4. **Database Setup**:
   - Create database with two collections:
   - **users**: \`fullName\`, \`email\`, \`avatar\`, \`accountId\`
   - **files**: \`name\`, \`type\`, \`extension\`, \`size\`, \`owner\`, \`users[]\`, \`bucketFileId\`, \`url\`
5. **Storage Setup**:
   - Create storage bucket for file uploads
   - Configure appropriate permissions
6. **Copy Configuration**: Add all IDs to \`.env.local\`

### 5. Run the Application

\`\`\`bash
# Development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Project Structure

\`\`\`
storeit/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes
│   │   ├── sign-in/page.tsx   # Sign-in page
│   │   ├── sign-up/page.tsx   # Sign-up page
│   │   └── layout.tsx         # Auth layout
│   ├── (root)/                # Protected app routes
│   │   ├── page.tsx           # Dashboard homepage
│   │   ├── [type]/page.tsx    # File type pages
│   │   └── layout.tsx         # Main app layout
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                 # Reusable UI components
│   ├── ui/                    # ShadCN component library
│   ├── AuthForm.tsx           # Authentication forms
│   ├── FileUploader.tsx       # File upload component
│   ├── Header.tsx             # App header with search
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── Card.tsx               # File display cards
│   ├── Chart.tsx              # Storage usage chart
│   └── ...                    # Additional components
├── lib/                       # Utility libraries
│   ├── actions/               # Server actions
│   │   ├── file.actions.ts    # File operations
│   │   └── user.actions.ts    # User operations
│   ├── appwrite/              # Appwrite configuration
│   │   ├── config.ts          # Environment config
│   │   └── index.ts           # Client setup
│   └── utils.ts               # Helper functions
├── constants/                 # App constants
├── types/                     # TypeScript definitions
└── public/                    # Static assets
\`\`\`

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**:
   - Import repository at [vercel.com](https://vercel.com)
   - Add environment variables from \`.env.local\`
   - Deploy with automatic builds

3. **Post-Deployment**:
   - Update Appwrite allowed origins with your Vercel domain
   - Test all functionality in production

---

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking
\`\`\`

### Development Workflow

1. Create feature branch from \`main\`
2. Implement changes with proper TypeScript types
3. Test functionality across different file types
4. Commit with descriptive messages
5. Submit pull request with detailed description

---

## 🗺️ Roadmap & Future Features

### 🔄 Phase 2 - Advanced Analytics
- **📊 MongoDB Integration**: Custom analytics database for user insights
- **📈 Activity Tracking**: Track uploads, downloads, views, and shares
- **🔍 Search Analytics**: Monitor search patterns and optimize results
- **📱 Usage Dashboard**: Enhanced dashboard with detailed metrics
- **🚨 Smart Notifications**: Automated alerts for storage and activity

### 🚀 Phase 3 - Collaboration Features
- **👥 Team Workspaces**: Multi-user collaboration spaces
- **🏷️ File Tagging**: Custom tags and advanced organization
- **💬 Comments System**: File-level comments and discussions
- **📝 Version Control**: File versioning and history tracking
- **🔐 Advanced Permissions**: Granular access control and roles

### 🌟 Phase 4 - Advanced Features
- **🔄 Real-time Sync**: Live collaboration and file synchronization
- **📱 Mobile App**: Native mobile applications for iOS/Android
- **🔍 AI-Powered Search**: Intelligent search with content recognition
- **📊 Business Intelligence**: Advanced reporting and analytics
- **🌐 API Access**: RESTful API for third-party integrations

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the Repository**
2. **Create Feature Branch**: \`git checkout -b feature/amazing-feature\`
3. **Make Changes**: Implement your feature
4. **Test Thoroughly**: Ensure everything works
5. **Commit**: \`git commit -m 'feat: add amazing feature'\`
6. **Push**: \`git push origin feature/amazing-feature\`
7. **Open Pull Request**: Submit for review

### Guidelines
- Follow existing code style and conventions
- Add TypeScript types for new features
- Update documentation as needed
- Test across different browsers and devices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Appwrite](https://appwrite.io/)** - Backend-as-a-Service platform
- **[Next.js](https://nextjs.org/)** - React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN/UI](https://ui.shadcn.com/)** - Component library
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## 📞 Contact

**Developer**: Sai Navarasu  
**Repository**: [https://github.com/Sainava/Storage-Management-System](https://github.com/Sainava/Storage-Management-System)  

---

<div align="center">
  <h3>🌟 If you found this project helpful, please give it a star! 🌟</h3>
  <p>Built with ❤️ using Next.js, TypeScript, and Appwrite</p>
  <p><strong>Perfect for showcasing modern full-stack development skills</strong></p>
</div>
