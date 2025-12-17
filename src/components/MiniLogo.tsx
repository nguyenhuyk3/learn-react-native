import { View } from "react-native";
import { Text } from 'react-native-paper';

const MiniLogo: React.FC = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 4,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#5D3A3A',
                        lineHeight: 32, //
                    }}
                >
                    TV
                </Text>

                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#5D3A3A',
                        marginLeft: 6,
                        lineHeight: 24, //
                    }}
                >
                    Resident
                </Text>
            </View>

            <Text
                style={{
                    fontSize: 10,
                    color: '#5D3A3A',
                    letterSpacing: 1.5, //
                    fontWeight: '500',
                }}
            >
                THUAN VIET
            </Text>
        </View>
    );
};

export default MiniLogo;
