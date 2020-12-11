import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';
import { Image } from 'react-native';
import Hamburger from '../shared/hamburger';

const Stack = createStackNavigator();

export const AboutStack = ({ navigation }) => (
	<Stack.Navigator headerMode="screen">
		<Stack.Screen
			name="About"
			component={About}
			options={{
				headerLeft: () => <Hamburger navigation={navigation} />,
				title: '',
			}}
		/>
	</Stack.Navigator>
);

export default AboutStack;
