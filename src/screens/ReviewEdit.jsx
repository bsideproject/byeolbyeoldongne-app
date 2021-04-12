import React , { useEffect , useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,   
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import theme from '../context/theme';


import AddrPresenter from '../components/ScreenComponent/ReviewEdit/AddrPresenter';
import ReviewEditHeader from '../components/Header/ReviewEditHeader';




const ReviewEditScreen = ({ navigation , route }) => {
   
    const [ nextStep , setNextStep] = useState(false) ; 

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handlePressNext = ()=>{
        navigation.navigate("Main");
    }
    
    return ( 
        <SafeAreaView style={styles.main}>
            <View style={styles.maincontainer}>
                <ReviewEditHeader
                    handlePressBack={handlePressBack} 
                    handlePressNext={handlePressNext}
                    enableNext={nextStep}
                />  
                <View>
                    <AddrPresenter
                        AddrString={"서울 강남구 역삼동 93길"}
                    />
                </View>            
            </View>
        </SafeAreaView>       
               
    );
};

const styles = StyleSheet.create({
    main : { ...StyleSheet.absoluteFillObject,} ,
    maincontainer: {        
        backgroundColor: theme.color.background,
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: theme.font.size.middle,
        fontWeight : 'bold' ,
        textAlign : 'center'
    },
    postReviewButton: {
        position: 'absolute',
        right: 10,
        top: -17,
        color: theme.color.main,
        fontSize: theme.font.size.middle,
        padding: 10,
    },
    totalPoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
        marginBottom: 15,
    },
    centerView: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    averagePoint: {
        fontSize: 36,
        fontWeight: 'bold',
        marginRight: 5,
    },
    totalText: {
        paddingTop: 25,
        fontSize: theme.font.size.normal,
        fontWeight: 'bold',
        color: '#C1C1C1',
    },
    diagonalLineIconView: {
        paddingTop: 20,
        marginRight: 5,
    },
    diagonalLineIcon: {
        width: 12,
        height: 17,
    },
    thinDivider: {
        width: '100%',
        height: 1,
        backgroundColor: theme.color.lightBorder,
        marginTop: 25,
        marginBottom: 25,
    },
    thinDividerNoMargin: {
        width: '100%',
        height: 1,
        backgroundColor: theme.color.lightBorder,
        marginTop: 25,
    },
    thickDivider: {
        width: '100%',
        height: 12,
        backgroundColor: theme.color.lightBorder,

        opacity: 0.4,
    },
    filterBox: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerbtn : {
        flex : 1,        
        alignItems: 'center',
        justifyContent: "center",
    },
    gnbBackIcon: {
        width: 7.5,
        height: 15,
    },
});

export default ReviewEditScreen;
