# Description

This is a backend for a MERN based quiz app

# Steps to setup locally

1. Download/clone the code onto a local file system
2. Inside the root folder, run ___npm install___
3. Set up a .env file with the following fields
    1. PORT: _Port of server. Eg: 3001_
    2. MONGO_URI: _MongoDB cloud URI (NodeJS driver 3.0 or later)_
    3. MONGO_SECONDARY_URI: _MongoDB cloud URI in case of failure (NodeJS driver 2.2.12 or later)_
    4. REDIS_HOST: _Redis cloud database host URI_
    5. REDIS_PORT: _Redis cloud database host port_
    6. REDIS_PASSWORD: _Redis cloud database password_
    7. ORIGIN_URI: _Frontend URI. Eg: http://localhost:3000_
    8. SESSION_SECRET: _Secret for hashing sessions_
4. To run development server, run ___npm run dev___
5. To run production server, run ___npm run build && npm start___
