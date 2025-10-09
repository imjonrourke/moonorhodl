import type { ClientActionFunctionArgs } from 'react-router';
import { modifyTrade } from '~/actions/modifyTrade';
import { getTrades } from '~/loaders/getTrades';

export async function clientLoader() {
  return await getTrades();
}

export async function clientAction(args: ClientActionFunctionArgs) {
  return await modifyTrade(args);
}
