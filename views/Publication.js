import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const PublicationScreen = () => {
  const [publicationData, setPublicationData] = useState([]);

  useEffect(() => {
    fetch('https://quickq.onrender.com/posts')
    .then(response => response.json())
    .then(data => {
      setPublicationData(data)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  
  const renderPublication = ({ item }) => (
    <View style={styles.publicationContainer}>
      <Image source={{uri:item.image}} style={styles.publicationImage} resizeMode="stretch" resizeMethod="scale" />
      <View style={styles.publicationContent}>
        <Text style={styles.publicationTitle}>{item.title}</Text>
        <Text style={styles.publicationDescription}>{item.description}</Text>
        <Text style={styles.publicationPrice}>{"$"+item.benefit}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Publicaciones</Text>
      <FlatList
        data={publicationData}
        renderItem={renderPublication}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d0d0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  publicationContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  publicationImage: {
    width: 100,
    height: 100,
  },
  publicationContent: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  publicationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  publicationDescription: {
    fontSize: 14,
  },
  publicationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default PublicationScreen;

