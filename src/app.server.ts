import main from './app.main';
import 'dotenv/config';
import express from 'express';
import path from 'path';

main.use('/', express.static(path.join(__dirname, '../public')));
main.listen(process.env.PORT, () => {
    console.log(`[server] server dimulai di http://localhost:${process.env.PORT} ⚡`);
});