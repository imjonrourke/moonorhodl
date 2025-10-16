import type { FunctionComponent } from 'react';
import type { TaxBracketDetailItemProps } from '~/components/app/TaxBracketDetailItem/TaxBracketDetailItemProps';
import { useNumericFormat } from 'react-number-format';

export const TaxBracketDetailItem: FunctionComponent<TaxBracketDetailItemProps> = ({
  bracketResult: {
    taxes,
    bracket,
  }
}) => {

  const { value: taxValue } = useNumericFormat({ value: taxes.toFixed(2), thousandSeparator: true });
  // const { value: limitValue } = useNumericFormat({ value: bracket.limit.toFixed(2) });
  const rateValue = (bracket.rate * 100).toFixed(2)

  return (
    <div>
      <p className="p-1 flex justify-between items-center"><span>{rateValue}%</span> <span>${taxValue}</span></p>
    </div>
  );
};
