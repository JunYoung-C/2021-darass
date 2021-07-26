import { Project } from "../../types/project";
import { socialLoginUser } from "./user";

export const myProject: Project = {
  id: 1,
  name: "내 프로젝트",
  userId: socialLoginUser.id,
  secretKey: "1312321"
};

export const myProject2: Project = {
  id: 2,
  name: "내 프로젝트2",
  userId: socialLoginUser.id,
  secretKey: "1312412"
};

export const myProject3: Project = {
  id: 3,
  name: "내 프로젝트",
  userId: socialLoginUser.id,
  secretKey: "1312312"
};

export const otherProject: Project = {
  id: 2,
  name: "다른 사람 프로젝트",
  userId: 999,
  secretKey: "asdasd"
};
