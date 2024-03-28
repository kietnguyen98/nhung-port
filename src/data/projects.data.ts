import { TProjects } from '@/types';

import { graphicDesignProjectData } from './graphic-design/graphic-design-projects.data';
import { photographyProjectData } from './photography/photography-projects.data';
import { videoEditingProjectData } from './video-editing/video-editing-projects.data';

export const projectMockData: TProjects = {
    graphicDesign: graphicDesignProjectData,
    photo: photographyProjectData,
    animation: videoEditingProjectData,
};
