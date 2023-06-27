import React,{useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

const ProfileScreen = ({ user }) => {
  console.log("User:", user);
  const [profileScreen, setProfileScreen] = useState([]);
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = user.email;
        const profileResponse = await fetch(
          `https://quickq.onrender.com/profile/${email}`
        );
        const profileData = await profileResponse.json();
        setProfileInfo(profileData);

        const profileName = profileData.name;
        const postResponse = await fetch(
          `https://quickq.onrender.com/post/${profileName}`
        );
        const postData = await postResponse.json();
        setProfileScreen(postData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user.email]);

  const profileImage = profileInfo.image; // Ruta de la imagen de perfil

  const rating = profileInfo.rate; // Calificación

  const name = profileInfo?.name;

  const renderPublication = ({ item }) => (
    <View style={styles.publicationContainer}>
      <Image source={{uri:item.image}} style={styles.publicationImage} resizeMode="cover" />
      <View style={styles.publicationContent}>
        <Text style={styles.publicationTitle}>{item.title}</Text>
        <Text style={styles.publicationDescription}>{item.description}</Text>
        <Text style={styles.publicationPrice}>{"$"+item.benefit}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri:profileImage}} style={styles.profileImage} resizeMode="cover" />
      </View>
      <View>
      <Text style={styles.name}>{name}</Text>
      </View>
      
      <View style={styles.row}>
        <Text style={styles.rating}>{rating}</Text>
        <Image style={styles.minilogo} source={require('../Images/star-solid.png')}  />

      </View>
      <Text style={styles.listTitle}>Mis publicaciones</Text>
      <FlatList
        data={profileScreen}
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginRight: 10,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  minilogo: {
    height: 20,
    width: 20,
    margin: 5,

    //paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  publicationContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
  },
  publicationImage: {
    width: 100,
    height: 130,
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

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(ProfileScreen);
