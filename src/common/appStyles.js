import {StyleSheet} from 'react-native';

export const colors =
{
	primaryColor: '#C8102E',
	darkPrimaryColor: '#AC0D27',
	primarySpaceColor: '#FDEDB2',
	lightSpaceColor: '#FAFAFA',
	darkSpaceColor: '#222222',
	black: '#000000',
	primaryTextColor: '#212121',
	secondaryTextColor: '#757575',
	transparent: 'rgba(0, 0, 0, 0)'
}

export const containerStyle = StyleSheet.create(
{
	default: 
	{
		flex: 1,
		backgroundColor: colors.primarySpaceColor
	},
	screen:
	{
		paddingVertical: 20
	},
	screenSection:
	{
		margin: 5,
		alignItems: 'center'
	}
});

const createFont = (size, alignment, color) =>
{
	var style = {color: colors.primaryTextColor};

	if (size)
		style["fontSize"] = size;

	if (alignment)
		style["textAlign"] = alignment;

	if (color)
		style["color"] = color

	return style;
};

export const textStyle =
{
	// light: (size, alignment, color) =>
	// {
	// 	return Object.assign({fontFamily: 'Lato-Light'}, createFont(size, alignment, color));
	// },
	// regular: (size, alignment, color) =>
	// {
	// 	return Object.assign({fontFamily: 'Lato-Regular'}, createFont(size, alignment, color));
	// },
	// bold: (size, alignment, color) =>
	// {
	// 	return Object.assign({fontFamily: 'Lato-Black'}, createFont(size, alignment, color));
	// },
	// italic: (size, alignment, color) =>
	// {
	// 	return Object.assign({fontFamily: 'Lato-Italic'}, createFont(size, alignment, color));
	// }
}