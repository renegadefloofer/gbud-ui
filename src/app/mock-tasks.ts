interface goal {
  id: number;
  title: string;
  tag?: string;
  due?: string;
  date?: Date;
}

export const GOALS: goal[] = [
  {
    id: 1,
    title: 'Build Angular Frontend',
    tag: 'P1',
    due: 'Aug 22, 2022 - 9:00 AM',
  },
  {
    id: 2,
    title: 'Build Djanog Backend',
    tag: 'P2',
    due: 'Aug 28, 2022 - 9:00 AM',
  },
  {
    id: 4,
    title: 'Deploy the app',
  },
];
