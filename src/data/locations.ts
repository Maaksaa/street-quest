export type Location = {
  id: number;
  name: string;
  description: string;
  longitude: number;
  latitude: number;
};

export const locations: Location[] = [
  {
    id: 1,
    name: 'Петроварадинская крепость',
    description: 'Главная достопримечательность Нови-Сада',
    longitude: 19.8634,
    latitude: 45.2512,
  },
  {
    id: 2,
    name: 'Змай Йованова улица',
    description: 'Главная пешеходная улица города',
    longitude: 19.8431,
    latitude: 45.2559,
  },
  {
    id: 3,
    name: 'Набережная Дунай',
    description: 'Прогулка вдоль реки',
    longitude: 19.8414,
    latitude: 45.2497,
  },
];
