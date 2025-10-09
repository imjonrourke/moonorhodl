import type { ClientActionFunctionArgs } from 'react-router';
import { createTrade } from '~/actions/createTrade';
import { getTrades } from '~/loaders/getTrades';

export async function clientLoader() {
  return getTrades();
}

export async function clientAction(args: ClientActionFunctionArgs) {
  return await createTrade(args);
}
