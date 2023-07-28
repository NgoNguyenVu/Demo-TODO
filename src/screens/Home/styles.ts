import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		padding: 24,
	},
	input: {
		flex: 1,
		height: 54,
		backgroundColor: '#262626',
		borderRadius: 5,
		color: '#FFF',
		padding: 16,
		fontSize: 16,
		marginTop: 16,
		marginRight: 12,
	},
	button: {
		height: 52,
		backgroundColor: '#1E6F9F',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
		width: 52,
	},
	form: {
		flexDirection: 'row',
		marginTop: 36,
		marginBottom: 42,
	},
	emptyList: {
		color: '#808080',
		fontSize: 14,
		textAlign: 'center',
	},
	emptyListBold: {
		color: '#808080',
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	emptyListImage: {
		width: 56,
		height: 56,
		alignSelf: 'center',
		marginTop: 56,
		marginBottom: 16,
	},
});
