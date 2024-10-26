// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import '../global.css';



export default function Layout() {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen 
                name="index" 
                options={{ headerShown: false }} // Hide the header for the index screen
            />
            {/* <Stack.Screen 
                name="About" 
                options={{ headerShown: false }} // Hide the header for the About screen
            /> */}
        </Stack>
    );
}
