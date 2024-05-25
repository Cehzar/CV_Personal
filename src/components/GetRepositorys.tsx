'use client'; 

import React, { useEffect, useState } from 'react';
import getRepositories from '@/components/ConexionGit';
import Carousel from '../components/CarruselGit';
import img from "../../public/ImagenProyectoGit.jpg";
import '../components/GetRepository.css';

const GetRepositorys: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = 'Cehzar'; 
      const repos = await getRepositories(username);
      console.log('Fetched Repositories:', repos);
      setRepos(repos);
    };

    fetchRepos();
  }, []);

  const renderRepo = (repo: any) => {
    if (!repo) {
      return null;
    }

    return (
      <div className="repo-item" key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <img src={img.src} alt={repo.name || 'Repository'} className="repo-image" />
          <div className="repo-title">{repo.name || 'No Name'}</div>
        </a>
      </div>
    );
  };

  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold'}}>Mis Repositorios de GitHub</h2>
      <Carousel items={repos} renderItem={renderRepo} />
    </div>
  );  
};

export default GetRepositorys;