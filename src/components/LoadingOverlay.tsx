import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

import { COLORS } from '../constants/index';

interface LoadingOverlayProps {
    visible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    visible,
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            statusBarTranslucent
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.BACKDROP_COLOR,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        minWidth: 150,
                        alignItems: 'center',
                        shadowColor: COLORS.BACKDROP_COLOR,
                        // shadowOffset: { width: 0, height: 2 },
                        // shadowOpacity: 0.25,
                        // shadowRadius: 4,
                        elevation: 5,
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color={COLORS.BUTTON_PRIMARY_COLOR}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default LoadingOverlay;
