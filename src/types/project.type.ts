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

export type TProjectIdName =
  | 'graphic-design'
  | 'photo-life-style'
  | 'motion-graphic'
  | 'illustration';

export type TProject = {
  name: string;
  idName: TProjectIdName;
  description: string;
  outerImageUrl: string;
  introImageUrl: Array<string>;
  demoImages: TDemoImages;
  brands: Array<TBrand>;
};

export type TProjects = {
  graphicDesign?: TProject;
  motionGraphic?: TProject;
  photoLifeStyle?: TProject;
  illustration?: TProject;
};
