import { View, Text ,StyleSheet ,Image, TouchableOpacity
         , TextInput, Keyboard, KeyboardAvoidingView , Alert
    , TouchableNativeFeedback, Animated, Dimensions , TouchableWithoutFeedback, Pressable , findNodeHandle } from 'react-native';
import theme from '../../../context/theme';
import  React , { useEffect ,useState , useRef}  from 'react';
import  {Directions, FlingGestureHandler, Swipeable , State, RectButton} from 'react-native-gesture-handler';



const AnimatedView = Animated.createAnimatedComponent(View);

const ListPointRes = [
    { title : "교통/접근성"},
    { title : "편의시설"},
    { title : "주변소음"},
    { title : "치안/안전"},
]

const EMPTY_STAR = require("../../../static/images/icons/empty_star.png")
const FILLED_STAR = require("../../../static/images/icons/filled_star.png")
const HALF_FILLED_STAR = require("../../../static/images/icons/half_filled_star.png")


const ReviewStarBallon = ( { setting ,setExternValue , ...props} )=>{

    
    const [starPoint , setStarPoint] = useState(0);
    
    const [one , setOne] = useState(EMPTY_STAR);
    const [two , setTwo] = useState(EMPTY_STAR);
    const [three , setThree] = useState(EMPTY_STAR);
    const [four , setFour] = useState(EMPTY_STAR);
    const [five , setFive] = useState(EMPTY_STAR);
    
    const zeroStar = useRef(null);
    const oneStar = useRef(null);
    const twoStar = useRef(null);
    const threeStar = useRef(null);
    const fourStar = useRef(null);
    const fiveStar = useRef(null);
    const maxStar = useRef(null);
    
    
    const onChange = (point)=>{             
        setStarPoint(point);    
        //외부에서 해당 component가 선언된 쪽으로 state를 넘김.
        setExternValue(point, setting);
    }
    
    const touchAction = ( {nativeEvent}) => {        
       const isHalf = nativeEvent.locationX <= 15 ? (nativeEvent.locationX >=3 ? 0.5 : 0 ) : 1; 
       
       setWholeStar(false);
       switch (nativeEvent.target) {
            case oneStar.current._nativeTag:
                setOne(isHalf == 0 ? EMPTY_STAR : (isHalf == 0.5 ? HALF_FILLED_STAR : FILLED_STAR)  );
                onChange(0+isHalf);
                break;
            case twoStar.current._nativeTag:
                setOne(FILLED_STAR);
                setTwo(isHalf == 0 ? EMPTY_STAR : (isHalf == 0.5 ? HALF_FILLED_STAR : FILLED_STAR)  );
                onChange(1+isHalf);
                break;
            case threeStar.current._nativeTag:
                setOne(FILLED_STAR);
                setTwo(FILLED_STAR);
                setThree(isHalf == 0 ? EMPTY_STAR : (isHalf == 0.5 ? HALF_FILLED_STAR : FILLED_STAR)  );
                onChange(2+isHalf);
                break;
            case fourStar.current._nativeTag:
                setOne(FILLED_STAR);
                setTwo(FILLED_STAR);
                setThree(FILLED_STAR);
                setFour(isHalf == 0 ? EMPTY_STAR : (isHalf == 0.5 ? HALF_FILLED_STAR : FILLED_STAR)  );
                onChange(3+isHalf);
                break;
            case fiveStar.current._nativeTag:
                setOne(FILLED_STAR);
                setTwo(FILLED_STAR);
                setThree(FILLED_STAR);
                setFour(FILLED_STAR);
                setFive(isHalf == 0 ? EMPTY_STAR : (isHalf == 0.5 ? HALF_FILLED_STAR : FILLED_STAR)  );
                onChange(4+isHalf);
                break;
            case maxStar.current._nativeTag:
                setWholeStar(true);
                onChange(5);
           default:     
                onChange(0);           
                break;
       } 

    }

    const setWholeStar = (isMax)=>{
        setOne(isMax ? FILLED_STAR :EMPTY_STAR);
        setTwo(isMax ? FILLED_STAR :EMPTY_STAR);
        setThree(isMax ? FILLED_STAR :EMPTY_STAR);
        setFour(isMax ? FILLED_STAR :EMPTY_STAR);
        setFive(isMax ? FILLED_STAR :EMPTY_STAR);
    }
   

    return (  
         
            <View style={styles.maincontainer} >   
                <View style={styles.titlecontainer}>  
                    <Text style={styles.title}>{ListPointRes[setting].title}</Text>                 
                </View>        
                <Pressable onPressIn={touchAction} accessibilityRole="imagebutton">
                    <View style={styles.startcontainer}>
                        <View ref={zeroStar}>
                            <Text style={{ color:theme.color.background}}>0이하</Text>
                        </View>                           
                        <Image
                            resizeMode="contain"
                            source={one}  
                            ref={oneStar}                                                                        
                        />
                        <Image
                            resizeMode="contain"
                            source={two}  
                            ref={twoStar}                                                 
                        />
                        <Image
                            resizeMode="contain"
                            source={three} 
                            ref={threeStar}                                                        
                        />
                        <Image
                            resizeMode="contain"
                            source={four}  
                            ref={fourStar}                          
                        />
                        <Image
                            resizeMode="contain"
                            source={five}
                            ref={fiveStar}                            
                        />
                        <View >
                            <Text ref={maxStar} style={{ flex : 1 ,height:"100%" , color: theme.color.background}}>0이하</Text>
                        </View>                      
                    </View>    
                </Pressable>                                                                    
            </View>   
                  
    );
}


const styles = StyleSheet.create({
    maincontainer : {        
        alignItems: 'center',   
        justifyContent : 'space-evenly' ,      
        width : "100%" ,
        height : 120 ,  
        backgroundColor : theme.color.background ,                    
    },  
    titlecontainer : {      
        justifyContent : "center",    
        alignContent : "center"  ,
        width : "100%",                 
    },  
    swipecontainer :{
        justifyContent : "center",    
        alignContent : "center"  ,
        width : "85%", 
        borderBottomWidth : 2 ,
        borderColor : theme.color.subBackground,   
    },
    pointcontainer : {
        justifyContent : "center", 
        flexDirection : "row",   
        alignContent : "center"  ,
    }, 
    startcontainer : {
        justifyContent : "center", 
        flexDirection : "row",   
        alignContent : "center"  ,
        backgroundColor : theme.color.background, 
    }, 
    title : {
        fontSize : 14,
        textAlign : "center", 
    },
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
    },
    
});

export default ReviewStarBallon;


