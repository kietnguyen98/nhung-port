export type TPost = {
    type: 'photo' | 'video';
    thumbnailUrl?: string;
    sourceUrl: string;
};

export type TBrand = {
    name: string;
    logoURL: string;
    posts: Array<TPost>;
};

export type TDemoImages = {
    mainImageUrl: string;
    subImageUrls: Array<string>;
};

export type TProject = {
    name: string;
    description: string;
    outerImageUrl: string;
    introImageUrl: Array<string>;
    demoImages: TDemoImages;
    brands: Array<TBrand>;
};

export type TProjects = {
    graphicDesign?: TProject;
    animation?: TProject;
    photo?: TProject;
    illustration?: TProject;
};
