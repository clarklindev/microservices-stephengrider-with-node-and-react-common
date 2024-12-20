import { Subjects } from "./subjects";

// information each service needs
// TicketService 
//  - what ticket to unreserve (ticket id)

// PaymentService
//  - told do not receive payments (order id)

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data:{
    id:string;
    ticket:{
      id: string;
    }
  }
}

