export interface User {
  id?: number;
  name?: string;
  sex?: string;
  insertTime?: string;
  address?: string;
  courses?: Course[];
  title?: Title;
  level?: number;
}
export interface Course {
  id?: number;
  name?: string;
  creatTime?: string;
}
export interface Title {
  id?: number;
  name?: string;
}
