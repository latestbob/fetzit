// app/index.tsx
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {


     const router = useRouter();

    function handleExistPressed(){
       router.push('/login');
    }
    return (
      
        // index screen

        <View className="flex-1 flex flex-col bg-[#232B53] justify-center items-center px-3">

          

            <View className="w-full h-[25vh] flex justify-center items-center">
                  <Image source={require('../assets/images/logo.png')} className="w-full h-full" resizeMode='contain'/>
            </View>

            <Text className='text-white font-medium text-lg'>Delivering Trust with Every Package</Text>

           

           <TouchableOpacity onPress={handleExistPressed} className='mt-16 w-full bg-[#ec5300d1] py-4 rounded-xl text-center'>
                <Text className="text-center text-xl font-semibold text-white">Existing Users</Text>
           </TouchableOpacity>

           <TouchableOpacity className='mt-6 w-full bg-[#267e8a] py-4 rounded-xl text-center'>
                <Text className="text-center text-xl font-semibold text-white">New Users</Text>
           </TouchableOpacity>
        </View>
    );
}
