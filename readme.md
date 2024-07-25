#Welcome to flight services

#Project setup
-clone the project on your local.
-Execute `npm install` on the same path as of your root directory of the downloaded project.
-Create a `.env` file in the root directory and add the following environment varibales.
-`PORT=3000`
-Inside the `src/cofig` folder create a new file `config.json` and then add the following piece of json.
```
{
    "development":{
        "username":<YOUR_DB_LOGIN_NAME>,
        "password":<YOUR_DB_PASSWORD>,
        "database":<YOUR_DB_NAME>,
        "host":<127.0.0.1>,
        "dialect":"mysql"
    }
}

```

Once you've added your db config as listed above,go to the `src`folder from terminal and execute `npx dequelize db:create`