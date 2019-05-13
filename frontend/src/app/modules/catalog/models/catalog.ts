export class Catalog {
  id: number;
  serviceName: string;
  cost: number;
  duration: number;

  constructor(id: number, serviceName: string, cost: number, duration: number) {
    this.id = id;
    this.serviceName = serviceName;
    this.cost = cost;
    this.duration = duration;
  }
}
