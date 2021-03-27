import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = ({route, navigation}) => {
  const {name, age} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>detail page</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

export default Detail;
