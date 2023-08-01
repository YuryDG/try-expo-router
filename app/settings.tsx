import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'

const Screen3 = () => {
  const router = useRouter()
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Settings</Text>

      <Button title="Go back" onPress={navigation.goBack} />

      <Button
        title="Go to tab tab1/Screen1"
        onPress={() => {
          router.push('/tab1/screen1')
        }}
      />
    </SafeAreaView>
  )
}

export default Screen3