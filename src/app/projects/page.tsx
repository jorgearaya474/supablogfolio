'use client';

import { useState, useEffect } from 'react';
import { supabaseClient } from '@/utils/supabase/client'; // Importa el cliente correcto
import { Project } from '@/types';
import Link from 'next/link';
import ProjectBox from '@/components/projects/ProjectBox';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProjects = async () => {
    const { data, error } = await supabaseClient.from('projects').select('*');

    console.log(data);

    if (error) {
      console.error('Error getting the projects: ', error);
      setError(error.message);
    } else {
      setProjects(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='container h-svh'>
      <div className='py-8'>
        <h1 className='text-4xl font-black uppercase'>Projects</h1>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {projects.map((item) => (
          <ProjectBox key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
}
