const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send("<h1>Hello Express World!</h1>");
})

app.get('/api/v2/rocket-man1/', (req, res) => {
    const muyObject = {who:"rocket man", where: "mars"};
    const jsonString = JSON.stringify(muyObject);
    res.json(jsonString);
})

app.listen(port, () => {
    const appPid = path.resolve(__dirname, 'app.pid')
    fs.writeFileSync(appPid, '${process.pid}');
    console.log(`Server running on port http://127.0.0.1:${port}`);
})