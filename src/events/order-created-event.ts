import {Subjects} from './subjects';
import { OrderStatus } from './types/order-status';

// information each service needs
// Ticket service
  // - ticketId

//Payment service
  // - userId (payer)
  // - price of ticket

//Expiration service
  // - order expires at time
  // - order id

//ticket status
export interface OrderCreatedEvent{ 
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version:number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket:{
      id: string;
      price: number;
    }
  }
}