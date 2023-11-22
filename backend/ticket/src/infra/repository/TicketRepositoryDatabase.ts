import TicketRepository from "../../application/repository/TicketRepository";
import Ticket from "../../domain/entities/Ticket";
import { prisma } from "../../prisma.client";

export default class TicketRepositoryDatabase implements TicketRepository {
	
	async save(ticket: Ticket): Promise<void> {
		await prisma.ticket.create({
			data: {
				ticket_id: ticket.ticketId, 
				event_id: ticket.eventId, 
				email: ticket.email, 
				status: ticket.status
			}
		});
	}

	async update(ticket: Ticket): Promise<void> {
		await prisma.ticket.update({
			where: { ticket_id: ticket.ticketId },
			data: { status: ticket.status }
		})
	}

	async get(ticketId: string): Promise<Ticket> {
		const ticketData = await prisma.ticket.findFirst({
			where: { ticket_id: ticketId },
		})

		return new Ticket(ticketData.ticket_id, ticketData.event_id, ticketData.email, ticketData.status);
	}
}