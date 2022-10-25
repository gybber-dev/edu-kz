export interface IFields {
  [key: string]: string
  about: string;
  universityList: string;
  contacts: string;
  profile: string;
  registryTitle: string;
  registryFirstName: string;
  registrySecondName: string;
  registryEMail: string;
  password: string;
  passwordConfirm: string;
  registryButton: string;
  registryNotice: string;
  registryNoticeLink: string;
}

export const ru: IFields = {
  /* navbar */
  about: 'О нас',
  universityList: 'Список вузов',
  contacts: 'Контакты',
  profile: 'Личный кабинет',

  /* registry */
  registryTitle: 'Регистрация',
  registryFirstName: 'Имя',
  registrySecondName: 'Фамилия',
  registryEMail: 'E-mail',
  password: 'Пароль',
  passwordConfirm: 'Повторить пароль',
  registryButton: 'Зарегистрироваться',
  registryNotice: 'Я прочитал условия',
  registryNoticeLink: 'соглашения',
};

export type F = typeof ru;

export interface ILangDict {
  'ru': { [key: string]: string }
  'en'?: { [key: string]: string }
  'kz'?: { [key: string]: string }
}

export const dictionaryList: ILangDict = {
  ru,
};
