import kishanProfileImage from "../assets/placeHolderImg.png";
import projectPlaceHolderImage from "../assets/project-place-holder.jpg";
import miRetail1 from "../assets/mi-retail/mr-1.png";
import miRetail2 from "../assets/mi-retail/mr-2.jpg";
import miRetail3 from "../assets/mi-retail/mr-3.png";

import miService1 from "../assets/service+/xs-1.png";
import miService2 from "../assets/service+/xs-2.png";
import miService3 from "../assets/service+/xs-3.png";

import agencyDashboardAbstract from "../assets/agency/dashboard-abstract.webm";


export default class AssetLocation {
    static readonly kishanProfileImage: string = kishanProfileImage;
    static readonly projectPlaceHolderImage: string = projectPlaceHolderImage;
}

export class KishanAssetLocation {
    static readonly miRetail1: string = miRetail1;
    static readonly miRetail2: string = miRetail2;
    static readonly miRetail3: string = miRetail3;

    static readonly miService1: string = miService1;
    static readonly miService2: string = miService2;
    static readonly miService3: string = miService3;
}

export  class VideoAssets{
    static readonly agencyAbstract :string = agencyDashboardAbstract;
}