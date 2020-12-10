import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

const Stack = createStackNavigator();

export const HomeStack = ({ navigation }) => (
	<Stack.Navigator
		headerMode="screen"
		screenOptions={{
			headerStyle: {
				backgroundColor: 'yellow',
			},
		}}
	>
		<Stack.Screen name="Home" component={Home} />
	</Stack.Navigator>
);

export default HomeStack;
