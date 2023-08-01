import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Tab1 = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab1</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default Tab1