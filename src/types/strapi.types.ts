export type StrapiPaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapyResultType<T> = {
  data: T[];
  meta: {
    pagination: StrapiPaginationType;
  };
};
