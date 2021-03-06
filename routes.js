const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const WRITING = "/wriring";
const USER = "/";
const ID = "/:id";
const CPW = "/:id/change-pw";
const EDIT = "/:id/edit";

const routes = {
  home: HOME, // 결과값 /
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  writing: WRITING,
  user: USER,
  id: ID,
  cpw: CPW,
  edit: EDIT
};

export default routes;
