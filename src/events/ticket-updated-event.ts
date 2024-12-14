import { Subjects } from './subjects';

export interface TicketUdpatedEvent {
  subject: Subjects.TicketUpdated,
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  }
}