import {Project} from "../../../model/Project.ts";
import {User} from "../../../model/User.ts";
import {userKishan} from "../../../constants/KishanUserInformation.ts";

//update with Krishna & Sadak's projects

export const getUserSelectedProject = (projectId: string, user: User): Project | undefined | null => {
    const userPrefix = projectId.split("-")[0];

    const getProject = (workProjects: Array<Project>) => {
        return workProjects.find((e) => e.id === projectId);
    };

    switch (userPrefix) {
        case "k":
            return getProject(user.workProjects); // Ensure user.workProjects exists
        case "km":
            console.log("User: Krishna");
            return null;
        case "ms":
            console.log("User: Sadak");
            return null;
        default:
            console.log("Unknown User");
            return null;
    }
};


export const getSelectedUser = (projectId: string): User  | null => {
    const userPrefix = projectId.split("-")[0];

    switch (userPrefix) {
        case "k":
            return userKishan; // Ensure user.workProjects exists
        case "km":
            console.log("User: Krishna");
            return null;
        case "ms":
            console.log("User: Sadak");
            return null;
        default:
            console.log("Unknown User");
            return null;
    }
};
