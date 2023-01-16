<!-- Readme for Graphql strapi startup  -->

# Graphql strapi startup

This is a simple strapi project with graphql plugin installed and configured.

## How to use

1. Clone this repo

2. Install dependencies

```bash

npm install

```

3. Start the server

```bash

npm run develop

```

4. Open the playground

```bash

http://localhost:1337/graphql

```

## How to add env variables

1. Create a .env file in the root of the project

2. Add the variables

```bash

HOST=0.0.0.0
PORT=1337
APP_KEYS=A9xA+uL16qhD5A6CpxQFFQ==,NwSGQ40GHiXMUi6PzmlPhA==,FRrDHsbtOQA3ZCA+tT8b9g==,zvD9jcxIG8A/NAkHts8A9A==
API_TOKEN_SALT=HPQjBpF6V5sDN6M6dFKJ2g==
ADMIN_JWT_SECRET=O6S8h1EMoWuKixy+IELpOw==
JWT_SECRET=eno1ppt5gG7VUZjjcOobCg==
STRIPE_KEY=sk_test_51MPVLyKnQZ3NP7WypNm7zH3MHKAdY7EWLj0Rf3OhCpyXwPJfiKW2SGu2YFJ5eiURQquzlZaW8k58RXGtaVPSDt9s00aHyvNRew
CLIENT_URL=http://localhost:3000

```

## Postgress database setup

1. Install postgres

2. Create a database

3. Add the database credentials to the .env file

```bash

DATABASE_CLIENT=postgres
DATABASE_HOST=
DATABASE_PORT=

DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=

```
