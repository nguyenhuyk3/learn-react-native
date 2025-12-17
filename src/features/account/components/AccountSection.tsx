import React from 'react';
import { Text, View } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

type Props = {
    title: string;
    children: React.ReactNode;
    style?: object;
};

const AccountSection: React.FC<Props> = ({
    title,
    children,
    style,
}) => {
    return (
        <View style={[{ backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR }, style]}>
            <Text
                style={{
                    fontSize: SIZES.H5_TITLE,
                    fontWeight: '600',
                    color: COLORS.TEXT_PRIMARY_COLOR,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                }}
            >
                {title}
            </Text>
            {children}
        </View>
    );
};

export default AccountSection;
