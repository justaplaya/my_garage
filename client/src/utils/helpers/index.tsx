/** отдаёт аргумент как строку. null и undefined дают пустую строку  */
export const toString = (arg): string => {
  const valid = ![null, undefined].includes(arg);
  return valid ? String(arg) : '';
};
