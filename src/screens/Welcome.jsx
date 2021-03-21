import React, { useState , useEffect } from 'react';
import { View , StyleSheet , TouchableOpacity ,Text, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from  '@react-native-community/google-signin';
import RectangleButton from '../components/Buttons/RectangleButton';
import SafeAreaView from 'react-native-safe-area-view';

const WelcomeScreen = ({ navigation }) => {
    const [warnMessage, setWarnMessage] = useState('');
    const [isLoggedin, setIsLoggedIn] = useState(true);

    useEffect(() => {
        setWarnMessage(
            '다른 사람의 동네 후기를 보기 위해서는 먼저 동네 후기 작성이 필요합니다.'
        );
        setConfig();
    }, []);

    useEffect(() => {
        if (!isLoggedin) {
            navigation.navigate('Signin');
        }
    }, [isLoggedin]);

    const goToMain = () => {
        navigation.navigate('Main');
    };

    const googleSignOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
        }
    };

    const setConfig = () => {
        GoogleSignin.configure({
            webClientId:
                '928982736163-e7hhl384hhfhnulnehvpu1u8vju8s2br.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            forceConsentPrompt: true,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBarContainer}>
                <TouchableOpacity activeOpacity={1}                
                    onPress={goToMain}
                >                
                    <Text style={{color :"grey" }}>건너뛰기</Text> 
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={googleSignOut} style={{marginRight : 280}}>                                                
                    <Text style={{color :"grey" }}>로그아웃</Text>                                          
                </TouchableOpacity> 
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>별별동네에 오신 것을</Text>
                <Text style={styles.welcomeText}>환영합니다~!</Text>
            </View>
            <View style={styles.subTextContainer}>
                <Text style={styles.subText}>
                    지금 살고 있는 동네, 살기 좋은가요?
                </Text>
                <Text style={styles.subText}>
                    과거에 살았던 동네, 어땟나요?
                </Text>
                <Text style={styles.subText}>
                    생생한 동네 후기를 남겨주세요
                </Text>
            </View>

            <Image
                resizeMode='cover'
                source={require("../static/images/bgimages/welcome_onboard.png")} 
                style={styles.imageWelcome}   
            />

            <View style={styles.WarnContainer}>
                {   warnMessage == "" ? 
                    (null)
                    :(<Image 
                    resizeMode="contain"
                    source={require("../static/images/icons/warn.png")}/>)
                }                                
                <Text style={styles.warn}>{warnMessage}</Text> 
            </View>
            <View style={styles.btnViewContainer}>                
                <RectangleButton text={"동네후기 작성하기"} onPress={goToMain}/>                
            </View>                                                                                                             
        </SafeAreaView>>
    ); 

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topBarContainer: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        width: '100%',
        marginLeft: 20,
    },
    welcomeContainer: {
        marginTop: 40,
    },
    welcomeText: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTextContainer: {
        marginTop: 15,
    },
    subText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    splashContainer: {
        flex: 0.65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWelcome: {
        marginTop: 52,
    },
    warn : {
        color : 'rgba(234, 75, 99, 1)' , 
        fontSize : 12 ,  
        fontWeight : "500" ,    
        marginTop : 10,
        textAlign : 'center'           
    },
    WarnContainer :{   
        width : '50%',     
        alignItems : 'center',    
        marginTop : 30 ,
        flexDirection : "column" ,
    } ,
    RoundStyle: {
        marginVertical: 10,
        paddingVertical: 14,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        height: 47,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      btnText : {
        color : "black" , 
        fontSize : 15 ,
        fontWeight : "600" ,
        textAlign : 'center' ,
        marginHorizontal : 20 
      },
      btnViewContainer : {
          marginTop : 20,
          width : "100%" ,
          height : "8%",
          alignItems :'center'
      }
  });

export default WelcomeScreen;

/*
<TouchableOpacity style={styles.RoundStyle} activeOpacity={0.8} onPress={goToMain}>
                    <View style={styles.btnContainer}>                               
                        <Text style={styles.btnText}>후기작성</Text>
                    </View>
                </TouchableOpacity>
                */
