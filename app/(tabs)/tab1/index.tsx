import { Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Settings = () => {
  const router = useRouter()

  return (
    <SafeAreaView>
      <Text>Settings</Text>

      <Button title="Go to Settings" onPress={() => {
        router.push('/settings')
      }}/>
        

    </SafeAreaView>
  )
}

export default Settings