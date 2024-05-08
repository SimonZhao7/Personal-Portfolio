import { FunctionComponent } from "react";
// Types
import { Project } from "../../types";

export type ProjectProps = {
  project: Project;
}

export type ProjectComponent = FunctionComponent<ProjectProps>;