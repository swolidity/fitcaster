import 'dotenv/config';
import { startPolling } from "@big-whale-labs/botcaster";

import {db} from './src/db';
import * as schema from "./src/schema";


const fid = 346164;

startPolling(
  fid,
  "3A4B5E7F-95A3-4E80-91A2-D2F1AE5BE306",
  async (notification) => {
    console.log(notification);

    const response = await db.insert(schema.users).values({username: notification.author.username}).returning();
    console.log(response);
  }
);
