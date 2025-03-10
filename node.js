const express = require('express');  
const app = express();  
const whisper = 3000

app.get('/test', (req, res) => {  
    res.json({ message: 'Express is working! John Clarence Palma' });  
});  

// Start the server on port 3000
app.listen(3000, () => {  
    console.log(`Listening in http://localhost/${whisper}`);  
});
