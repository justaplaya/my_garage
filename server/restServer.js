const express = require('express');
const app = express();
const crypto = require('crypto');
const fs = require('fs');
const users = require('./data/users.json');
const foldersPath = './data/folders.json';
const _folders = require('./data/folders.json');
const _goals = require('./data/goals.json');
const usersPath = './data/users.json'
const shared = require('./data/shared.json');
const cors = require("cors");
const { minutesToMs,
    delay,
    checkHeaders: _checkHeaders
} = require("./utils");

const port = 6060;

const corsOptions = {
    origin: true,
    credentials: true,
    methods: ['POST','GET','PATCH','DELETE', 'OPTIONS'],
    preflightContinue: true,
}

app.use(cors(corsOptions));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.sendStatus(200);
    } else {
        next();
    }
});

const checkHeaders = (headers) => _checkHeaders(headers, shared.tokenKey, users, true)
const folders = _folders;
const goals = _goals;

const authCheck=async (req, res)=>{
    await delay(200)
    if(!checkHeaders(req.headers)) {
        return res
          .status(401)
          .json({ message: 'Unauthorized' });
    }
}

/** FOLDERS */

app.get('/api/getFolders', async (req, res) => {
    await authCheck(req,res)

    return res
        .status(200)
        .json({ data: Object.values(folders) });
});

app.post('/api/changeFolder',async (req, res) => {
    await authCheck(req,res)

    const { id, change } = req.body;
    folders[id] = { ...folders[id], ...change };

    return res
      .status(200)
      .json({ message: 'OK' });
    } )

/** GOALS */
app.get('/api/getGoals', async (req, res) => {
    await authCheck(req,res)

    return res
      .status(200)
      .json({ data: Object.values(goals) });
});

app.post('/api/changeGoal',async (req, res) => {
    await authCheck(req,res)

    const { id, change } = req.body;
    goals[id] = { ...goals[id], ...change };

    return res
      .status(200)
      .json({ message: 'OK' });
} )

app.get('/api/getGoal',async (req, res) => {
    await authCheck(req,res)

    const id = req.query.id;
    // console.log(req.query)
    const goal = goals[id]

    if(!goal) {
        return res
          .status(404)
          .json({ message: 'Not found' });
    }

    return res
      .status(200)
      .json({ data: goal });
} )

app.listen(port, () =>
    console.log(`REST server is running on ${port} port`)
);