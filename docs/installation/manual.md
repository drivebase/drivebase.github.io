---
outline: deep
---

# Manual Installation

You can install Drivebase manually on your local machine or on a server.

## Prerequisites

- Node.js (20+)
- pnpm (9+)
- PostgreSQL

## Installation

1. Clone the repository

```bash
git clone https://github.com/drivebase/drivebase.git
```

2. Install the dependencies

```bash
pnpm install
```

3. Create a `.env` file and paste the following code into it:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
AUTH_SECRET=your-secret-key
```

4. Run the following command to migrate the database:

```bash
pnpm prisma migrate dev
```

5. And finally, run the following command to start the server:

```bash
pnpm nx run-many -t serve -p backend,frontend
```

You can now access Drivebase at `http://localhost:8000`.
