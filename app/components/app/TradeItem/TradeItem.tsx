import type { FunctionComponent } from 'react';
import type { TradeItemProps } from '~/components/app/TradeItem/TradeItemProps';

export const TradeItem: FunctionComponent<TradeItemProps> = ({ trade }) => {
  return (
    <div>
      <p>Type: {trade.type}</p>
      <p>Asset type: {trade.assetType}</p>
      <p>Name: {trade.name}</p>
      <p>Price: {trade.amount}</p>
      <p>Qty: {trade.quantity}</p>
      <p>Date: {new Date(trade.date).toLocaleDateString()}</p>
  </div>
  );
};
