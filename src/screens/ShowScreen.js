import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const blogpost = state.filter((bp) => bp.id === id);
  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginVertical: 5 }}>
        {blogpost[0].title}
      </Text>
      <Text style={{ fontSize: 16 }}>{blogpost[0].content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Feather name='edit' size={36} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
