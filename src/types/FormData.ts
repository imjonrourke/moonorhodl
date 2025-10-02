export interface FormDataBase {
  type: string;
}

export type ParseFormDataBase<K> = (request: Request) => Promise<K>;

export type FormDataTypeBase<K> = Record<keyof K, FormDataEntryValue | null>;
