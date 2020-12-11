import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home() {
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
					<Card>
						<Text style={globalStyles.titleText}>{item.title}</Text>
					</Card>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
