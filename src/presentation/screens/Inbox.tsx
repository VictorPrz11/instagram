import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import IconoButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'

const Inbox = () => {
  const navigation = useNavigation()
  return (
    <View style = {{flex:1, backgroundColor:'white'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconoButton icon='chevron-back-outline' onPress={navigation.goBack} />
        <Text style={{ fontSize: 25 }}>Victor.pr13333a</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <IconoButton icon='create-outline' />
        </View>
      </View>

    </View>

  )
}

export default Inbox