import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Alert, Pressable, Linking, TouchableOpacity } from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async(email,password) => {
    try {
      const route = `https://quickq.onrender.com/login/${email}/${password}`;
      const response = await axios.get(route);
      return typeof response.data;
    } catch(error){
      console.log(error);
      return null
    }
  }

  const handleLogin = async () => {
    const respuestaAPI = await login(email, password);
    if (respuestaAPI === 'object') {
      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate("PublicacionesPosts")
    } else {
      Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../Images/logoqq.png')}  />
      <View style={styles.content}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />



        <Button title="Ingresar" onPress={handleLogin} color='#3a9cd1'/>

        <View alignItems='center'>
            <Text >
            Olvidaste tu contraseña
            </Text>
            <Text style={{color: '#3a9cd1'}}>
            Registrate
            </Text>
        </View>
      </View>
      <View style={styles.row}>
        
        <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')}>
        <Image style={styles.minilogo} source={require('../Images/facebook.png')} onPress={() => Linking.openURL('http://facebook.com')}  /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
        <Image style={styles.minilogo} source={require('../Images/instagram.png')} onPress={() => Linking.openURL('https://www.instagram.com')}  /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
        <Image style={styles.minilogo} source={require('../Images/twitter.png')} onPress={() => Linking.openURL('https://www.twitter.com')}  /> 
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 77,
    width: 145,
    marginBottom: 8,
  },
  minilogo: {
      height: 40,
      width: 40,
      margin: 8,

      //paddingHorizontal: 20,
    },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    }
});

export default LoginScreen;
