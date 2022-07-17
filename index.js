const express = require('express');
const app = express();

app.get('/api/videos/:id', (request, response) =>{
    response.send(request.params.id);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

