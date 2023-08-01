import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Screen1 = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Screen 1</Text>

      <Button title="Go back" onPress={navigation.goBack} />

    </SafeAreaView>
  )
}

export default Screen1