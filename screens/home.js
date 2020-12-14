import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: 'Samurai Cop',
			rating: 5,
			body: 'lorem ipsum',
			key: '1',
		},
		{
			title: 'Silent Night Deadly Night 2',
			rating: 2,
			body: 'lorem ipsum',
			key: '2',
		},
		{
			title: 'Prom Night 2',
			rating: 1,
			body: 'lorem ipsum',
			key: '3',
		},
	]);

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.headerText}>Movies</Text>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('ReviewDetails', item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
							<View style={styles.ratingContainer}>
								<MaterialIcons name="star" style={styles.icon} />
								<Text style={globalStyles.ratingText}>{item.rating}</Text>
							</View>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	ratingContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icon: {
		color: '#ffc40c',
		fontSize: 16,
		padding: 2,
	},
});
