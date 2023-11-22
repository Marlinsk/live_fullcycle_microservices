import { prisma } from "./prisma.client";

export async function initialData() {
  try {
    const events = await prisma.event.findMany();
    if (events.length <= 0) {
      const event = await prisma.event.create({
        data: {
          event_id: 'bf6a9b3d-4d5c-4c9d-bf3b-4a091b05dc76',
          description: 'Pink Floyd 10/10/2022 22:00', 
          price: 300, 
          capacity: 100000
        }
      })
      console.log('Data added successfully');
      console.log(event);
    }
  } catch (error) {
    console.log('Data addition process failed: ', error);
  } finally {
    await prisma.$disconnect();
  }
}