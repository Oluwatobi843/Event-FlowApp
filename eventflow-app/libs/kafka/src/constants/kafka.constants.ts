export const KAFKA_BROKER = process.env.KAFKA_BROKER ?? 'localhost:9092';
export const KAFKA_CLIENT_ID = 'eventflowapp';
export const KAFKA_CONSUMER_GROUP = 'eventflowapp-consumer';

// Kafka Topic
export const KAFKA_TOPICS = {
    // AUthentication event
    USER_REGISTERED: 'user.registered',
    USER_LOGIN: 'user.login',
    PASSWORD_RESET_REQUESTED: 'user.password-reset-requested',

  // Event events
  EVENT_CREATED: 'event.created',
  EVENT_UPDATED: 'event.updated',
  EVENT_CANCLED: 'event.cancelled',

  // TICKET EVENT
  TICKET_PURCHASED: 'ticket.purchased',
  TICKET_CANCELLED: 'ticket.cancelled',
  TICKET_CHECKED_IN: 'ticket.checked-in',

  // Payment event
  PAYMENT_COMPLETED: 'payment.completed',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',

  // Notification
  SEND_EMAIL: 'notification.send-email',
  SEND_SMS: 'notofication.send-push',


} as const;

export type kafkaTopics = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];