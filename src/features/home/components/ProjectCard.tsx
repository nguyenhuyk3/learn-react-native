import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProjectResponse } from '../../../dtos';
import { COLORS, SIZES } from '../../../constants';

interface ProjectCardProps {
    project: ProjectResponse;
    onContactPress?: (project: ProjectResponse) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onContactPress }) => {
    const getStatusColor = (status: string): string => {
        return status === "Đang mở bán" ? "#10B981" : "#ee5959ff";
    };

    const handleContactPress = () => {
        if (onContactPress) {
            onContactPress(project);
        }
    };

    return (
        <View
            style={{
                backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                borderRadius: 20,
                marginBottom: 20,
                overflow: 'hidden',
                elevation: 3,
            }}
        >
            {/* Image */}
            <Image
                source={{ uri: project.thumbnail }}
                style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'cover',
                }}
            />

            {/* Content */}
            <View
                style={{
                    padding: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Info column */}
                <View style={{ flex: 1, paddingRight: 10 }}>
                    {/* Status */}
                    <Text
                        style={{
                            fontSize: SIZES.H7_TITLE,
                            fontWeight: '500',
                            marginBottom: 4,
                            color: getStatusColor(project.status),
                        }}
                    >
                        {project.status}
                    </Text>

                    {/* Project name */}
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: SIZES.H5_TITLE,
                            fontWeight: 'bold',
                            color: COLORS.TEXT_PRIMARY_COLOR,
                            textTransform: 'uppercase',
                            marginBottom: 6,
                        }}
                    >
                        {project.name}
                    </Text>

                    {/* Location */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location-outline" size={14} color={COLORS.TEXT_PRIMARY_COLOR} />
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: SIZES.H8_TITLE,
                                color: COLORS.TEXT_PRIMARY_COLOR,
                                marginLeft: 4,
                            }}
                        >
                            {project.city}
                        </Text>
                    </View>
                </View>

                {/* Button */}
                <TouchableOpacity
                    onPress={handleContactPress}
                    style={{
                        backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                        borderRadius: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR,
                            fontSize: SIZES.H7_TITLE,
                            fontWeight: '600',
                        }}
                    >
                        Liên hệ
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProjectCard;
