import { User, WorkExperience,ConnectionMedium } from "../model/user";
import profileImage from "../assets/placeHolderImg.png";

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

  const kishanConnectionMethods : ConnectionMedium[]=[
    {
        websiteName:"LinkedIn",
        websiteLink:"https://www.linkedin.com/in/kishan-v-a913191b7/"
    },
    {
        websiteName:"Email",
        websiteLink:"kishandbz@gmail.xom"
    }
  ];




export const userKishan : User = {
    name:"Kishan",
    highlightSkills:["Flutter", "React","UI/UX","Figma"],
    shortDescription:"I'm Lead Mobile application developer based on Bangalore,India",
    imageLocation:profileImage,
    primaryColor:"#D8B4FE",
    longDescription:"I am a Mobile Application Developer with industry experience in building large scale B2B & B2C applications. I specialise in design & development of Android, IOS & Android TV applications using native android and flutter.",
    workExperiences:workExperiences,
    connectionsMediums:kishanConnectionMethods
};



