import React from 'react';
import {
    Text,
    View,
    StyleSheet,   
    TouchableOpacity,   
} from 'react-native';
import theme from '../../context/theme';


const SignUpHeader = ({    
    handlePressNext,
    enableNext ,    
    ...props
}) => {
    return (
        <View style={styles.maincontainer} >                       
            <TouchableOpacity activeOpacity={1} onPress={handlePressNext}>
                <View style={styles.headerbtn}>
                    <Text style={{color: enableNext ? theme.font.search :"grey" }}>다음      </Text>
                </View>   
            </TouchableOpacity> 
        </View>       
    );
};

const styles = StyleSheet.create({
    maincontainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width :  "100%" ,   
        height : 52,      
        justifyContent : 'flex-end' ,             
    },  
    headerbtn : {
        flex : 1,        
        alignItems: 'center',
        justifyContent: "center",
    },
});

export default SignUpHeader;
