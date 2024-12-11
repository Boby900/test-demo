import { db } from "../db";
import { notification } from "../db/schema";
import { eq } from "drizzle-orm";
export async function GET() {
  try {
    const notifications = await db.select().from(notification);
    return new Response(JSON.stringify(notifications), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to fetch notifications" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id } = await req.json();

    const currentNotification = await db
      .select()
      .from(notification)
      .where(eq(notification.id, Number(id)));

    if (currentNotification.length === 0) {
      return new Response(JSON.stringify({ error: "Notification not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    // Get the current `isRead` value and toggle it
    const isRead = currentNotification[0].isRead;
    console.log(isRead);
    await db
      .update(notification)
      .set({ isRead: !isRead })
      .where(eq(notification.id, id));
    const updatedNotification = await db
      .select()
      .from(notification)
      .where(eq(notification.id, id));
    return new Response(JSON.stringify(updatedNotification), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error while updating notification:", err);
    return new Response(
      JSON.stringify({ error: "Failed to update notification" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
