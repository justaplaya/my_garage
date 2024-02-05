import { string } from 'yup';

const schemaData = {
  title: {
    regexpValue: /^$|.*G.*/,
    regexpMessage: 'Must contain G letter',
    maxValue: 10,
    maxMessage: 'Must be at most 10 characters',
  },
  description: {
    regexpValue: /^$|.*[59].*/,
    regexpMessage: 'Must contain 5 or 9 letter',
    maxValue: 20,
    maxMessage: 'Must be at most 20 characters',
  },
};

export const schemas = {
  title: string()
    .matches(schemaData.title.regexpValue, schemaData.title.regexpMessage)
    .max(schemaData.title.maxValue, schemaData.title.maxMessage),
  description: string()
    .matches(schemaData.description.regexpValue, schemaData.description.regexpMessage)
    .max(schemaData.description.maxValue, schemaData.description.maxMessage),
};

export const applyText = 'Apply';
