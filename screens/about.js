import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.headerText}>About</Text>
			<Text style={styles.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rerum
				quis impedit beatae repellendus reprehenderit odit tenetur consectetur
				asperiores! Accusamus debitis laudantium mollitia possimus provident
				ipsam dolorum? Adipisci, ad dignissimos.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
		color: 'black',
	},
});
