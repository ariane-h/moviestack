import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
	},
	headerText: {
		fontSize: 24,
		paddingBottom: 20,
	},
	titleText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		letterSpacing: 0.3,
	},
	ratingText: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold',
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
		color: '#fff',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		fontSize: 18,
		borderRadius: 6,
	},
	errorText: {
		color: 'crimson',
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 6,
		textAlign: 'center',
	},
});
