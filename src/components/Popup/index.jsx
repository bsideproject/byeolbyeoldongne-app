import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import theme from "../../context/theme";

const PopUpModal = ({children, popModal , confirm }) => {
  
  return (   
      <Modal
        animationType="none"
        transparent={true}
        visible={popModal} 
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.childContainer}>
              {children}
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={confirm}
              >
                <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>            
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex :1 , 
    justifyContent: "center",
    alignItems: "center",             
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5 , 
    width: "60%",
    justifyContent : "flex-end",
    paddingBottom : 1,
    flex : 0.3,
  },
  childContainer :{
    flex : 0.7 ,
    width : "100%",
    justifyContent :"center" , 
    alignItems : "center",
  },
  buttonContainer :{
    flex : 0.25 ,   
    width : "100%",
  },  
  button: {    
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 14,
    elevation: 2 ,   
    width : "100%",  
  },  
  buttonClose: {
    backgroundColor : theme.font.search , 
    width :"100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize : 15,    
  }  
});

export default PopUpModal;