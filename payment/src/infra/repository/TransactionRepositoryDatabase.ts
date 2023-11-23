import Transaction from "../../domain/entities/Transaction";
import TransactionRepository from "../../application/repository/TransactionRepository";
import { prisma } from "../../prisma.client";

export default class TransactionRepositoryDatabase implements TransactionRepository {
	
	async save(transaction: Transaction): Promise<void> {
		await prisma.transaction.create({
			data: {
				transaction_id: transaction.transactionId, 
				ticket_id: transaction.ticketId, 
				event_id: transaction.eventId, 
				tid: transaction.tid, 
				price: transaction.price, 
				status: transaction.status
			}
		})
	}
}