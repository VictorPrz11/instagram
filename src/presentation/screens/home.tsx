const lista = [
    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 1,
        name: 'victorperez'
        , post: 'https://picsum.photos/500/500',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam minus impedit esse cum itaque libero unde quaerat. Reprehenderit, quaerat expedita ab molestias fugiat nisi! Ea, tempora dolorum! Nihil, et! Fugit!',
        

    },

    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 2,
        name: 'Daniel-Rodriguez'
        , post: 'https://picsum.photos/500/500',
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa optio itaque nostrum debitis laborum ad et. Animi, molestiae reiciendis. Nostrum dolorum excepturi error debitis minus expedita facere ipsa reprehenderit natus?'

    },

    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 3,
        name: 'Juliososa'
        , post: 'https://picsum.photos/500/500',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis et numquam hic minus possimus tenetur a sed esse. Sed, dolorum. Doloremque amet nemo excepturi reiciendis eveniet. Vel omnis veritatis officiis.'

    },

    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 4,
        name: 'Jose_Aguilar'
        , post: 'https://picsum.photos/500/500',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto minima enim voluptatem temporibus voluptatum beatae! Perspiciatis repellendus obcaecati optio dignissimos illum aliquid eaque commodi? Esse fuga incidunt saepe fugit.'

    }
    ,
    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 5,
        name: 'ximena.noriega'
        , post: 'https://picsum.photos/500/500',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ad quae quam? Illo vero quam dicta a, fugiat soluta quas magni, eaque architecto molestiae nesciunt veritatis nihil. Consectetur, quam illum!'

    },

    {
        path: 'https://i.stack.imgur.com/l60Hf.png',
        id: 6,
        name: 'Hugo Lopez'
        , post: 'https://picsum.photos/500/500',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, aut molestiae. Temporibus saepe libero dicta commodi distinctio ipsam nostrum fugiat minus similique aliquid amet, adipisci, error laudantium. Incidunt, voluptates quia.'

    }


]
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import UsuarioImagen from '../components/imageUser'
import { useWindowDimensions } from 'react-native'
import Post from '../components/Post'
import Icono from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { userData } from '../../Object/userData';

const Home = () => {



    const { height } = useWindowDimensions()
    const navigation = useNavigation()
    return (


        <View style ={{flex:1, backgroundColor:'white'}}>
            <View style={styles.header}>
                <Text style={{ fontFamily: 'PlaywriteVN-Regular', fontSize: 25 }}>Instagram</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icono icon='heart-outline' />
                    <Icono icon='chatbubble-outline' onPress={() => navigation.navigate('Inbox' as never)} />
                </View>
            </View>
            <ScrollView >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        lista.map((item) => (<UsuarioImagen pathImage={item.path} key={item.id} nameUser={item.name} />))
                    }
                </ScrollView>
                {
                    lista.map((item) => (<Post key={item.id} description={item.description} userName={item.name} imagePost={item.post} userAvatar={item.path} />))
                }
                <View style={{ height: 80 }} /> 
            </ScrollView>
        </View>



    )
}

export default Home
const styles = StyleSheet.create({
    header: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }
})
