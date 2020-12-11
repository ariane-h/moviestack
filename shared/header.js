import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
	return (
		<View style={styles.header}>
			<View style={styles.headerTitle}>
				<Image
					style={styles.headerImage}
					source={require('../assets/cute-popcorn-logo.png')}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		flexDirection: 'row',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
		textAlign: 'center',
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});
