import React, { FC } from 'react';
import { dictionaryList, IFields, ILangDict } from '../src/languages/data.config';


interface ITextProps {
  tid: keyof IFields
}

const lang: keyof ILangDict = 'ru'; // from localstorage
const Text: FC<ITextProps> = ({ tid }) => (
  <>
    {dictionaryList[lang][tid]}
  </>
);

export default Text;

export const getLocaleText = (tid: keyof IFields): string => dictionaryList[lang][tid];
