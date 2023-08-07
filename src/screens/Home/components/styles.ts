import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#262626',
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
	participantNameDone: {
		flex: 1,
		color: '#808080',
		fontSize: 16,
		marginLeft: 16,
		textDecorationLine: 'line-through',
	},
	button: {
		height: 52,
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
	checkbox: {
		alignSelf: 'center',
		borderRadius: 999,
		borderColor: '#4EA8DE',
		marginLeft: 16,
	},
});
