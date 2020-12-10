import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
	<Drawer.Navigator initialRouteName="Home">
		<Drawer.Screen name="Home" component={HomeStack} />
		<Drawer.Screen name="About" component={AboutStack} />
	</Drawer.Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<RootDrawerNavigator />
	</NavigationContainer>
);

export default AppNavigator;
