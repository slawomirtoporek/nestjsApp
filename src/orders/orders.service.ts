import { Injectable } from '@nestjs/common';
import { db, Order } from 'src/db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id): Order | null {
    return db.orders.find((o) => o.id === id);
  }

  public deleteById(id: Order['id']): boolean {
    const index = db.orders.findIndex((o) => o.id === id);

    if (index !== -1) {
      db.orders.splice(index);
      return true;
    }
  }

  public create(orderData: Omit<Order, 'id'>): Order {
    const newOrder = { ...orderData, id: uuidv4() };
    db.orders.push(newOrder);
    return newOrder;
  }
}
