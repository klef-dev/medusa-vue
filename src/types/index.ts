/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NetworkErrorDto {
  response: NetworkErrorResponseDto;
}

export interface NetworkErrorResponseDto {
  status: number;
  data: any;
}

export interface ProductDto {
  limit: number;
  offset: number;
  count: number;
  products: any[];
}
