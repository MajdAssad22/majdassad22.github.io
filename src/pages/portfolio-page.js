// React
import React, { useEffect, useState } from 'react';

// Components
import ProjectList from '../components/projects-list';

// API
import getProjects from '../api/projects';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    )
}

export default PortfolioPage;