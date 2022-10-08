export type ExceptionResponseBody = {
  statusCode: number;
  timestamp: string;
  path: string;
  message: string;
  errors?: any;
  databaseErrors?: any;
};
