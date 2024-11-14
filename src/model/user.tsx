export interface User{
    name: string;
    shortDescription:string;
    longDescription:string;
    imageLocation:string;
    highlightSkills:Array<string>;
    primaryColor:string;
    workExperiences:Array<WorkExperience>
    connectionsMediums:Array<ConnectionMedium>
    workProjects: Array<WorkProject>
}


export interface WorkExperience {
    company: string;
    position: string;
    startYear: number;
    endYear: number | 'Present'; // Use 'Present' for ongoing positions
  }

  export interface ConnectionMedium{
    websiteName:string,
    websiteLink:string
  }

  export interface WorkProject{
    projectName:string,
    mainImageLocation:string,
    longDescription:string
  }
  