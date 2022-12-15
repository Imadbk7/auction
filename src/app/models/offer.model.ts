import * as faker from 'faker';

export enum Status {
  SOLD = 'SOLD',
  FORSALE = 'FORSALE',
  NEW = 'NEW',
  PAID = 'PAID',
  CLOSED = 'CLOSED',
  CHOICE = 'Make a choice'
}

export class Offer {
  private static nextId = 20001;
  id: number;
  title: string;
  sellingdate: string;
  description: string;
  status: Status;
  valueHighestBid: number;

  constructor() {
  }

  public static createRandomOffers(): Offer {
  const  offer: Offer = new Offer();
  offer.id = Offer.nextId++;
  offer.title = 'A great article - ' + offer.id;
  offer.sellingdate = faker.date.recent();
  offer.status = faker.random.arrayElement([Status.CLOSED, Status.FORSALE, Status.NEW, Status.PAID, Status.SOLD]);
  offer.valueHighestBid =   faker.finance.amount(5, 20, 2);
  offer.description =  'een description ' + offer.id;

  if (offer.status === 'NEW') {
      offer.valueHighestBid = 0;
    }
  return offer;
  }

  public static trueCopy(offer: Offer): Offer {
    return offer == null ? null : Object.assign(new Offer(), offer);
  }

}
