import React from 'react';
import { langEnum } from '../../const/dict';

export type LanContextType = {
  onLanguageChange: (lan: langEnum) => void;
  data: any;
  initLang: langEnum;
};

export const LanContext = React.createContext<LanContextType>({
  onLanguageChange: () => null,
  data: {},
  initLang: langEnum.EN,
});
