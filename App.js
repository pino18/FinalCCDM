import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './views/Login';
import ProfileScreen from './views/Profile';
import PublicationScreen from './views/Publication';



const Stack = createStackNavigator();

export default function App() {
    return (
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
                            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                              <Text style={{ marginRight: 10 }}>Perfil</Text>
                            </TouchableOpacity>
                          ),
                        backgroundColor: '#d2d0d0',
                        title: 'Publicaciones',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    } )}
                />
                <Stack.Screen
                    name="Perfil"
                    options={ {
                        title: 'Perfil',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                            }
                            } }
                            component={ ProfileScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

