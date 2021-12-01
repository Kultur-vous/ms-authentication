# Micro-service authentification

DANVERS Martin & GAUTRON Marie

## Install dependencies

`yarn`

## You might need

Error : `[nodemon] failed to start process, "ts-node" exec not found`

Solution : Install ts-node `npm install -g ts-node`

## Run

`yarn start`

## Build

"build": "npm install typescript && npx tsc build app.ts --outDir ./dist"

## Endpoints

### Get all users

`/users`

### Sign up

`/sign-up`

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

`/sign-in`

Body :

```
{
    email: "",
    password: ""
}
```
