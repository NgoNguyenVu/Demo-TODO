import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1F1E25',
		borderRadius: 5,
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		marginBottom: 10,
	},
	participantName: {
		flex: 1,
		color: '#FFFFFF',
		fontSize: 16,
		marginLeft: 16,
	},
	button: {
		height: 52,
		backgroundColor: '#1E6F9F',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 52,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 32,
		fontWeight: 'bold',
	},
});
