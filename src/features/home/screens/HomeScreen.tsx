import React, { useEffect } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MiniLogo } from '../../../components';
import { COLORS } from '../../../constants';
import useHomeStore from '../../../stores/home_store';
import { Empty, Error, Loading, NewsCard, ProjectCard, SearchBar, Tabs } from '../components';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const {
        projects,
        allNews,
        selectedTab,
        searchQuery,
        error,
        loading,

        setSelectedTab,
        setSearchQuery,

        fetchProjects,
        fetchAllNews,
    } = useHomeStore();

    useEffect(() => {
        if (selectedTab === 'news') {
            fetchAllNews();
        }

        if (selectedTab === 'projects') {
            fetchProjects();
        }
    }, [selectedTab]);

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderContent = () => {
        if (loading) {
            return <Loading />
        }

        {/* Component when occurring error */ }
        if (error) {
            return <Error
                message={error}
                onRetry={selectedTab === 'projects' ? fetchProjects : fetchAllNews} />
        }

        if (selectedTab === 'projects') {
            if (filteredProjects.length === 0) {
                return <Empty />;
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

        if (selectedTab === 'news') {
            if (allNews.length === 0) {
                return <Empty />;
            }

            return (
                <FlatList
                    data={allNews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <NewsCard news={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ padding: 16 }}
                />
            );
        }
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
            {selectedTab === 'projects' &&
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            }

            {renderContent()}
        </View>
    );
};
export default HomeScreen;