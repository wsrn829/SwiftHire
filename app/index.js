import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        icon={icons.menu}
                        dimension="60%"
                        onPress={() => router.navigate('NearbyJobs')}
                    />  
                ),
                headerRight: () => (
                    <ScreenHeaderBtn 
                        icon={icons.profile}
                        dimension="100%"
                        onPress={() => router.navigate('Search')}
                    />
                ),
                headerTitle: ""
             }} />

            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                    
                    />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
 