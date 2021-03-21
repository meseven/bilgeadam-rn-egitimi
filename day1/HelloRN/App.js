import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';

import styles from './styles';

const App = () => {
  const [name, setName] = useState('Mehmet');
  const [profile, setProfile] = useState({followers: 40, following: 50});
  const [friends, setFriends] = useState(['Ahmet', 'Murat', 'Ayşe', 'Fatma']);

  const changeName = () => setName('Ahmet');

  const incerementFollowers = () => {
    setProfile({
      ...profile,
      followers: profile.followers + 1,
      following: profile.following - 5,
    });
  };

  const addFriends = () => {
    setFriends([...friends, 'Filiz']);
  };

  useEffect(() => {
    console.log('component mount oldu');
  }, []);

  useEffect(() => {
    console.log('name stete güncellendi');
  }, [name]);

  useEffect(() => {
    console.log('friends stete güncellendi');
  }, [friends]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.f}>Selam {name}</Text>
      </View>
      <Button title="Update State" onPress={changeName} />

      <View>
        <Text style={styles.f}>Followers {profile.followers}</Text>
        <Text style={styles.f}>Following {profile.following}</Text>
      </View>
      <Button title="Increment Followers" onPress={incerementFollowers} />

      <View>
        <Text>Arkadaşlar ({friends.length})</Text>

        {friends.map((item, key) => (
          <Text key={key} style={styles.f}>
            {item}
          </Text>
        ))}
      </View>
      <Button title="Add Friends" onPress={addFriends} />
    </SafeAreaView>
  );
};

export default App;
