---
outline: deep
---

# Docker Installation

You can run Drivebase using Docker on your local machine or on a server. This is the recommended way to run Drivebase.
There are two ways to run Drivebase using Docker:

1. Using Docker Compose
2. Using Docker Run

### Using Docker Compose

Create a `docker-compose.yml` file and paste the following code into it:

```yaml
version: '3'

services:
  drivebase:
    image: ghcr.io/drivebase/drivebase:latest
    ports:
      - 8000:8000
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/postgres
      - AUTH_SECRET=your-secret-key
    depends_on:
      - postgres

  postgres:
    image: postgres:latest
    environment:
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Then, run the following command to start the containers:

```bash
docker-compose up -d
```

You can now access Drivebase at `http://localhost:8000`.

### Using Docker Run

To run Drivebase using Docker Run, you need to create a `.env` file and a running PostgreSQL instance.

Create a `.env` file and paste the following code into it:

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
AUTH_SECRET=your-secret-key
```

Then, run the following command to start the container:

```bash
docker run -d -p 8000:8000 --env-file .env ghcr.io/drivebase/drivebase:latest
```

You can now access Drivebase at `http://localhost:8000`.