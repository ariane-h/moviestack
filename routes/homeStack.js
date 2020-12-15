import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Header from '../shared/header';
import { Image } from 'react-native';
import Hamburger from '../shared/hamburger';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export const HomeStack = ({ navigation }) => (
	<Stack.Navigator headerMode="screen">
		<Stack.Screen
			name="Home"
			component={Home}
			options={{
				headerLeft: () => <Hamburger navigation={navigation} />,
				title: '',
			}}
		/>
		<Stack.Screen
			name="ReviewDetails"
			component={ReviewDetails}
			options={{
				title: '',
			}}
		/>
	</Stack.Navigator>
);

export default HomeStack;
