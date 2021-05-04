import { View, Text ,StyleSheet ,Image, TouchableOpacity , TextInput, Keyboard, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native';
import theme from '../../../context/theme';
import  React , { useEffect ,useState } from 'react';


const ListReviewRes = [
    { title : "이골목은 살기 어땟나요?" , res : require( '../../../static/images/imoji/total.png') } ,
    { title : "어떤 점이 좋았나요?", res : require('../../../static/images/imoji/good.png')  } ,
    { title : "어떤 점이 아쉬웠나요?", res : require('../../../static/images/imoji/bad.png') }
];


const ReviewTextBallon = ( {  setting, setExternValue, ...props })=>{

    const { placeholder , minlength, maxlength , numberline , reviewenum }  = setting;       
    
    const [review , setReview] = useState("");
    
    const onChange = (text)=>{        
        setReview(text);    
        //외부에서 해당 component가 선언된 쪽으로 state를 넘김.
        setExternValue(text, reviewenum);
    }

    return (        
               
            <View style={styles.maincontainer} >
                <TouchableNativeFeedback onPress={()=> Keyboard.dismiss()} >             
                <View style={styles.titlecontainer}>
                    <Image                         
                            resizeMode="contain"                 
                            source={ListReviewRes[reviewenum].res}
                    />
                    <Text style={{ fontSize: theme.font.size.large , color : "black" , marginLeft : 5}}>{ListReviewRes[reviewenum].title}</Text>
                </View>
                </TouchableNativeFeedback> 
                <View style={styles.textcontainer}>             
                    <TextInput  
                        style={styles.textballon}                    
                        placeholder={placeholder}
                        placeholderTextColor='grey'
                        editable
                        multiline   
                        textAlignVertical="top"
                        value={review}
                        onChangeText={onChange}  
                        maxLength={maxlength}
                        numberOfLines={numberline}
                        scrollEnabled={true}                                       
                    />
                </View>                                   
                {review.length < minlength ?
                    (   
                        <View style={styles.warncontainer}>                     
                            <Image                         
                                    resizeMode="contain"                 
                                    source={require('../../../static/images/icons/warn.png')}
                            />
                            <Text style={{ fontSize: theme.font.size.normal , color : "grey" , marginLeft : 5}}>{`최소${minlength}자`}</Text>                    
                        </View>
                    )
                : 
                   <>
                   </>
                }                                     
            </View>              
    );
}


const styles = StyleSheet.create({
    maincontainer : {        
        alignItems: 'center',   
        justifyContent : 'center' ,      
        width : "100%" ,
        height : 135 ,  
        marginBottom : 30 ,                         
    },   
    textcontainer :{
        width : "100%",       
        justifyContent : "center", 
        flex : 0.8 ,         
    },
    textballon :{
        color : 'black',        
        height : '100%',         
        marginHorizontal : 20, 
        paddingHorizontal : 15,
        backgroundColor : theme.color.background,        
        borderRadius : 10,          
        fontSize : 12 , 
    },
    titlecontainer : {        
        flexDirection : "row" , 
        justifyContent :"flex-start" ,    
        alignContent : "center"  ,
        width : "100%",
        flex : 0.2, 
        paddingLeft : 20,
        paddingTop :10,                   
    },
    warncontainer :{
        position : 'absolute' ,
        flexDirection : "row" , 
        justifyContent :"flex-start" ,         
        top : 110 ,
        left : "78%" ,        
    },
    submitbtn:{
        position : 'absolute' ,         
        justifyContent :"center" ,   
        alignItems : "center",      
        top : 110 ,
        left : "78%" ,
        backgroundColor: "#F2F4FA" ,
        borderRadius : 3 ,
        width : 65 ,
        height : 20,        
    }


});

export default ReviewTextBallon;
