import { User, WorkExperience, ConnectionMedium, WorkProject } from "../model/user";
import profileImage from "../assets/placeHolderImg.png";
import projectPlaceHolder from "../assets/project-place-holder.jpg"

//kishan work experience
const workExperiences: WorkExperience[] = [
  {
    company: 'Xiaomi, Bangalore',
    position: 'Lead Mobile Engineer, Bengaluru',
    startYear: 2022,
    endYear: 'Present',
  },
  {
    company: 'NowApps Technologies, Bengaluru',
    position: 'Senior Mobile Developer',
    startYear: 2019,
    endYear: 2022,
  },
  {
    company: 'UBK R&D, Chennai',
    position: 'Mobile Application Developer',
    startYear: 2017,
    endYear: 2019,
  },
];

const kishanConnectionMethods: ConnectionMedium[] = [
  {
    websiteName: "LinkedIn",
    websiteLink: "https://www.linkedin.com/in/kishan-v-a913191b7/"
  },
  {
    websiteName: "Email",
    websiteLink: "kishandbz@gmail.xom"
  }
];


const kishansProjects: WorkProject[] = [
  {
    projectName: "Mi-Retail",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder,
    shortDescription:""
  },
  {
    projectName: "Service+",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder,shortDescription:""
  },
  {
    projectName: "Serv+Ops",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder,shortDescription:""
  },
  {
    projectName: "idfye",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder,shortDescription:""
  }
]


export const userKishan: User = {
  name: "Kishan",
  highlightSkills: ["Flutter", "Native Android", "React", "Android TV", "Kotlin multiplatform", "State Management", "Firebase", "App Performance", "Analytics", "Architecture", "UI/UX", "Figma",],
  shortDescription: "I'm Lead Mobile application developer based on Bangalore,India",
  imageLocation: profileImage,
  primaryColor: "#FF998C",
  longDescription: "As a Mobile Application Developer with over 7 years of experience, I specialize in building large-scale B2B and B2C applications. My expertise lies in designing and developing Android, iOS, and Android TV apps using both native Android and Flutter, ensuring seamless user experiences across all platforms. Alongside my technical skills, I’m proficient in Figma and React, having worked on various professional projects that merge design and functionality. When I'm not crafting the perfect app, you’ll find me immersed in the world of gaming, either on my PS5 or PC, constantly leveling up in the virtual world. Let’s create something amazing together!",
  workExperiences: workExperiences,
  connectionsMediums: kishanConnectionMethods,
  workProjects: kishansProjects,
  slogan1: "Design",
  slogan2: "Development"
};



