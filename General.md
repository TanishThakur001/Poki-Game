# PokiGame

A full-stack web application with a React frontend and Node.js/Express backend using Prisma ORM.

## Project Structure

- `client/` – React frontend (Vite + TypeScript)
- `server/` – Node.js backend (Express + Prisma)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Setup

#### 1. Clone the repository

```bash
git clone <your-repo-url>
cd PokiGame
```

#### 2. Install dependencies

```bash
cd client
npm install
cd ../server
npm install
```

#### 3. Set up environment variables

- Copy `.env.example` to `.env` in both `client/` and `server/` and fill in the required values.

#### 4. Set up the database (for server)

```bash
cd server
npx prisma migrate dev
```

#### 5. Run the applications

- **Client:**
  ```bash
  cd client
  npm run dev
  ```
- **Server:**
  ```bash
  cd server
  npm run dev
  ```

## License

Specify your license here (e.g., MIT, Apache 2.0, etc.)
