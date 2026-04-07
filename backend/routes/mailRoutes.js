import express from 'express'
import mailer from '../controllers/mailController.js';

const route = express.Router();

route.post("/sendmail", mailer);



export default route;