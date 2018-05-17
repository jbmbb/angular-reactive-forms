export class DataModel {
}

export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'xxlai1',
    addresses: [
      {
        street: '123 Main', city: 'anywhere', state: 'ca', zip: '94801'
      },
      {
        street: '456 Main', city: 'somewhere', state: 'va', zip: '23226'
      }
    ]
  },
  {
    id: 2,
    name: 'xxlai2',
    addresses: [
      {
        street: '789 Main', city: 'smallville', state: 'oh', zip: '04501'
      }
    ]
  },
  {
    id: 3,
    name: 'xxlai3',
    addresses: []
  }
];

export const states = ['ca', 'md', 'oh', 'va'];
