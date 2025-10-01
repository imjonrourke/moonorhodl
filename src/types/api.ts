export type ErrorMap<K = any> = Record<keyof K | string, string>;

export interface ErrorResponse {
  message: string;
  status?: number;
}

export interface ErrorActionResponse<K> {
  general?: ErrorResponse | null;
  errors?: ErrorMap<K>;
}
export interface ApiError extends ErrorResponse {}

export type GatewayResult<K> = {
  data: K | null;
  fetcher: () => Promise<GatewayResult<K>>;
  error: ApiError | null;
};
