import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		backgroundColor: '#000000',
		width: '100%',
	},
	taskAdd: {
		color: '#4EA8DE',
		fontSize: 16,
		fontWeight: 'bold',
	},
	taskDone: {
		color: '#8284FA',
		fontSize: 16,
		fontWeight: 'bold',
	},
	horizontalBar: {
		width: '100%',
		height: 1,
		backgroundColor: '#808080',
	},
	infoContainer: {
		flexDirection: 'row',
	},
	taskCounter: {
		color: '#F0F0F0',
		fontSize: 14,
		backgroundColor: '#333333',
		borderRadius: 8,
		paddingVertical: 2,
		paddingHorizontal: 8,
		fontWeight: 'bold',
		marginHorizontal: 8,
	},
});
