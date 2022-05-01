import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventForm from './EventForm';
import EventList from './EventList';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventList">
        <Stack.Screen name="EventList" component={EventList} options={{ title: '                                                                                                                                                         HomePage       Menu       Events     Blog      Contact'}} />
        <Stack.Screen name="EventForm" component={EventForm} options={{ title: 'Products' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});