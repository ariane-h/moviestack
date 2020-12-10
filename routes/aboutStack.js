import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

export const AboutStack = ({ navigation }) => (
	<Stack.Navigator
		headerMode="screen"
		screenOptions={{
			headerStyle: {
				backgroundColor: 'pink',
			},
		}}
	>
		<Stack.Screen name="About" component={About} />
	</Stack.Navigator>
);

export default AboutStack;
