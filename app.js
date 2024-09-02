import 'dotenv/config.js'
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import {dark, light, noSidebar} from '@adminjs/themes';
import mongoose from 'mongoose';
import {Database, Resource} from '@adminjs/mongoose';
import express from 'express';
import {Products} from './Products-model.js';
import { Users } from './User-model.js';
import { Posts } from './Post-model.js';
import { Orders } from './Order-model.js';


const PORT = 3000;
AdminJS.registerAdapter({
    Database, Resource
})
const start = async () =>{
    const app = express();
    
    await mongoose.connect(process.env.MONGO_URL);
    const admin = new AdminJS({
        defaultTheme: dark.id,
        availableThemes: [dark, light, noSidebar],
        resources:[{
            resource: Products
        },
        {
            resource: Posts
        },
        {
            resource: Orders
        },
        {
            resource: Users,
            options:{
                actions:{
                    new: {
                        isVisible: false
                    },
                    edit: {
                        isVisible: false
                    }
                }
            }
        }]
    })
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);

    app.listen(process.env.PORT, () => console.log(`AdminJs started on http://localhost:${process.env.PORT}${admin.options.rootPath}`));
}

start()