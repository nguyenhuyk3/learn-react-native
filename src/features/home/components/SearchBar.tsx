import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../../../constants';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 10,
                backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                gap: 12,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
                    borderRadius: 8,
                    paddingHorizontal: 12,
                }}
            >
                <Ionicons
                    name="search-outline"
                    size={20}
                    color="#999"
                    style={{ marginRight: 8 }}
                />
                <TextInput
                    style={{
                        flex: 1,
                        paddingVertical: 10,
                        fontSize: SIZES.H7_TITLE,
                        color: COLORS.TEXT_PRIMARY_COLOR,
                    }}
                    placeholder="Tìm kiếm"
                    placeholderTextColor={COLORS.PLACE_HOLDER_TEXT_COLOR}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>

            <TouchableOpacity
                style={{
                    width: 44,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
                    borderRadius: 8,
                }}
            >
                <Ionicons name="options-outline" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;