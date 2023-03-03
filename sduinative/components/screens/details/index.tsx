/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

function Details({route}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
        }}>
        {route.user_id}
      </Text>
    </View>
  );
}

export default Details;
