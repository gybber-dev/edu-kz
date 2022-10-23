import React, { FC } from 'react';
import { dictionaryList, ILangDict } from '../src/languages/data.config';

interface ITextProps {
  tid: string
}

const lang: keyof ILangDict = 'ru';
const Text: FC<ITextProps> = ({ tid }) => (
  <>
    {dictionaryList[lang][tid]}
  </>
);

export default Text;
