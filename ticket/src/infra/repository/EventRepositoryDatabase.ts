import Event from "../../domain/entities/Event";
import EventRepository from "../../application/repository/EventRepository";
import { prisma } from "../../prisma.client";

export default class EventRepositoryDatabase implements EventRepository {
	
	async get(eventId: string): Promise<Event> {
		const eventData = await prisma.event.findFirst({
			where: { event_id: eventId }
		})

		return new Event(eventData.event_id, eventData.description, parseFloat(String(eventData.price)), eventData.capacity);
	}
}