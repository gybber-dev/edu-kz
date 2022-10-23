export const ru: { [key: string]: string } = {
  /* navbar */
  about: 'О нас',
  universityList: 'Список вузов',
  contacts: 'Контакты',
  profile: 'Личный кабинет',
};


export interface ILangDict {
  'ru': { [key: string]: string }
  'en'?: { [key: string]: string }
  'kz'?: { [key: string]: string }
}

export const dictionaryList: ILangDict = {
  ru,
};
