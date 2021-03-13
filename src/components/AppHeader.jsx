import React from 'react';

import { View , Button} from 'react-native';

const AppHeader =  ({ scene, previous, navigation }) => {
    
    const { options } = scene.descriptor;
    
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;
  
    return (
      <View
        title={title}
        leftButton={
          previous ? <Button onPress={navigation.goBack} /> : undefined
        }
        style={options.headerStyle}
      />
    );
  };

export default AppHeader;