'use client';

import { useState, useEffect } from 'react';
import { supabaseClient } from '@/utils/supabase/client'; // Importa el cliente correcto
import { Project } from '@/types';
import Link from 'next/link';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProjects = async () => {
    const { data, error } = await supabaseClient
      .from<Project>('projects')
      .select('*');

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
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a>{project.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
