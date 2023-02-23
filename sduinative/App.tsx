/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Button} from '@react-native-material/core';
function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View>
            <StatusBar />
            <Button title="Button" onPress={() => alert('🎉🎉🎉')} />
            <Text>This is sample</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
