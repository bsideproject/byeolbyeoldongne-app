import React , { useEffect , useState , useLayoutEffect  } from 'react';
import { View, Text, StyleSheet , TextInput ,TouchableOpacity, Image   } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {UserAPI } from "../module/ServerAPI"
import SignUpHeader from '../components/Header/SignUpHeader';

const SignUpScreen = ({ navigation , route}) => {
    
    const NOTEXT_WARNING = "닉네임을입력해주세요.";
    const FORMAT_WARNING = "특수문자,공백을 제외한 닉네임을 입력해 주세요.";
    const LENGTH_WARNING = "1자~10자 이내의 닉네임을 입력해주세요.";
    const NO_WARNING = "";

    const [ isCorrect , setIsCorrect] = useState(false);    
    const [ userMail , setUserMail] = useState("");
    const [ userNickName , setUserNickName ]  = useState("");   
    const [ warnMessage , setWarnMessage] = useState(NOTEXT_WARNING);

   

    const OnSubmit = async ()=> {
        if(!isCorrect)
            return
        
        console.log( userMail , userNickName);       

        const [ signup, signupError] = await UserAPI.ModifyNickName({
            email : userMail ,
            nick_name : userNickName ,
        });     
        
        console.log(signup);

        const { code , message } = signup;

        switch (code) {
            case "01": //닉네임 수정 완료. 웰컴페이지로.
                navigation.navigate("Welcome");
                break;      
            default:   //닉네임 수정에 실패함..
                break;
        }

    };

    //TO-DO: 닉네임 중복 확인용 서버 API 콜및 응답작성.
    const OnChangeNickName = (e)=>{   
        const { nativeEvent : { text}  } = e;                       
        const incorrectname = /[^(가-힣ㄱ-ㅎㅏ-ㅣ|\w)]{1,10}/gi;       
        console.log(text);       
        if(text === "") {
            setWarnMessage(NOTEXT_WARNING);
            setIsCorrect(false);
        }else if(String(text).length > 10){
            setWarnMessage(LENGTH_WARNING);
            setIsCorrect(false);
        }else if( incorrectname.test(text) ){            
            setWarnMessage(FORMAT_WARNING);
            setIsCorrect(false);
        }else{
            setWarnMessage(NO_WARNING);
            setIsCorrect(true);
        }
        setUserNickName(text);         
        console.log(userNickName);
    };

    useEffect(()=>{        
        //전달받은 User의 메일계정정보를 세팅한다. 
        const { email } = route.params;        
        setUserMail(email);        
    }, []);


    
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <SignUpHeader handlePressNext={OnSubmit} enableNext={isCorrect} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> 반가워요! </Text>           
                    <Text style={styles.title}> 닉네임을 알려주세요</Text>
                </View>            
                <TextInput 
                    style={styles.nickname}
                    placeholderTextColor='grey' 
                    placeholder={"별별동네"}
                    value={userNickName}  
                    autoFocus={true}              
                    onChange={OnChangeNickName}
                    returnKeyType="send"
                    onSubmitEditing={()=>{OnSubmit}}                              
                >            
                </TextInput>
                <View style={styles.WarnContainer}>
                    {   warnMessage == "" ? 
                        (null)
                        :(<Image 
                        resizeMode="contain"
                        source={require("../static/images/icons/warn.png")}/>)
                    }                                
                    <Text style={styles.warn}>{warnMessage}</Text> 
                </View>  
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: { ...StyleSheet.absoluteFillObject },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    titleContainer :{   
        width : '66%',     
        alignItems : 'flex-start',    
        marginBottom : 50 ,  
        marginTop : 50,       
    } ,
    WarnContainer :{   
        width : '66%',     
        alignItems : 'flex-start',    
        marginTop : 30 ,
        flexDirection : "row" ,
    } ,
    title : {
        color : 'black' , 
        fontSize : 26 ,  
        fontWeight : "900" ,
        marginVertical : 5,            
    },
    nickname :{                
        color : 'black',
        width : '66%' ,
        height : 48, 
        paddingVertical : 12 ,
        paddingHorizontal : 24, 
        backgroundColor : '#ffffff',
        shadowColor : 'rgba(234, 75, 99 , 0.11)',
        borderRadius : 50, 
        shadowOffset : {
            width : 0,
            height : 7 
        } ,
        shadowOpacity : 0.51,
        shadowRadius : 13.16,
        elevation : 20,
        fontSize : 14 ,       
    } ,
    warn : {
        color : 'rgba(234, 75, 99, 1)' , 
        fontSize : 12 ,  
        fontWeight : "500" ,    
        marginLeft :5,              
    },
    rightButton : {
        flex : 1,        
        alignItems: 'center',
        justifyContent: "center",
    }    
});

export default SignUpScreen;
