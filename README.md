# Products Management

## Requirements

- NodeJS >= 16
- Docker
- `npm install -g pnpm`

## Setup API

```bash
docker-compose up
```

## Setup Frontend

```bash
pnpm start-frontend
```

# TODO

Minimal:

- [] Use API from frontend
- [] Add MongoDB

Nice to have:

- [] Add nodemon for hot reloading API code in Docker
- [] Move frontend to Docker and implement nodemon too

Out of the scope, but should be present in real app:

- [] Add authentication
