import React from 'react';
import { EducationHero } from '../features/education/components/EducationHero';
import { CourseCategories } from '../features/education/components/CourseCategories';
import { FeaturedCourses } from '../features/education/components/FeaturedCourses';
import { ResourceLibrary } from '../features/education/components/ResourceLibrary';
import { LearningPaths } from '../features/education/components/LearningPaths';

export function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <EducationHero />
      <CourseCategories />
      <FeaturedCourses />
      <LearningPaths />
      <ResourceLibrary />
    </div>
  );
}