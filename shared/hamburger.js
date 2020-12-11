import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Hamburger({ navigation }) {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<MaterialIcons
			name="menu"
			style={styles.icon}
			size={28}
			onPress={openMenu}
		/>
	);
}

const styles = StyleSheet.create({
	icon: {
		position: 'absolute',
		left: 16,
	},
});
