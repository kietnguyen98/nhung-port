import { TProjects } from '@/types';

import { graphicDesignProjectData } from './graphic-design/graphic-design-projects.data';
import { illustrationProjectData } from './illustration/illustration-projects.data';
import { motionGraphicProjectData } from './motion-graphic/motion-graphic-project.data';
import { photoLifeStyleProjectData } from './photo-life-style/photo-life-style-project.data.';

export const projectMockData: TProjects = {
  graphicDesign: graphicDesignProjectData,
  motionGraphic: motionGraphicProjectData,
  photoLifeStyle: photoLifeStyleProjectData,
  illustration: illustrationProjectData,
};
