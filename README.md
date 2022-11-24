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

- [x] Setup empty Nodejs app with express
- [x] Setup empty React app
- [x] Setup Typescipt
- [x] Setup Docker
- [x] Add dummy API
- [x] Use API from frontend
- [x] Implement interface for adding/editing products
- [x] Add MongoDB
- [x] Implement all needed API endpoints
- [x] Add tests

Nice to have:

- [ ] Add nodemon for hot reloading API code in Docker
- [ ] Move frontend to Docker and implement nodemon too
- [ ] Take MongoDB host and port from ENV vars
- [ ] Take API url from ENV vars
- [ ] Add validation to the API
- [ ] Add frontend validation
- [ ] Use Formik for forms
- [ ] Handle API response errors and display them to the user

Out of the scope, but should be present in real app:

- [ ] Add authentication
