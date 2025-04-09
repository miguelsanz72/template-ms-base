import { IDataBaseUser } from '../interfaces';

export const randonColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const userNameAndCharter = (email: string): IDataBaseUser => {
  const hash = new Date().getTime();
  const length = 13;
  const hasUser = hash.toString().substring(9, length);
  const user_name = `${email.split('@')[0].trim()}${hasUser}`;
  const avatar = {
    name: 'no-image',
    color: randonColor(),
    charter: user_name.charAt(0).toUpperCase(),
  };

  return { avatar, user_name };
};
