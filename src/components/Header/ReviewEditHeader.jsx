import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,   
} from 'react-native';
import theme from '../../context/theme';



const ReviewEditHeader = ({
    handlePressBack,    
    handlePressNext,
    enableNext ,    
    ...props
}) => {
    return (
        <View style={styles.main}>           
            <TouchableOpacity activeOpacity={0.5} onPress={handlePressBack}>
                <View style={styles.gnbBack}>
                    <Image
                        style={styles.gnbBackIcon}
                        source={require('../../static/images/icons/gnb_back.png')}
                    />
                </View>
            </TouchableOpacity>                       
            <View style={styles.headertitle}>           
                <Text style={styles.headerText}>동네 후기 작성</Text>            
            </View>            
            <TouchableOpacity activeOpacity={1} onPress={handlePressNext}>
                <View style={styles.headerbtn}>
                    <Text style={{color: enableNext ? theme.font.search :"grey" }}>다음      </Text>
                </View>   
            </TouchableOpacity>   
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border,
    },
    headertitle: {
        flex: 1,    
        marginLeft: 50,       
    },
    searchInput: {
        fontSize: theme.font.size.large,
    },   
    headerText: {
        fontSize: theme.font.size.large,
        fontWeight : 'bold' ,
        textAlign : 'center',        
    },
    headerbtn : {
        flex : 1,        
        alignItems: 'center',
        justifyContent: "center",
    },
    gnbBack: {
        flex : 1,        
        alignItems: 'center',
        justifyContent: "center",
        marginLeft : 20,
    },
    gnbBackIcon: {
        width: 7.5,
        height: 15,
    },
});

export default ReviewEditHeader;
