import React , { useEffect , useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,   
    Platform,
    Modal,
    Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import theme from '../context/theme';
import ReviewEditHeader from '../components/Header/ReviewEditHeader';
import AddrPresenter from '../components/ScreenComponent/ReviewEdit/AddrPresenter';
import ReviewStarBallon from '../components/ScreenComponent/ReviewEdit/ReviwStarBallon';
import SimpleModal from '../components/Modal';
import { ReviewAPI } from '../module/ServerAPI';
import { APIObjConverter } from '../module/Utility';
import { useDispatch, useSelector } from 'react-redux';
import PopUpModal from '../components/Popup';


const POINT = Object.freeze( { 
    TRAFICC : 0  , 
    CONVENIENCE : 1 , 
    NOISE : 2 ,
    SAFETY : 3 , 
})


const CONFIRM = require("../static/images/icons/confirm.png")


const ReviewEditPointScreen = ({ navigation , route }) => {
   
    const [ nextStep , setNextStep] = useState(false) ;
    
    const [traffic , setTraffic] = useState(0);
    const [convenience , setConvenience] = useState(0);
    const [noise , setNoise] = useState(0);
    const [safety , setSafety] = useState(0);
    const [review , setRevieww] = useState(null);
    const [popResult , setPopResult] = useState(false);
    const [message , setMessage] = useState("");

    const { coords, town } = useSelector((state) => state.location);
    const { email } = useSelector((state) => state.user);

    useEffect(()=>{        
        //전달받은 Review를 세팅한다. 
        const { main, good , bad  } = route.params;       
        setRevieww({main , good, bad});        
    }, []);

    const handlePressBack = ()=>{
        navigation.goBack();        
    }

    const handlePressNext = async ()=> {        
        const result =  await writeReview();
        console.log("리뷰 저장중..");
        

        if(result[0] == null){
            //오류 발생 
            setMessage("후기등록중 오류가 발생하였습니다.")
            setPopResult(true);                             
                   
        }else{
            const { code , message } = result[0];
            
            switch (code) {
                case "0000":
                    //성공적으로 저장됨                
                    setMessage("후기가 등록되었습니다.")
                    setPopResult(true);
                    break;
                case "1000" : 
                    //실패
                    setMessage("후기등록중 오류가 발생하였습니다.")
                    setPopResult(true);                             
                    break;
            }
        }
         
    }

    const writeComplete = ()=>{
        setPopResult(false);
        navigation.navigate("Main");
    }

    const writeReview = async () => {
        const reviewedtown = town.data;
        ;
        console.log(reviewedtown)

        const data = {            
            adress : reviewedtown.addressName ,
            road : reviewedtown.roadAddress , 
            cordX : reviewedtown.lng.toFixed(3) ,
            cordY : reviewedtown.lat.toFixed(3),
            user_email : email ,
            traffic ,
            convenience ,
            noise,
            safety ,
            place : reviewedtown.placeId ,
            ...review
        }       
        
        const result = await ReviewAPI.AddReview(APIObjConverter.ByeolReview(data));
     
        return result;
    }

    const loadReivewPoint = (point , selector)=>{    
        switch (selector) {
            case POINT.TRAFICC:
                setTraffic(point);
                break;
            case POINT.CONVENIENCE:
                setConvenience(point);
                break;
            case POINT.NOISE:
                setNoise(point);
                break;       
            case POINT.SAFETY:
                setSafety(point);
                break
        }        
        review_validation();
    }

    const review_validation = ()=>{
        // console.log(`${traffic} ${convenience} ${noise} ${safety}`);
        if( 
            traffic > 0 &&
            convenience > 0 &&
            noise > 0 &&
            safety > 0
        ){          
            setNextStep(true);
        }else{           
            setNextStep(false);
        }         
      
     }
     

    return ( 
        <SafeAreaView style={styles.main}> 
            <View style={styles.maincontainer}>
                <ReviewEditHeader
                    handlePressBack={handlePressBack} 
                    handlePressNext={handlePressNext}
                    enableNext={nextStep}
                />
                 <AddrPresenter
                    AddrString={town.data == null ? "주소가 지정되지 않았습니다." : town.data.addressName}                    
                />
                <View style={styles.pointcontainer}>
                    <ReviewStarBallon
                        setting = {POINT.TRAFICC}
                        setExternValue = {loadReivewPoint}
                    />
                    <ReviewStarBallon
                        setting = {POINT.CONVENIENCE}
                        setExternValue = {loadReivewPoint}
                    />
                    <ReviewStarBallon
                        setting = {POINT.NOISE}
                        setExternValue = {loadReivewPoint}
                    />
                    <ReviewStarBallon
                        setting = {POINT.SAFETY} 
                        setExternValue = {loadReivewPoint}
                    />                    
                </View>               
            </View>
            <PopUpModal popModal={popResult} confirm={writeComplete}>
                <Image resizeMode="contain"  source={CONFIRM} />
                <Text style={styles.confirmText}>{message}</Text>
            </PopUpModal>                      
        </SafeAreaView>            
    );
};

const styles = StyleSheet.create({
    main : { ...StyleSheet.absoluteFillObject,} ,
    maincontainer: {        
        backgroundColor: theme.color.background_light,
        flex : 1,
    },    
    pointcontainer : {
        flex : 1 ,
        backgroundColor : theme.color.subBackground,
        marginTop : 12 ,
    },
    confirmText : {
        fontSize : 15 ,
        fontWeight : "bold" ,
        paddingTop : 20,
    }
});

export default ReviewEditPointScreen;
