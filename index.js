import 'dotenv/config'
import express from 'express';
import guestRouter from './Routes/Guest-route.js'
import adminRouter from './Routes/Admin-route.js'
import cors from 'cors'
import path from 'path'


const app = express();
app.use(cors())

app.use('/blogs', guestRouter);
app.use('/admin', adminRouter);

if (process.env.MODE != 'development') {
    const staticPath = path.join(process.cwd(), 'Frontend/dist');
    console.log(staticPath);


    app.use(express.static(path.join(staticPath)));

    app.get('/{*splat}', (req, res) => {
        res.sendFile(path.join(staticPath, '/index.html'));
    })
}

app.listen(process.env.PORT, () => {
    console.log('server is listening on port ' + process.env.PORT);
});


