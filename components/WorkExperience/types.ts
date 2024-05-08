import { FunctionComponent } from "react";
import { Experience } from "../../types";

export type WorkExperienceProps = {
  experience: Experience;
};

export type WorkExperienceComponent = FunctionComponent<WorkExperienceProps>;
