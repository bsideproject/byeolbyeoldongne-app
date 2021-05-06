import React, { useState , useEffect } from 'react';
import { View , StyleSheet , ImageBackground ,Text, Image } from 'react-native';


const Splash = () => {
    return (
        <View style={styles.home}>           
            <ImageBackground
                style={
                    {
                    width : '100%' ,
                    height : '100%' ,
                    position : "absolute" , 
                    top : 0 ,
                    left : 0 ,                            
                    }
                }
                resizeMode = "cover"
                source={require('../../../static/images/bgimages/bkimg_login.png')}                        
                > 
                <View style={styles.overLay}/>
                <View style={ {flex : 0.35}}>
                </View>
                <View style={styles.splashContainer}>
                    <Image
                        resizeMode='cover'
                        source={require('../../../static/images/symbol/logo_bbdongne.png')}    
                    />
                    <Text style={styles.splashText} >저 동네,궁금하지 않아?</Text>       
                </View>                                                                          
                </ImageBackground>                                 
        </View>
    );

};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },   
    overLay : {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      //backgroundColor: 'rgb(101,028,217)',
      backgroundColor: 'rgb(051,000,204)',
      opacity: 0.7
    },
    splashText : {        
        color : '#FFFFFF' ,
        fontSize : 16, 
        fontWeight : "200" ,
        marginTop : 40
    },
    splashContainer : {
        flex : 0.65 ,        
        justifyContent: 'center',
        alignItems : 'center'
    }
  });

export default Splash;