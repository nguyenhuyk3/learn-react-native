import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

interface TabsProps {
    selectedTab: 'projects' | 'news';
    onSelectTab: (tab: any) => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, onSelectTab }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                paddingHorizontal: 16,
                marginTop: 10,
                gap: 8,
            }}
        >
            {/* Projects */}
            <TouchableOpacity
                onPress={() => onSelectTab('projects')}
                style={{
                    flex: 1,
                    paddingVertical: 12,
                    alignItems: 'center',
                    backgroundColor:
                        selectedTab === 'projects'
                            ? COLORS.SECONDARY_BACKGROUND_COLOR
                            : 'transparent',
                    borderRadius: 8,
                }}
            >
                <Text
                    style={{
                        fontSize: SIZES.H6_TITLE,
                        color:
                            selectedTab === 'projects'
                                ? COLORS.TEXT_SECONDARY_COLOR
                                : COLORS.TEXT_PRIMARY_COLOR,
                        fontWeight: selectedTab === 'projects' ? '600' : '500',
                    }}
                >
                    Dự án
                </Text>
            </TouchableOpacity>

            {/* News */}
            <TouchableOpacity
                onPress={() => onSelectTab('news')}
                style={{
                    flex: 1,
                    paddingVertical: 12,
                    alignItems: 'center',
                    backgroundColor:
                        selectedTab === 'news'
                            ? COLORS.SECONDARY_BACKGROUND_COLOR
                            : 'transparent',
                    borderRadius: 8,
                }}
            >
                <Text
                    style={{
                        fontSize: SIZES.H6_TITLE,
                        color:
                            selectedTab === 'news'
                                ? COLORS.TEXT_SECONDARY_COLOR
                                : COLORS.TEXT_PRIMARY_COLOR,
                        fontWeight: selectedTab === 'news' ? '600' : '500',
                    }}
                >
                    Tin tức
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Tabs;