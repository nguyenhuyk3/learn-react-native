import React from 'react';
import { Text } from 'react-native';

import { SIZES } from '../../../constants';

const VersionInfo = () => (
    <Text
        style={{
            textAlign: 'center',
            color: '#999',
            fontSize: SIZES.H7_TITLE,
            paddingVertical: 20,
        }}
    >
        Phiên bản: 1.0.15 (100048)
    </Text>
);

export default VersionInfo;
