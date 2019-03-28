export class Subscriptions {
  user_id: string;
  service_type: string;
  service_name: string;
  expired_time: string;
  state: string;

  static cloneBase(subscriptions: Subscriptions): Subscriptions {
    const clonedSubscriptions: Subscriptions = new Subscriptions();
    clonedSubscriptions.user_id = account.user_id;
    clonedSubscriptions.service_type = subscription.service_type;
    clonedSubscriptions.service_name = subscriptions.service_name;
	clonedSubscriptions.expired_time = subscriptions.expired_time;
	clonedSubscriptions.state = subscriptions.state;
    return clonedSubscriptions;
  }
}

export class SubscriptionsStr {
}
