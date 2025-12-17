import React from 'react';
import { FlatList } from 'react-native';

import ProjectCard from './ProjectCard';

interface ProjectListProps {
    data: any[];
}

const ProjectList: React.FC<ProjectListProps> = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProjectCard project={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 16 }}
        />
    );
};

export default ProjectList;