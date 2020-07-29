import en from './en.json';
import lt from './lt.json';
import ru from './ru.json';

export enum langEnum {
    'EN' = 'EN', 'LT' = 'LT', 'RU' = 'RU',
}

export const lang = {
  [langEnum.EN]: en,
  [langEnum.LT]: lt,
  [langEnum.RU]: ru,
};

export const langArray = [
  [langEnum.EN, 'English'],
  [langEnum.LT, 'Lietuvių'],
  [langEnum.RU, 'Ruskie'],
];

export enum langIndexRoutes {
    'landing' = 'landing',
    'landing.1' = 'landing.1',
    'landing.2' = 'landing.2',
    'landing.3' = 'landing.3',
    'task.table.search.button' = 'task.table.search.button',
    'task.table.search.column-1' = 'task.table.search.column-1',
    'task.table.search.column-2' = 'task.table.search.column-2',
}
