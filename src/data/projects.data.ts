import { TProjects } from '@/types';

import { graphicDesignProjectData } from './graphic-design/graphic-design-projects.data';
import { illustrationProjectData } from './illustration/illustration-projects.data';
import { photographyProjectData } from './photography/photography-projects.data';
import { videoEditingProjectData } from './video-editing/video-editing-projects.data';

export const projectMockData: TProjects = {
    graphicDesign: graphicDesignProjectData,
    motionGraphic: videoEditingProjectData,
    photoLifeStyle: photographyProjectData,
    illustration: illustrationProjectData,
};
