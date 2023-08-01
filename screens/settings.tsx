import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Settings</Text>

      <Button title="Go to Settings" onPress={() => {
        navigation.navigate('Screen2')
      }}/>
        

    </SafeAreaView>
  )
}

export default Settings