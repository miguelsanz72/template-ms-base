import { IDataBaseUser } from '../interfaces';

export const radonColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const calculatePagination = (
  length: number,
  limit: number,
): { perPage: number; realLimit: number } => {
  const perPage = length === 0 || limit === 0 ? length : limit;
  const realLimit = limit === 0 ? length : limit;
  return { perPage, realLimit };
};

export const generateStrongPassword = (): string => {
  const minLength = 12;
  const minLowercase = 1;
  const minUppercase = 1;
  const minNumbers = 1;
  const minSymbols = 1;
  const length = minLength; // define the desired length of the password
  const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbersCharset = '0123456789';
  const symbolsCharset = '!@#$%^&*()_+';
  let password = '';

  // Generate lowercase characters
  for (let i = 0; i < minLowercase; i++) {
    password += lowercaseCharset.charAt(
      Math.floor(Math.random() * lowercaseCharset.length),
    );
  }

  // Generate uppercase characters
  for (let i = 0; i < minUppercase; i++) {
    password += uppercaseCharset.charAt(
      Math.floor(Math.random() * uppercaseCharset.length),
    );
  }

  // Generate numbers
  for (let i = 0; i < minNumbers; i++) {
    password += numbersCharset.charAt(
      Math.floor(Math.random() * numbersCharset.length),
    );
  }

  // Generate symbols
  for (let i = 0; i < minSymbols; i++) {
    password += symbolsCharset.charAt(
      Math.floor(Math.random() * symbolsCharset.length),
    );
  }

  // Generate remaining characters
  const remainingLength =
    length - (minLowercase + minUppercase + minNumbers + minSymbols);
  const charset =
    lowercaseCharset + uppercaseCharset + numbersCharset + symbolsCharset;
  for (let i = 0; i < remainingLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
};

export const userNameAndCharter = (email: string): IDataBaseUser => {
  const hash = new Date().getTime();
  const length = 13;
  const hasUser = hash.toString().substring(9, length);
  const username = `${email.split('@')[0].trim()}${hasUser}`;
  const avatar = {
    name: 'no-image',
    color: radonColor(),
    charter: username.charAt(0).toUpperCase(),
  };

  return { avatar, username };
};

export const generateVerificationCode = (
  length: number = 6,
  type: 'numeric' | 'alphanumeric' = 'numeric',
): string => {
  const numeric = '0123456789';
  const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const characters = type === 'numeric' ? numeric : alphanumeric;

  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return `${code}`;
};
