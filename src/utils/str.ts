/**
 * Function for making string to upperface
 *
 * This use shift on 32 symbol to left by UTF-table
 * It's working only with latin chars since UTF-16 hasn't cyrillic
 *
 * @param str original string
 * @returns
 */
export const stringUppercase = (str: string) => {
  const chars = [];

  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      chars.push(String.fromCharCode(char - 32));
    }
  }

  return chars.join('');
};
