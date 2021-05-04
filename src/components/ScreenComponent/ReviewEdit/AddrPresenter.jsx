

import { View, Text ,StyleSheet ,Image, TouchableOpacity, TextInput , Keyboard, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import theme from '../../../context/theme';




const AddrPresenter = ( { AddrString })=>{

    return (
        <TouchableNativeFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.maincontainer} >
                <View style={styles.containerMarker}>
                    <Image
                        style={styles.MarkerIcon}   
                        resizeMode="contain"                 
                        source={require('../../../static/images/map/marker.png')}
                    />
                </View>
                <View style={styles.containerAddr}> 
                    <Text style={styles.AddrText}>{AddrString}</Text>
                </View>                           
                <TouchableOpacity>
                    <View style={styles.containerChngLocation}>                
                        <Text style={styles.ChngLocationText}>{'위치변경 > '}</Text>                
                    </View>
                </TouchableOpacity>                           
            </View>
        </TouchableNativeFeedback>
    );
}


const styles = StyleSheet.create({
    maincontainer : {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',        
        height: 100, 
        backgroundColor : theme.color.background ,                     
    },
    containerMarker: {       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,   
        marginLeft  : 20 ,       
        width : "10%"
    },
    MarkerIcon :{
        width : 24 ,
        height : 35 ,
    },
    containerAddr :{
        display : 'flex' , 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',         
        width :  "68%"             
    },
    AddrText :{
        fontSize : theme.font.size.large ,
        textAlign : "left" , 
        fontWeight : "bold" , 
    } , 
    containerChngLocation :{
        flex : 1,
        display : 'flex' ,
        flexDirection : "column",
        justifyContent : "flex-end", 
        marginRight : 20,        
        height : "100%"
    },
    ChngLocationText : {
        fontSize : theme.font.size.small ,
        textAlign : "center" ,           
        color : "grey" ,
        paddingBottom : 5,
    }

});


export default AddrPresenter;