import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RatingStars({ rating }) {
	const star = <MaterialIcons name="star" style={styles.icon} />;

	switch (rating) {
		case 1:
			return <View style={styles.iconContainer}>{star}</View>;
			break;
		case 2:
			return (
				<View style={styles.iconContainer}>
					{star}
					{star}
				</View>
			);
		case 3:
			return (
				<View style={styles.iconContainer}>
					{star}
					{star}
					{star}
				</View>
			);

		case 4:
			return (
				<View style={styles.iconContainer}>
					{star}
					{star}
					{star}
					{star}
				</View>
			);
		case 5:
			return (
				<View style={styles.iconContainer}>
					{star}
					{star}
					{star}
					{star}
					{star}
				</View>
			);

		default:
			return null;
			break;
	}
}

const styles = StyleSheet.create({
	iconContainer: {
		flexDirection: 'row',
		paddingTop: 10,
	},
	icon: {
		color: '#ffc40c',
		fontSize: 16,
		padding: 1,
	},
});
