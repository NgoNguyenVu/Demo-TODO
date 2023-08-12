import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#1A1A1A',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 3,
		width: '100%',
	},
	subTaskAdd: {
		alignItems: 'center',
		color: '#CACACA',
		flex: 1,
		fontSize: 14,
		marginLeft: 16,
	},
	subTaskDone: {
		color: '#808080',
		flex: 1,
		fontSize: 14,
		marginLeft: 16,
		textDecorationLine: 'line-through',
	},
	button: {
		alignItems: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		height: 36,
		justifyContent: 'center',
		width: 36,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 32,
		fontWeight: 'bold',
	},
	checkbox: {
		alignSelf: 'center',
		borderColor: '#4EA8DE',
		marginLeft: 16,
		height: 16,
		width: 16,
	},
});
