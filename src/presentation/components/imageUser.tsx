import { View, Text, Image, StyleSheet, StyleProp, ImageComponent, ImageProps, ImageStyle, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
interface User{
    pathImage: string,
    nameUser: string,
    styleImage? : StyleProp<ImageStyle>,
    viewStyle?: StyleProp<ViewStyle> ,
    textStyle?: StyleProp<TextStyle>
}
const UsuarioImagen = ({pathImage, nameUser, styleImage, viewStyle, textStyle}: User) => {
  return (
    <View style = {[styles.container,viewStyle]}>
      <Image style = {[
        styles.image, styleImage
      ]} source={{uri:pathImage}}/>
      <Text numberOfLines={1} style = {[styles.text,textStyle]}>{nameUser}</Text>
    </View>
  )
}

export default UsuarioImagen

const styles = StyleSheet.create({
  container: {
      marginHorizontal:5,
      paddingVertical:15,
      alignItems:'center',
      flex:1

  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 100,

  },
  text:{
    fontWeight: 'bold',
    fontSize:13,
    
    

  }
})