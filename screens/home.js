import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);

	const addReview = (review) => {
		review.key = Math.random().toString();
		review.rating = parseInt(review.rating);
		setReviews((currentReviews) => {
			return [review, ...currentReviews];
		});
		setModalOpen(false);
	};

	const [reviews, setReviews] = useState([
		{
			title: 'Samurai Cop',
			rating: 5,
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem fugit facere ipsa distinctio qui, ex reiciendis quae quod, officia harum? Blanditiis officiis natus modi, dolor iusto unde ducimus doloremque.',
			key: '1',
		},
		{
			title: 'Silent Night Deadly Night 2',
			rating: 2,
			body:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum hic, suscipit eius, eveniet ipsam, sapiente officiis reiciendis culpa est placeat aspernatur distinctio iusto ipsa excepturi in fugiat optio molestias.',
			key: '2',
		},
		{
			title: 'Prom Night 2',
			rating: 1,
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quaerat blanditiis beatae, in nobis est fugiat minus, ex explicabo debitis dolore consequuntur harum illo expedita quae ipsa. Itaque, a! Necessitatibus?',
			key: '3',
		},
	]);

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<View style={styles.modalContent}>
					<MaterialIcons
						name="close"
						size={24}
						style={{ ...styles.modalToggle, ...styles.modalClose }}
						onPress={() => setModalOpen(false)}
					/>
					<ReviewForm addReview={addReview} />
				</View>
			</Modal>

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

			<MaterialIcons
				name="add"
				style={styles.modalToggle}
				size={24}
				onPress={() => setModalOpen(true)}
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
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
	modalContent: {
		flex: 1,
	},
});
