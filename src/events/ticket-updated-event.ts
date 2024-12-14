import { Subjects } from './subjects';

export interface TicketUdpatedEvent {
  subject: Subjects.OrderUpdated,
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  }
}