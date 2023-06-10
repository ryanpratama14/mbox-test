export const validationFunction = (fields: any) => {
  let allFieldsNotEmpty = true;
  Object.values(fields).forEach((value) => {
    if (!value) {
      allFieldsNotEmpty = false;
    }
  });
  return allFieldsNotEmpty;
};

export const dateFormat = (date: string) => {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = months[d.getMonth()];
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  let filteredDay = da?.startsWith("0") ? da?.replace("0", "") : da;
  return `${filteredDay} ${mo} ${ye}`;
};
