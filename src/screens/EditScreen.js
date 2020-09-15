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
const EditScreen = ({ navigation }) => {
  const { state, editblogpost } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const blogpost = state.filter((bp) => bp.id === id);
  const [title, Settitle] = useState(blogpost[0].title);
  const [content, Setcontent] = useState(blogpost[0].content);
  return (
    <View>
      <Text>Edit Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => Settitle(text)}
      />
      <Text>Edit Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => Setcontent(text)}
      />
      <Button
        title='Save post'
        onPress={() =>
          editblogpost(id, title, content, () => {
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

export default EditScreen;
