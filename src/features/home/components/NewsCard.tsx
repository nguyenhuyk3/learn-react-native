import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NewsResponse } from '../../../dtos';
import { COLORS, SIZES } from '../../../constants';

interface NewsCardProps {
    news: NewsResponse;
    onPress?: (news: NewsResponse) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onPress }) => {
    const handleOnPress = () => {
        if (onPress) {
            onPress(news);
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleOnPress}
            style={{
                backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                borderRadius: 16,
                marginBottom: 16,
                overflow: 'hidden',

                // Android shadow
                elevation: 3,

                // iOS shadow
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.1,
                // shadowRadius: 4,
            }}
        >
            {/* Image Section */}
            <Image
                source={{ uri: news.thumbnail }}
                style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'cover',
                }}
            />

            {/* Content Section */}
            <View
                style={{
                    padding: 12,
                    backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                    justifyContent: 'center',
                    minHeight: 70,
                }}
            >
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                        fontSize: SIZES.H6_TITLE,
                        fontWeight: '600',
                        color: COLORS.TEXT_PRIMARY_COLOR,
                        lineHeight: 22,
                        textAlign: 'left',
                    }}
                >
                    {news.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default NewsCard;
