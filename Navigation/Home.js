import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { Button, Text, View } from 'react-native';

const Home = () =>{
    const navigation= useNavigation()
    const handleNextPage = () => {
        navigation.navigate('Login')
    }
    return(
        <View>
            <Text>Homepage</Text>
            <Button title='Next Page' onPress={handleNextPage} />
        </View>
    )
}

export default Home;