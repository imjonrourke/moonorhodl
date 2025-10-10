import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index('routes/home.tsx'),
  ...prefix('income', [
    route('new', 'routes/income/setIncome.tsx'),
  ]),
  ...prefix('gains', [
      ...prefix('basic', [
        route('new', 'routes/gains/setCapitalGains.tsx'),
        route('update', 'routes/gains/setCapitalGains.tsx'),
      ]),
  ]),
  ...prefix('trades', [
    route('new', 'routes/trades/newTrade.tsx'),
    route('update', 'routes/trades/updateTrade.tsx'),
  ]),
] satisfies RouteConfig;
