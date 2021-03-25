import { Course, Title } from "@/datasource/Types";
export function listCourses() {
  const courses: Course[] = [
    { id: 4, name: "Java", creatTime: "2020-05-10T12:00" },
    { id: 5, name: "Web开发", creatTime: "2020-03-25T13:00" },
    { id: 6, name: "Web框架", creatTime: "2020-04-18T14:00" },
    { id: 7, name: "移动终端", creatTime: "2020-05-17T15:00" }
  ];
  return courses;
}
export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: "讲师" },
    { id: 2, name: "副教授" },
    { id: 1, name: "教授" }
  ];
  return titles;
}
