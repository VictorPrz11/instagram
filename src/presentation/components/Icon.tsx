import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import Icon 
 from 'react-native-vector-icons/Ionicons'
interface Props{
    icon: string,
    style?: StyleProp<TextStyle>
}
const Icono = ({icon, style}:Props) => {
  return (
    <Icon name={icon} style = {[styles.iconSty,style]}  size={40}/>
  )
}

export default Icono
const styles = StyleSheet.create({
  iconSty:{
    color:'black',
    marginHorizontal:5,
    
  }
})