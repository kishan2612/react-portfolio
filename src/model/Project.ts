export interface Project {
    id: number;
    projectName: string;
    mainImageLocation: string,
    shortDescription:string,
    longDescription: string;
    technologies: string[];
    features: string[];
    screenshots: string[]; // URLs to images or assets
    role: string; // Your role in the project
    duration: string; // Project duration
}
