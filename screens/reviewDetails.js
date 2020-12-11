import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
	const { title, body, rating } = route.params;

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{title}</Text>
				<Text>{body}</Text>
				<View style={styles.rating}>
					<Text> Rating: </Text>
					{/* <Image source={images.ratings[rating]} /> */}
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({});
