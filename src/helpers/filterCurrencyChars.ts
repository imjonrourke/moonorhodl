export const filterCurrencyChars = (val?: FormDataEntryValue | null) => {
  if (!val) {
    return 0;
  }

  const filteredVal = `${val}`.split('').filter((fval) => fval !== ',').join('');

  return Number(filteredVal).valueOf();
};
