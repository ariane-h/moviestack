import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import RatingStars from '../shared/ratingStars';

export default function ReviewDetails({ route }) {
	const { title, body, rating } = route.params;

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{title}</Text>
				<Text style={globalStyles.paragraph}>{body}</Text>
				<Text style={globalStyles.ratingText}> Rating: </Text>
				<RatingStars rating={rating} />
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	ratingContainer: {
		flexDirection: 'row',
		paddingTop: 10,
	},
	// icon: {
	// 	color: '#ffc40c',
	// 	fontSize: 16,
	// 	padding: 1,
	// },
});
