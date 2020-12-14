import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card(props) {
	return (
		<LinearGradient
			colors={['#60ADFB', '#CE9EFA']}
			style={styles.card}
			start={{ x: 0.62, y: 0 }}
			locations={[0, 1]}
		>
			<View style={styles.cardContent}>{props.children}</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	card: {
		left: 0,
		right: 0,
		top: 0,
		margin: 10,
		padding: 30,
		borderRadius: 15,
		backgroundColor: '#8EC5FC',
	},
});
