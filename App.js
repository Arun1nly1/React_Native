import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();
  // console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          width: '50%',
          height: landscape ? 100 : '30%',
        }}
      ></View>
      {/* <Text>Hello world</Text> */}
      {/* <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
          // blurRadius={10}
          // fadeDuration={10000}
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/200 ',
          }}
        ></Image>
      </TouchableHighlight> */}
      {/* <Button
        color="#841584"
        title="Click me"
        onPress={() =>
          Alert.alert('Delete box', 'Do you want to delete?', [
            { text: 'Yes', onPress: () => console.log('You pressed Yes') },
            { text: 'No', onPress: () => console.log('You pressed NO') },
          ])
        } */}
      {/* 
        // This works on IOS only
        // onPress={() => */}
      {/* //   Alert.prompt('Category', 'Please add a category', (text) => { */}
      {/* //     console.log(text); */}
      {/* //   }) */}
      {/* // } */}
      {/* ></Button> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
