export interface Page {
  id: number;
  name: string;
  content: string;
}

export const pages: Page[] = [
  {
    id: 1,
    name: 'A',
    content: 'This is Page A!',
  },
  {
    id: 2,
    name: 'B',
    content: 'This is Page B!',
  },
  {
    id: 3,
    name: 'C',
    content: 'This is Page C!',
  },
];
