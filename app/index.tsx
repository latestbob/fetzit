// app/index.tsx
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text className='text-red-500'>Welcome to the Home Screen!</Text>
           
                <Button title="Go to About Screen" />
            
        </View>
    );
}
