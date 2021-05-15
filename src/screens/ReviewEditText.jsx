import React , { useEffect , useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,   
    Platform,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import theme from '../context/theme';
import AddrPresenter from '../components/ScreenComponent/ReviewEdit/AddrPresenter';
import ReviewEditHeader from '../components/Header/ReviewEditHeader';
import  ReviewTextBallon  from '../components/ScreenComponent/ReviewEdit/ReviewTextBallon';
import { useSelector } from 'react-redux';
import { cos } from 'react-native-reanimated';

const MAIN_REVIEW = 0 ;
const GOOD_REVIEW = 1 ;
const BAD_REVIEW = 2 ;




const ReviewEditTextScreen = ({ navigation , route }) => {
   
    const [ nextStep , setNextStep] = useState(false) ; 

    const [ main , setMain] = useState("");
    const [ good , setGood] = useState("");
    const [ bad , setBad] = useState("");
        
    const { town } = useSelector((state) => state.location);

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressNext = ()=>{
        // if(nextStep){
            navigation.navigate("ReviewEditPoint" , { main , good , bad  } );
        //}        
    }
    
    const defaultTextBallon = {        
        minlength : 5, 
        maxlength : 1000 , 
        numberline : 10 ,           
    }

    const main_input = {
        placeholder : "전반적으로 조용하고 슈퍼마켓이 가까이 있어서 살기 좋아요." , 
        reviewenum : MAIN_REVIEW,
       ...defaultTextBallon 
    }

    const good_input = {
        placeholder : "지하철역 5분거리라서 교통이 편해요" , 
        reviewenum : GOOD_REVIEW,
       ...defaultTextBallon 
    }

    const bad_input = {
        placeholder : "주변에 유흥가가 있어서 소음이 있는편입니다." , 
        reviewenum : BAD_REVIEW,
       ...defaultTextBallon 
    }


    const loadReivewContent = (text , selector)=>{    
        switch (selector) {
            case MAIN_REVIEW:
                setMain(text);
                break;
            case GOOD_REVIEW:
                setGood(text);
                break;
            case BAD_REVIEW:
                setBad(text);
                break;            
        }        
        review_validation();
    }

    const review_validation = ()=>{
       if( 
         main.length >= defaultTextBallon.minlength &&
         good.length >= defaultTextBallon.minlength &&
         bad.length >= defaultTextBallon.minlength
       ){          
           setNextStep(true);
       }else{           
           setNextStep(false);
       }         
     
    }

    return ( 
        <SafeAreaView style={styles.main}>
                <ScrollView>
                    <KeyboardAvoidingView 
                            behavior= {(Platform.OS === 'ios')? "padding" : "null"}                   
                            keyboardVerticalOffset={Platform.select({ios: 0, android: 2000} )}
                            style={styles.maincontainer}

                    >                    
                        <ReviewEditHeader
                            handlePressBack={handlePressBack} 
                            handlePressNext={handlePressNext}
                            enableNext={nextStep}
                        />              
                        <AddrPresenter
                            AddrString={town.data == null ? "주소가 지정되지 않았습니다." : town.data.addressName}                           
                        />               
                        <ReviewTextBallon
                            setting={main_input}
                            setExternValue={loadReivewContent}                                                
                        />
                        <ReviewTextBallon
                            setting={good_input} 
                            setExternValue={loadReivewContent}                       
                        />
                        <ReviewTextBallon
                            setting={bad_input}
                            setExternValue={loadReivewContent}                        
                        />                                                 
                    </KeyboardAvoidingView>
                </ScrollView>         
        </SafeAreaView>       
               
    );
};

const styles = StyleSheet.create({
    main : { ...StyleSheet.absoluteFillObject,} ,
    maincontainer: {        
        backgroundColor: theme.color.background_light,
        flex : 1,
    },
    keboardavoid : {
        backgroundColor: theme.color.background_light,
        paddingVertical : 50,
        flex : 1,
    },
    ballonContainer :{
        flex : 0.7,
        justifyContent: "flex-start",
        alignContent : "center", 
        backgroundColor : theme.color.background_light
    }
});

export default ReviewEditTextScreen;
