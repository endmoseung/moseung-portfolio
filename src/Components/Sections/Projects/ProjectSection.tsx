import React from 'react'

interface ProjectSectionProps {
  ref: React.RefObject<HTMLDivElement>
}

const ProjectSection = ({ ref }: ProjectSectionProps) => {
  return <div ref={ref} className="h-[2000px] border-b-2 border-b-gray-700" />
}

export default ProjectSection
