import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'

const Screen2 = () => {
  const router = useRouter()
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Screen 2</Text>

      <Button title="Go back" onPress={navigation.goBack} />

      <Button title="Go to screen 3" onPress={()=> router.push('/screen3')} />
    </SafeAreaView>
  )
}

export default Screen2