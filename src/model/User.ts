import {Project} from "./Project";

export interface User {
  name: string;
    shortDescription:string;
    longDescription:string;
    imageLocation:string;
    highlightSkills:Array<string>;
    primaryColor:string;
    workExperiences:Array<WorkExperience>
    connectionsMediums:Array<ConnectionMedium>
    workProjects: Array<Project>
    slogan1:string
    slogan2:string
}


export interface WorkExperience {
  company: string;
  position: string;
  startYear: number;
  endYear: number | 'Present'; // Use 'Present' for ongoing positions
}

export interface ConnectionMedium {
  websiteName: string,
  websiteLink: string
}