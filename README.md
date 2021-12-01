# Micro-service authentification

DANVERS Martin & GAUTRON Marie

## Url deployed

https://boo-user.herokuapp.com/

## Install dependencies

`yarn`

## You might need

Node 14+ : `nvm use 14`

Error : `[nodemon] failed to start process, "ts-node" exec not found`

Solution : Install ts-node `npm install -g ts-node`

## Run local

`yarn dev`

Add `.env` :

```
PORT=3000
MONGO_USERNAME=admin
MONGO_PASS=CfQ8q6N59w6FHCt
MONGO_DB=users
```

## Endpoints

### Get all users

`GET /users`

### Sign up

`POST /sign-up`

Body :

```
{
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}
```

### Sign in

`POST /sign-in`

Body :

```
{
    email: "",
    password: ""
}
```
