import React from 'react';
import { TouchableOpacity , View, Text, StyleSheet} from 'react-native';


const RectangleButton = ({text , ...props})=>{
    return (
        <TouchableOpacity activeOpacity={1} style={styles.RectangleStyle} {...props}>
            <Text style={styles.ButtonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    RectangleStyle: {        
        backgroundColor : 'rgba(101,28,217,1)',
        width : "98%",  
        height : "98%" ,
        alignItems : "center", 
        justifyContent : "center"     
    },
    ButtonText :{
        color : "white" , 
        fontSize : 15 ,
        lineHeight : 22 ,
    }
})

export default RectangleButton;