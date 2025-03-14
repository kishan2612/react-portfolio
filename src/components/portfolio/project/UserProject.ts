import {Project} from "../../../model/Project.ts";
import {userKishan} from "../../../constants/KishanUserInformation.ts";

//update with Krishna & Sadak's projects

export const getUserSelectedProject :(projectId: string) => (Project | undefined | null) = (projectId:string)=>{

    const userPrefix = projectId.split("-")[0];

    const getProject = (workProjects: Array<Project>) => {
        return workProjects.find((e)=>e.id == projectId);
    };
    switch (userPrefix) {
        case "k":
            return getProject(userKishan.workProjects);
        case "km":
            console.log("User: Krishna");
            return  null;
        case "ms":
            console.log("User: Sadak");

            return  null;
        default:
            console.log("Unknown User");
            return  null;
    }

}