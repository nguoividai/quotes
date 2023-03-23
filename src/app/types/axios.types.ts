export type ResponseStructure<T = any> = {
  data: T;
  message: string;
  success: boolean;
};
