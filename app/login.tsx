import React from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,Text
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Login() {

const [email, setEmail] = useState<string>("");
const[password, setPassword] = useState<string>("");

const[showPassword, setShowPassword] = useState<boolean>(true);

function handleEmailChange(text:string){
    setEmail(text)
}

function handleVisibility(){
    setShowPassword(!showPassword);
}



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior for iOS and Android
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // Offset to account for header
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 flex flex-col bg-[#232B53] justify-center items-center px-3">
          <View className="w-full h-[25vh] flex justify-center items-center">
            <Image
              source={require("../assets/images/logo.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <TextInput
            className="w-full p-4 border border-gray-300 rounded-lg bg-[#2a3467df] text-white"
            textContentType="emailAddress"
            placeholder="Enter your email"
            placeholderTextColor="white"
            keyboardType="email-address" // Tailwind gray-400
            onChangeText={text => setEmail(text)} 
          />
          
          {/* Icon from Expo */}
          <View className="mt-8 flex flex-row justify-between items-center w-full p-4 border border-gray-300 rounded-lg bg-[#2a3467df]">
            <TextInput
                className="w-3/4  text-white"
                textContentType="password"
                placeholder="Enter your password"
                placeholderTextColor="white"
                onChangeText={text => setPassword(text)} 
                secureTextEntry={!showPassword} 

                // Tailwind gray-400
            />

        <MaterialIcons
            onPress={handleVisibility}
            name={showPassword ? 'visibility': 'visibility-off'}
            size={20}
            color="#9ca3af"
            style={{ marginLeft: 8 }}
          />

          </View>

          <Text className="py-4 text-center text-white font-medium text-lg">Forgot Password</Text>


          <TouchableOpacity className='mt-6 w-full bg-[#ec5300d1] py-4 rounded-xl text-center'>
                <Text className="text-center text-xl font-semibold text-white">Login</Text>
           </TouchableOpacity>
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
