import React from 'react';
import { View , Text ,Button, Image , StyleSheet, TouchableOpacity} from 'react-native';
import Onboarding from "react-native-onboarding-swiper" ; 
import { APP_USE_STATE } from '../constants/search';
import inAppStorage from "../service/AsyncStorageService";

const OnBoardScreen = ({navigation})=>{
    
    
    const OnBoardingDone = async ()=>{ 
        await inAppStorage.setItem(APP_USE_STATE.AT_LEAST_ONCE, true);       
        navigation.goBack();
    }   

    const Done = ({isLight , ...props }) => (
        <TouchableOpacity onPress={OnBoardingDone} style={{marginRight : 20}}>
            <Text style={{color :"rgba(101,28,217,1)" , fontSize : 12 , fontWeight : "600" }}>시작하기 </Text>
        </TouchableOpacity>          
      );

    const Skip = ({ isLight, skipLabel, ...props})=>{       
        return (
        <TouchableOpacity onPress={OnBoardingDone} style={ {marginRight : 30 }}>
            <Text style={{color :"black" , fontSize : 12 , fontWeight : "600" }}>SKIP {'>'}</Text>
        </TouchableOpacity>
        );
    };


    return (
        <Onboarding
            showDone={true}
            showSkip={false}
            showNext={true}                        
            DoneButtonComponent={Done}
            NextButtonComponent={Skip}           
            bottomBarColor="white"            
            imageContainerStyles={{ position : 'relative' , height : "50%"}}                        
            pages={[
            {
                //첫번째 온보딩페이지
                backgroundColor : "white" , 
                image : <Image source={require('../static/images/bgimages/onboard1.png')} resizeMode="cover"
                            style={{ marginTop : -72, marginLeft : -40}}/>,
                title : (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>동네별 평가를 한눈에~!</Text>
                </View>),                    
                subtitle : (
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>골목단위로 지도를 옮기며</Text>
                    <Text style={styles.subtitle}>가까운 시설 정보와 실거주자</Text>
                    <Text style={styles.subtitle}>평점 데이터를 한눈에 확인하세요</Text>    
                </View>),                
            },
            {
                //두번째 온보딩페이지
                backgroundColor : "white" , 
                image : <Image source={require('../static/images/bgimages/onboard2.png') } resizeMode="cover"
                          style={{ marginTop : 0}}  />,
                title : (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>우리동네는 What 세권?</Text>
                </View>), 
                subtitle : (
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>카페, 병원등 살다보면</Text>
                    <Text style={styles.subtitle}>꼭 필요한 시설이 가까이 있는</Text>
                    <Text style={styles.subtitle}>동네인지 볼 수 있어요</Text>    
                </View>),
                
            },
            {
                //세번째 온보딩페이지
                backgroundColor : "white" , 
                image : <Image source={require('../static/images/bgimages/onboard3.png')} resizeMode="cover"
                          style={{ marginTop : -70 , marginLeft : 20}}/>,
                title : (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>살아봐야 아는 정보들</Text>
                </View>) , 
                subtitle : (
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>소음, 치안정보 등 직접 살아봐야</Text>
                    <Text style={styles.subtitle}>알게되는 정보들을 항목별로</Text>
                    <Text style={styles.subtitle}>쉽게 작성해서 서로 공유해요</Text>    
                </View>),                                 
            },
            ]}
                 
        />
    );
}

const styles = StyleSheet.create({
    titleContainer : {
        marginBottom : 18 ,
        alignItems : "flex-start" ,       
        width : "70%"
    },
    title : {
        fontSize : 26 ,
        fontWeight : "bold" , 
    } ,
    subtitleContainer : {
        alignItems : "flex-start" ,
        marginLeft : 10,
        width : "70%" ,        
    },  
    subtitle:{
        fontSize : 16,
        fontWeight : "500" ,
    }
});

export default OnBoardScreen;