import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix('income', [
    route('new', 'routes/setIncome.tsx'),
  ]),
  ...prefix('trades', [
    route('new', 'routes/newTrade.tsx'),
  ]),
] satisfies RouteConfig;
