import {ConnectionMedium, User, WorkExperience} from "../model/User.ts";
import {Project} from "../model/Project";
import AssetLocation from "./AssetLocation.ts";

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


const kishanProjects: Project[] = [
    {
        id: "k-1",
        projectName: "Mi-Retail",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "Mi Retail is a comprehensive retail management app designed to optimize sales, inventory," +
            " and distributor operations for Xiaomi’s retail network in India, Bangladesh & Nepal. It enhances stock tracking," +
            " order management, " +
            "and role-based access while ensuring realtime data synchronization",
        role: "Lead Mobile Application Developer",
        duration: "2022 - Ongoing",
        screenshots: [],
        technologies: ["Flutter", "Dart", "Kotlin", "Firebase", "Google ML kit", "H5", "SSO"],
        features: ["Retailer Mapping & Management", "Stock & Inventory Management", "Order & Prebooking System",
            "Role-Based Access & User Hierarchy", "Sales & Performance Analytics", "Check-In/Check-Out System", "Promoter Gamification"],
        longDescription:"Mi Retail offers a robust Stock & Inventory Management system, providing real-time stock reports" +
            " for parent and child outlets while enabling seamless stock transfers. " +
            "The Order Processing & Prebooking System allows customers to reserve products in advance, " +
            "streamlining order placement with an optimized UI. With Role-Based User Hierarchy & Access Management, " +
            "the app supports multiple roles, including Micro and Zonal Distributors, ensuring secure and structured " +
            "data access for managers and retailers. Real-Time Sales & Performance Analytics generate detailed reports " +
            "on sales, stock movement, and outlet performance, offering actionable insights for distributors and managers. " +
            "The Check-In/Check-Out System enables field staff to track attendance while automating midnight check-outs to " +
            "prevent data mismatches. Seamless POS Integration allows customers to make payments directly through POS machines," +
            " storing digital invoices and transaction records securely. Its Enhanced UI/UX redesign improves stock report " +
            "navigation and optimizes workflows for faster order processing and inventory management."
    },
    {
        id: "k-2",
        projectName: "Xiaomi Service+",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "Xiaomi Service+ is an all-in-one after-sales service platform designed to enhance customer " +
            "support and service experiences for Xiaomi users. The app provides seamless device repair tracking, service " +
            "center discovery, warranty management, real-time service updates and Xiaomi Priority Club to provide premium experience",
        role: "Lead Mobile Application Developer",
        duration: "2022 - 2024",
        screenshots: [],
        technologies: ["Flutter", "Dart", "Kotlin", "Firebase", "Google Maps API", "SSO"],
        features: ["Service Request & Tracking", "Nearby Service Center Locator", "Warranty & Repair Status Management",
            "Online Appointment Booking", "Spare Parts Price Estimation", "Real-Time Notifications & Updates", "Xiaomi Priority Club"],
        longDescription: "Xiaomi Service+ is a customer-centric after-sales service platform that streamlines service " +
            "requests and enhances the post-purchase experience. The app offers an intuitive **Service Request & Tracking** " +
            "system, allowing users to book repairs and monitor their progress in real time. With the **Nearby Service Center " +
            "Locator**, customers can find authorized service centers using Google Maps integration. The **Warranty & Repair " +
            "Status Management** feature enables users to check their device's warranty status and track repair history. " +
            "For convenience, the app includes an **Online Appointment Booking** system, allowing users to schedule visits " +
            "to service centers at their preferred time. Additionally, the **Spare Parts Price Estimation** feature provides " +
            "customers with transparent pricing for Xiaomi device repairs. Through **Real-Time Notifications & Updates**, " +
            "users receive timely alerts regarding service requests, appointments, and warranty expirations.It has Xiaomi Priority Club," +
            " an exclusive loyalty program designed to enhance the customer experience by offering premium services, " +
            "special privileges, and personalized support for Xiaomi users. " +
            "Members of the Priority Club enjoy benefits such as priority service at Xiaomi service centers, exclusive" +
            " discounts on repairs and spare parts, extended warranties, early access to new products," +
            " and personalized customer support. Xiaomi Service+ " +
            "ensures a seamless, hassle-free service experience by integrating essential features with an intuitive user interface."
    },
    {
        id: "k-3",
        projectName: "ServOps",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "ServOps is Xiaomi's field service management application designed to streamline service operations, " +
            "enhance technician efficiency, and improve service request handling. The app enables real-time job tracking and " +
            "automated workflows.",
        role: "Lead Mobile Application Developer",
        duration: "2024 - Ongoing",
        screenshots: [],
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "SSO"],
        features: ["Service Request Management", "Technician Assignment & Tracking", "Real-Time Status Updates",
             "Automated Reporting & Analytics"],
        longDescription: "ServOps is a robust field service management solution designed to optimize service operations " +
            "and enhance workforce productivity. The app features an intuitive **Service Request Management** system that " +
            "allows businesses to efficiently log, assign, and track service requests. With **Technician Assignment & Tracking**, " +
            "managers can allocate tasks to field technicians and monitor their real-time locations using GPS integration. " +
            "The **Real-Time Status Updates** feature ensures that customers and service teams receive instant notifications " +
            "on job progress, reducing response times and improving service efficiency. Additionally, **Automated Reporting & Analytics** provide " +
            "insights into service performance, technician efficiency, and customer satisfaction, helping businesses make data-driven " +
            "decisions. ServOps is a powerful and scalable solution that transforms field service management by integrating smart automation, " +
            "real-time communication, and streamlined workflows."
    },
    {
        id: "k-4",
        projectName: "Xiaomi Employee Sales",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "Xiaomi Employee Sales Portal is a web-based platform designed to facilitate exclusive sales, " +
            "discounts, and product purchases for Xiaomi employees. The portal provides a seamless shopping experience " +
            "with order tracking and role-based access.",
        role: "Frontend Developer",
        duration: "2025",
        screenshots: [],
        technologies: ["React", "TypeScript", "Hooks", "CAS", "MongoDB", "Firebase"],
        features: ["Exclusive Employee Discounts", "Product Catalog & Ordering", "Order Tracking & Management",
            "Role-Based Access & Admin Controls"],
        longDescription: "Xiaomi Employee Sales Portal is an internal e-commerce platform designed exclusively for Xiaomi " +
            "employees, allowing them to purchase company products at discounted rates. The portal features a dynamic **Product " +
            "Catalog & Ordering** system, where employees can browse, select, and purchase Xiaomi devices and accessories. " +
            "With **Exclusive Employee Discounts**, the platform provides special pricing and offers tailored for employees. " +
            "The **Order Tracking & Management** module enables users to monitor their purchases in real time, from order " +
            "placement to delivery. The portal also includes **Role-Based Access & Admin Controls**, ensuring different levels " +
            "of access for employees, managers, and administrators for secure operations. Built with a modern tech stack" +
            " using **React, TypeScript, and Hooks**, the Xiaomi Employee Sales Portal delivers a " +
            "highly responsive and scalable shopping experience tailored for Xiaomi's workforce."
    },
    {
        id: "k-5",
        projectName: "Mi Smart Demo",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "Mi Smart Demo is an in-house retail demo application designed for Xiaomi offline stores, " +
            "running across smartphones, tablets, TVs, and laptops. It showcases promotions, offers, and marketing content " +
            "while seamlessly integrating with Mi Retail for a connected user experience.",
        role: "Mobile Application Developer",
        duration: "2022",
        screenshots: [],
        technologies: ["Flutter", "Dart", "Kotlin","Exo Player", "Foreground Services", "Background Jobs"],
        features: ["Multi-Device Compatibility", "Offline Promotions & Offers", "Real-Time CMS Integration",
            "Barcode-Based Login via Mi Retail", "Smart Background & Foreground Services"],
        longDescription: "Mi Smart Demo is a powerful retail demo application built for Xiaomi offline stores, running across " +
            "multiple devices including **smartphones, tablets, TVs, and laptops**. The application was developed using **Flutter** " +
            "for Windows OS on laptops, while **native Android** was used for smartphones and TVs. A key feature of Mi Smart Demo " +
            "is its ability to display **offline promotions, offers, and marketing content**, ensuring continuous engagement " +
            "even without an active internet connection. This is achieved through **smart background jobs and foreground services**, " +
            "allowing the app to autonomously update and run marketing campaigns across India. The application seamlessly integrates " +
            "with the **Mi Retail system**, enabling users to log in effortlessly by scanning a barcode. Additionally, the system is " +
            "linked to a **real-time CMS**, allowing instant content updates across all devices."
    },
    {
        id: "k-6",
        projectName: "idfye",
        mainImageLocation: AssetLocation.projectPlaceHolderImage,
        shortDescription: "idfye is a platform that connects employees and employers, facilitating collaboration, work reporting, and productivity analysis. It includes features like daily attendance tracking and more.",
        role: "Mobile Application Developer",
        duration: "2021",
        screenshots: [],
        technologies: ["Flutter", "Dart"],
        features: ["Employee-Employer Collaboration", "Work Reporting", "Productivity Analysis", "Daily Attendance Tracking"],
        longDescription: "idfye is a comprehensive platform designed to bridge the gap between employees and employers, " +
            "fostering effective collaboration and communication. " +
            "The application offers robust **Work Reporting** capabilities, allowing employees to submit detailed reports " +
            "of their tasks and progress. The **Daily Attendance Tracking** feature ensures accurate monitoring of " +
            "employee attendance, streamlining HR processes. Built with **Flutter** and **Dart**, idfye delivers a " +
            "seamless user experience across devices." +
            " Overall, idfye aims to enhance workplace efficiency by providing tools that support transparent communication " +
            "and data-driven decision-making."
    }


]


export const userKishan: User = {
    name: "Kishan",
    highlightSkills: ["Flutter", "Native Android", "React", "Android TV", "Kotlin multiplatform", "State Management", "Firebase", "App Performance", "Analytics", "Architecture", "UI/UX", "Figma",],
    shortDescription: "I'm Lead Mobile application developer based on Bangalore,India",
    imageLocation: AssetLocation.kishanProfileImage,
    primaryColor: "#FF998C",
    longDescription: "As a Mobile Application Developer with over 7 years of experience, I specialize in building large-scale B2B and B2C applications. My expertise lies in designing and developing Android, iOS, and Android TV apps using both native Android and Flutter, ensuring seamless user experiences across all platforms. Alongside my technical skills, I’m proficient in Figma and React, having worked on various professional projects that merge design and functionality. When I'm not crafting the perfect app, you’ll find me immersed in the world of gaming, either on my PS5 or PC, constantly leveling up in the virtual world. Let’s create something amazing together!",
    workExperiences: workExperiences,
    connectionsMediums: kishanConnectionMethods,
    workProjects: kishanProjects,
    slogan1: "Design",
    slogan2: "Development"
};



