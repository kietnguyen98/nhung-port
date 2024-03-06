export type TPost = {
    type: 'photo' | 'video';
    sourceUrl: string;
};

export type TBrand = {
    name: string;
    logoURL: string;
    // postImageUrls: Array<string>;
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
