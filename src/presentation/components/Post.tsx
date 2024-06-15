import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import UsuarioImagen from './imageUser'
import { Image } from 'react-native'
import Icono from './IconButton'
import IconoButton from './IconButton'

interface Props{
    userName:string,
    userAvatar: string,
    imagePost: string,
    description:string,
    lines?: number
}
const Post = ({description,userAvatar,userName,imagePost, lines = 1}:Props) => {
    const {width} = useWindowDimensions()
    const [showLines, setShowLines] = useState(false)
    const numberlines = showLines ? lines + 3 : lines 
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
            <UsuarioImagen nameUser={userName} pathImage={userAvatar} styleImage  = {{
                height:40,
                width:40,
                marginRight:10
            }} viewStyle = {{flexDirection: 'row',}} textStyle = {{fontSize:18}}/>
           <Icono icon='ellipsis-horizontal-outline'/>
      </View>
      <Image style= {styles.postImage} source={{uri: imagePost}} />
      <View style = {styles.iconContainer}>
        <IconoButton icon='heart-outline' />
        <Icono icon='chatbubble-outline'/>
        <Icono icon='send-outline'/>
        <Icono icon='bookmark-outline' style = {{left:220}}/>
      </View>
      <View style = {{marginHorizontal:10}}>
       <View>
         <Text numberOfLines={numberlines}   >
          {<Text style  = {{fontWeight:'bold'}}>{userName}</Text>} {description}
        </Text>
       </View>
        <Pressable onPress={()=>setShowLines(!showLines)}>
          <Text>ver mas...</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Post
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height:50,
        justifyContent: 'center',
        alignItems:'center'
    },
    container:{
        flex: 1,
        marginBottom:10
    },
    postImage:{
        height:500,
       
    },
    iconContainer:{
        marginTop:10 ,
        flexDirection:'row',
        marginHorizontal:10
        // justifyContent:'flex-end',

    }
})