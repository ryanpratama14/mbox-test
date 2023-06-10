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
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en-US", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(d);
  return `${da} ${mo} ${ye}`;
};
