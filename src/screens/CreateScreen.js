import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import BlogContext from '../context/BlogContext';
const CreateScreen = ({ navigation }) => {
  const [title, Settitle] = useState('');
  const [content, Setcontent] = useState('');
  const { state, addblogpost } = useContext(BlogContext);
  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => Settitle(text)}
      />
      <Text>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => Setcontent(text)}
      />
      <Button
        title='Save post'
        onPress={() =>
          addblogpost(title, content, () => {
            navigation.navigate('Index');
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginVertical: 10,
  },
});

export default CreateScreen;
