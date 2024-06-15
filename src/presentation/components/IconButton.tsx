import { View, Text, TextStyle, StyleProp, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
interface Props{
    icon: string,
    style?: StyleProp<TextStyle>,
    onPress ? : ()=>void,


}
const IconoButton = ({icon, style, onPress}:Props) => {
  return (
  <Pressable style = {({pressed})=>({
    opacity: pressed ? 0.5 : 1,
  })} onPress={onPress}>
    <Icon name={icon} style = {[styles.iconSty,style]}  size={40}/>
  </Pressable>
  )
}

export default IconoButton

const styles = StyleSheet.create({
  iconSty:{
    color:'black',
    marginHorizontal:5
    
  }
})
