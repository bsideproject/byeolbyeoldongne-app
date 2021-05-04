import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import { UserAPI } from '../module/ServerAPI';
import Splash from '../components/ScreenComponent/Common/Splash';
import inAppStorage from '../service/AsyncStorageService';
import { APP_USE_STATE } from '../constants/search';

/*
/ 처음 로딩화면
/ 1.유저의 로그인 상태확인
/ 2.리소스 패치
/ 등의 작업을 진행한다.
*/

const GOOGLE_LOGO = '../static/images/icons/google_logo.png';
const APPLE_LOGO = '../static/images/icons/apple_logo.png';

const SignInScreen = ({ navigation }) => {
    const [init, setInit] = useState(true);
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [isFirstRun, setIsFirstRun] = useState(null);

    const setConfig = () => {
        GoogleSignin.configure({
            webClientId:
                '928982736163-e7hhl384hhfhnulnehvpu1u8vju8s2br.apps.googleusercontent.com',
            offlineAccess: true,
            hostedDomain: '',
            forceConsentPrompt: true,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            console.log('...Initializing...');
            setConfig();
            setInit(false);
            checkFirstRun();
        }, 6000);
    }, []);

    const checkFirstRun = async () => {
        const isOnceRun =
            (await inAppStorage.getItem(APP_USE_STATE.AT_LEAST_ONCE)) || false;
        console.log(isOnceRun);
        setIsFirstRun(!isOnceRun);
    };

    useEffect(() => {
        if (isFirstRun === true) {
            setIsFirstRun(false);
            navigation.navigate('Onboard');
        }
    }, [isFirstRun]);

    //구글 로그인
    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();

            setUserInfo(user);
            const [SignIn, SignInError] = await UserAPI.SignInGoogle(user);

            if (SignInError) return;

            switch (SignIn.code) {
                case '01':
                //신규회원
                //닉네임 입력으로 화면전환.
                navigation.navigate('Signup', { email: user.user.email });
                break;

                case '02':
                //기존 회원이므로 메인화면으로
                //닉네임을 포함하여 전달..
                navigation.navigate('Main');
                break;

                case '99':
                //처리오류
                break;
            }
        } catch (error) {
            if ((error.code = statusCodes.SIGN_IN_CANCELLED)) {
                console.log(error);
            } else if ((error.code = statusCodes.IN_PROGRESS)) {
                console.log(error);
            } else if ((error.code = statusCodes.PLAY_SERVICES_NOT_AVAILABLE)) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    };

    const getCurrentUserInfo = async () => {
        try {
            const user = await GoogleSignin.signInSilently();
            setUserInfo(user);
            setIsLoggedIn(user ? true : false);
        } catch (error) {
            console.log(error);
        }
    };

    const googleSignOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUserInfo(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
        }
    };
    //

    //애플 로그인
    const appleSignIn = () => {};

    const setInitlizeApp = () => {
        inAppStorage.clearStore();
        googleSignOut();
    };

    return (
        <>
            {init ? (
                <Splash />
            ) : //로딩완료됨.
            //1.로그인 화면 or 2.온보딩화면으로 넘어감.
            isFirstRun ? (
                    <View />
            ) : (
                <View style={styles.home}>
                    <ImageBackground
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                        resizeMode="cover"
                        source={require('../static/images/bgimages/bkimg_login.png')}
                    >
                        <View style={styles.overLay} />
                    </ImageBackground>
                    <View style={styles.LogoContainer}>
                        <Image
                            resizeMode="cover"
                            source={require('../static/images/symbol/logo_bbdongne.png')}
                        />
                        <Text style={styles.LogoText}>살아보니 어때?</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                                alignContent: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            width: '60%',
                        }}
                    >
                        <TouchableOpacity
                            style={styles.RoundStyle}
                            activeOpacity={0.8}
                            onPress={appleSignIn}
                        >
                            <View style={styles.btnContainer}>
                                <Image
                                    resizeMode="cover"
                                    source={require(APPLE_LOGO)}
                                    style={{ marginLeft: 20 }}
                                />
                                <Text style={styles.btnText}>
                                    Apple로 로그인
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.RoundStyle}
                            activeOpacity={0.8}
                            onPress={googleSignIn}
                        >
                            <View style={styles.btnContainer}>
                                <Image
                                    resizeMode="cover"
                                    source={require(GOOGLE_LOGO)}
                                    style={{ marginLeft: 20 }}
                                />
                                <Text style={styles.btnText}>
                                    Google로 로그인
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                alignContent: 'center',
                                justifyContent: 'center',
                                marginTop: 24,
                                marginBottom: 60,
                            }}
                        >
                            <Text style={styles.prviateText}>
                                로그인함으로써 개인정보취급방침과
                            </Text>
                            <Text
                                style={styles.prviateText}
                                onPress={setInitlizeApp}
                            >
                                이용약관에 동의하는 것으로 간주합니다.
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    highlight: {
        fontWeight: '700',
    },
    overLay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        //backgroundColor: 'rgb(101,028,217)',
        backgroundColor: 'rgb(051,000,204)',
        opacity: 0.7,
    },
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
    btnText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    prviateText: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        marginVertical: 3,
    },
    LogoText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '200',
        marginTop: 34,
        textAlign: 'center',
    },
    LogoContainer: {
        flex: 0.65,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 160,
    },
});

export default SignInScreen;
