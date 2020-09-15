import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import BlogContext from '../context/BlogContext';
const IndexScreen = ({ navigation }) => {
  const { state, deleteblogpost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(bp) => String(bp.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                  paddingVertical: 10,
                  marginHorizontal: 5,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ fontSize: 26 }}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteblogpost(item.id)}>
                  <Feather name='trash' style={{ fontSize: 36 }} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;
