import React from 'react';
import {Stylesheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export class MenuButton extends React.Component{
    render(){
        return(
            <Ionicons 
                name="menu"
                color="#00000"
                size={32}
                sytle={styleMedia.menuIcon}
                onPress={()=>{}}

                />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon:{
        zIndex: 9,
        position: 'absoulte',
        top: 40,
        left:20
    }
})