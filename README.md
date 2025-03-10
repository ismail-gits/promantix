# 🏗️ Promantix

![Project Banner](https://via.placeholder.com/1000x300.png?text=Project+Management+System)

> **A modern project management system inspired by Jira, built with Next.js, Hono, Prisma, PostgreSQL, Appwrite, and Turborepo.**

## 🚀 Features
- 🏗 **Project & Task Management** (Create, update, delete projects & tasks)
- 🔐 **User Authentication** (Sign up, login via Appwrite)
- 📊 **Kanban Board** (Drag-and-drop tasks)
- 🔄 **Real-time Updates** (WebSockets or polling for live collaboration)
- 🎨 **Modern UI** (ShadCN UI with TailwindCSS)
- ⚡ **API with Hono** (Fast, lightweight backend)
- 💾 **PostgreSQL with Prisma** (Relational DB for structured data)
- ☁ **Monorepo with Turborepo** (Optimized for scalability)

## 🏗️ Tech Stack
| **Technology** | **Usage** |
|--------------|----------|
| **Next.js** | Frontend framework |
| **Hono** | Backend API |
| **Prisma + PostgreSQL** | Database (ORM & SQL) |
| **Appwrite** | User authentication |
| **ShadCN UI** | UI components |
| **Turborepo** | Monorepo structure |
| **TailwindCSS** | Styling framework |
| **Vercel** | Deployment |
| **Railway/Supabase** | PostgreSQL hosting |

## 📂 Project Structure
```bash
project-management-system/
├── apps/
│   ├── web/        # Next.js frontend (ShadCN UI, connects to API)
│   ├── api/        # Hono backend (handles Prisma + PostgreSQL)
│
├── packages/
│   ├── ui/         # Shared ShadCN UI components
│   ├── lib/        # Shared utilities (hooks, validation, API clients)
│   ├── types/      # Shared TypeScript types (Project, Task, User)
│
├── prisma/         # Database schema & migrations
├── turbo.json      # Turborepo config
├── package.json
└── tsconfig.json
```

## 🛠️ Installation & Setup
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/project-management-system.git
cd project-management-system
```

### 2️⃣ **Install Dependencies**
```sh
pnpm install  # or yarn install / npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file and add:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
```

### 4️⃣ **Run Database Migrations**
```sh
npx prisma migrate dev --name init
```

### 5️⃣ **Start the Development Server**
```sh
pnpm dev  # Runs both frontend & backend using Turborepo
```

## 🚀 Deployment
### **Frontend (Vercel)**
```sh
git push origin main  # Vercel auto-deploys Next.js
```
### **Backend (Railway/Supabase)**
- **Railway:** [https://railway.app/](http