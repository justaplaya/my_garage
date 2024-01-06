const express = require('express');
const app = express();
const crypto = require('crypto');
const fs = require('fs');
const users = require('./users');
const usersPath = './users.json'
const shared = require('./shared.json');
const cors = require("cors");
const { minutesToMs, delay } = require("./utils");

const port = 7000;

app.use(cors());

app.use(express.json());

app.post('/api/auth', async (req, res) => {
    await delay(2000)

    for (let user of Object.values(users)) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            const head = Buffer.from(
                JSON.stringify({ alg: 'HS256', typ: 'jwt' })
            ).toString('base64');
            const body = Buffer.from(
                JSON.stringify({
                    id: user.id,
                    login: user.login,
                    password: user.password,
                })
            ).toString('base64');
            const signature = crypto
                .createHmac('SHA256', shared.tokenKey)
                .update(`${head}.${body}`)
                .digest('base64');
            const token = `${head}.${body}.${signature}`;
            let expires = new Date();
            expires.setTime(expires.getTime() + minutesToMs(30))
            expires = expires.toUTCString();

            const newUsers = JSON.parse(fs.readFileSync(usersPath));
            newUsers[user.id].token = token;
            newUsers[user.id].expires = expires;

            fs.writeFile(usersPath, JSON.stringify(newUsers, null, 4), {}, (data) => {
                console.log(data)
            });

            return res.status(200).json({
                id: user.id,
                login: user.login,
                token,
                expires,
            });
        }
    }

    return res
        .status(404)
        .json({ message: 'User not found' });
});

app.listen(port, () =>
    console.log(`Auth server is running on ${port} port`)
);