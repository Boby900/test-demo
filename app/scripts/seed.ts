import { notification } from '../db/schema.js';
import { db } from '../db/index.js';

async function seedNotifications() {
  await db.insert(notification).values([
    {
      type: 'friend_request',
      content: 'John Doe sent you a friend request.',
      isRead: false,
      createdAt: new Date('2024-12-09T10:15:00Z'),
    },
    {
      type: 'like',
      content: 'Anna liked your post: "Exploring the mountains."',
      isRead: true,
      createdAt: new Date('2024-12-08T18:30:00Z'),
    },
    {
      type: 'comment',
      content: 'Michael commented: "Amazing view!" on your post.',
      isRead: false,
      createdAt: new Date('2024-12-07T12:45:00Z'),
    },
    {
      type: 'tag',
      content: 'Sarah tagged you in a post: "Holiday Fun!".',
      isRead: false,
      createdAt: new Date('2024-12-06T14:20:00Z'),
    },
    {
      type: 'group_invitation',
      content: 'Chris invited you to join the group: "React Developers".',
      isRead: true,
      createdAt: new Date('2024-12-05T09:00:00Z'),
    },
    {
      type: 'event_reminder',
      content: 'Reminder: "Hackathon 2024" starts in 2 hours.',
      isRead: false,
      createdAt: new Date('2024-12-04T08:00:00Z'),
    },
  ]);

  console.log('Notification table seeded successfully!');

}

seedNotifications().catch(console.error);
