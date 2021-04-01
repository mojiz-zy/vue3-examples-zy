import {
  ActionTree,
  createStore,
  GetterTree,
  Mutation,
  MutationTree
} from "vuex";
import { Course, User } from "@/datasource/Types";
import { listCourses } from "@/datasource/DataSource";
import * as vxt from "./VuexTypes";
export interface State {
  user: User;
  courses: Course[];
  exception: string;
  useCourses: Course[];
}

const myState: State = {
  user: {
    name: "zy",
    address: "996",
    level: 1
  },
  courses: [],
  useCourses: [],
  exception: "" //需实现State接口的所有属性
};

const myMutations: MutationTree<State> = {
  //同步事件树   加了泛型，所以函数体内不用再写类型
  [vxt.UPSTATE_USER]: (state, data: User) => (state.user = data), //把更新的data塞到
  [vxt.LIST_COURSES]: (state, data: Course[]) => (state.courses = data)
};

const myActions: ActionTree<State, State> = {
  [vxt.UPSTATE_USER]: ({ commit }, data: User) => {
    //Action 异步调用同步事件更新state数据的事件
    setTimeout(() => commit(vxt.UPSTATE_USER, data), 2000); //调用muation的UPSTATE_USER事件
  },
  [vxt.LIST_COURSES]: ({ commit }) => {
    const courses = listCourses();
    setTimeout(() => commit(vxt.LIST_COURSES, courses), 2000);
  }
};

const myGetters: GetterTree<State, State> = {
  premission: state => {
    return (level: number) => {
      return state.user?.level == level;
    };
  },
  [vxt.GETTER_PERMISSIN]: state => (level: number) => state.user?.level == level
};
export default createStore({
  state: myState, //数据状态(数据源)，声明全局响应式数据
  mutations: myMutations, //同步，更新state数据的事件
  actions: myActions, //异步，通知mutation更新state数据的事件
  getters: myGetters,
  modules: {} //多模块整合store
});
