import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MiniLogo } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import { useProjectStore } from '../../../stores';
import { ProjectCard, SearchBar, Tabs } from '../components';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const {
        projects,
        selectedTab,
        searchQuery,
        error,
        loading,

        setSelectedTab,
        setSearchQuery,

        fetchProjects
    } = useProjectStore();

    useEffect(() => {
        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderContent = () => {
        if (loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={COLORS.APP_PRIMARY_COLOR} />
                    <Text style={{ marginTop: 12, color: COLORS.TEXT_SECONDARY_COLOR, fontSize: 14 }}>
                        Đang tải dữ liệu...
                    </Text>
                </View>
            );
        }

        {/* Component when occurring error */ }
        if (error) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
                    {/* Icon */}
                    <Ionicons name="alert-circle-outline" size={48} color={COLORS.ERROR_COLOR} />

                    {/* Error */}
                    <Text
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                            textAlign: 'center',
                            fontSize: SIZES.H6_TITLE,
                            color: COLORS.ERROR_COLOR
                        }}
                    >
                        {error}
                    </Text>

                    {/* Button */}
                    <TouchableOpacity
                        onPress={fetchProjects}
                        style={{
                            paddingHorizontal: 24,
                            paddingVertical: 12,
                            backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ fontWeight: '600', color: COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR }}>
                            Thử lại
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }

        if ((!loading && projects.length > 0 && filteredProjects.length === 0) || projects.length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Ionicons name="search" size={40} color="#ccc" />
                    <Text style={{ marginTop: 10, color: COLORS.TEXT_SECONDARY_COLOR, fontSize: SIZES.H7_TITLE }}>
                        Không tìm thấy dự án nào.
                    </Text>
                </View>
            );
        }

        return (
            <FlatList
                data={filteredProjects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ProjectCard project={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16 }}
            />
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR, paddingTop: insets.top }}>
            {/* <StatusBar barStyle="dark-content" backgroundColor={OLORS.PRIMARY_BACKGROUND_COLOR} /> */}

            {/* Header */}
            <View
                style={{
                    backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                }}
            >
                <MiniLogo />
            </View>

            {/* Tabs */}
            <Tabs
                selectedTab={selectedTab}
                onSelectTab={setSelectedTab}
            />

            {/* Search */}
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {renderContent()}
        </View>
    );
};
export default HomeScreen;