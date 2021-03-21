import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import axios from 'axios';

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title} numberOfLines={1}>
      {item.name} {item.surname}
    </Text>
  </View>
);

const FlatListExample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderItem = ({item}) => <Item item={item} />;

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Text style={styles.title}>Loading...</Text>}
      {!loading && (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListExample;
