import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginScreen from './views/Login';
import ProfileScreen from './views/Profile';
import PublicationScreen from './views/Publication';




const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
        
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Inicio"
                screenOptions={
                    {
                        headerTintColor: 'black',
                        headerStyle: {backgroundColor: '#409dd0'}
                    }
                }>
                <Stack.Screen
                    name="QuickQueue"
                    component={ LoginScreen }
                    
                />
                
                <Stack.Screen
                    name="PublicacionesPosts"
                    component={ PublicationScreen }
                    options={ ({ navigation }) => ({
                        headerRight: () => (
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                                    <Image style={{height:30, width:27, marginRight:15}} source={require('./Images/user-solid.png')}  />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("QuickQueue")}>
                                    <Image style={{height:30, width:30, marginRight:23}} source={require('./Images/logOut.png')}  />
                                </TouchableOpacity>
                            </View>
                          ),
                        backgroundColor: '#d2d0d1',
                        title: 'Publicaciones',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    } )}
                />
                <Stack.Screen
                    name="Perfil"
                    component={ ProfileScreen }
                    options={ ({ navigation }) => ({
                        headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("QuickQueue")}>
                            <Image style={{height:30, width:30, marginRight:23}} source={require('./Images/logOut.png')}  />
                        </TouchableOpacity>
                    ),
                        title: 'Perfil',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                            },
                            } )}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

