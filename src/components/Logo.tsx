import { View } from "react-native";
import { Text } from 'react-native-paper';

const Logo: React.FC = () => {
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 6,
            }}>
                <Text style={{
                    fontSize: 48,
                    fontWeight: 'bold',
                    color: '#5D3A3A',
                }}>TV</Text>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: '#5D3A3A',
                    marginLeft: 8,
                }}>Resident</Text>
            </View>
            <Text style={{
                fontSize: 12,
                color: '#5D3A3A',
                letterSpacing: 2,
            }}>THUAN VIET</Text>
        </View>
    )
}

export default Logo;
