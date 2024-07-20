import { Project } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectBoxProps {
  project: Project;
}

export default function ProjectBox({ project }: ProjectBoxProps) {
  const { title, description, image_url, project_url } = project;
  return (
    <div className='bg-white shadow-md hover:shadow-xl transition-shadow p-4 rounded-lg'>
      <Link
        className='flex flex-col'
        rel='nofollow'
        href={project_url}
        target='_blank'
      >
        <div className='mb-3'>
          <Image
            className='rounded-md'
            src={image_url}
            alt={title}
            width={400}
            height={300}
          />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-3'>{title}</h3>
          <p className='text-md'>{description}</p>
        </div>
      </Link>
    </div>
  );
}
