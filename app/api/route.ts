
import { db } from '../db'; 
import { notification } from '../db/schema';

export async function GET() {
    try {
      const notifications = await db.select().from(notification);
      return new Response(JSON.stringify(notifications), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch notifications' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }