/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
export default function destruct(obj) {
  const { special: [{ ...special1 }, { ...special2 }] } = obj;
  const a = JSON.parse(JSON.stringify([special1, special2]));
  a.forEach((element) => {
    if (!element.description) {
      element.description = 'Описание недоступно';
    }
  });
  return a;
}
