import React from 'react';
import { langEnum } from '../../const/dict';

export type providedHandlers = "headerUpdate" | "bodyUpdate";

export type LanContextType = {
  onLanguageChange: (lan: langEnum) => void;
  data: any;
  initLang: langEnum;
  registerHandler: (name: providedHandlers, handler: Function) => void;
  removeHandler: (name: providedHandlers) => void;
  handlerList: Array<[providedHandlers, Function]>;
  registerListener: any;
  removeListener: any;
  callListener: any;
};

export const LanContext = React.createContext<LanContextType>({
  onLanguageChange: () => null,
  data: {},
  initLang: langEnum.EN,
  registerHandler: () => null,
  removeHandler: () => null,
  handlerList: [],
  registerListener: () => null,
  removeListener: () => null,
  callListener: () => null,
});
