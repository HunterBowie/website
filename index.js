const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({name: "server-109", data: [1, 4, 5, 2, 5]})
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));

