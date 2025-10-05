export const filterCurrencyChars = (val?: FormDataEntryValue | null) => {
  if (!val) {
    return 0;
  }

  return Number(`${val}`.replace(',', '')).toPrecision(2).valueOf();
};
