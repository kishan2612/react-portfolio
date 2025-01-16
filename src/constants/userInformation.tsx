import { User, WorkExperience, ConnectionMedium, WorkProject } from "../model/user";
import profileImage from "../assets/placeHolderImg.png";
import projectPlaceHolder from "../assets/project-place-holder.jpg"

//kishan work experience
const workExperiences: WorkExperience[] = [
  {
    company: 'Xiaomi, Bangalore',
    position: 'Lead Mobile Engineer',
    startYear: 2022,
    endYear: 'Present',
  },
  {
    company: 'NowApps Technologies, Bangalore',
    position: 'Senior Mobile Developer',
    startYear: 2019,
    endYear: 2022,
  },
  {
    company: 'UBK R&D, Chennai',
    position: 'Junior Mobile Application Developer',
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
    mainImageLocation: projectPlaceHolder
  },
  {
    projectName: "Service+",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder
  },
  {
    projectName: "Serv+Ops",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder
  },
  {
    projectName: "idfye",
    longDescription: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    mainImageLocation: projectPlaceHolder
  }
]


export const userKishan: User = {
  name: "Kishan",
  highlightSkills: ["Flutter", "Native Android", "React", "Android TV", "Kotlin multiplatform", "State Management", "Firebase", "App Performance", "Analytics", "Architecture", "UI/UX", "Figma",],
  shortDescription: "I'm Lead Mobile application developer based on Bangalore,India",
  imageLocation: profileImage,
  primaryColor: "#D8B4FE",
  longDescription: "I am a Mobile Application Developer with industry experience in building large scale B2B & B2C applications. I specialise in design & development of Android, IOS & Android TV applications using native android and flutter.",
  workExperiences: workExperiences,
  connectionsMediums: kishanConnectionMethods,
  workProjects: kishansProjects
};



