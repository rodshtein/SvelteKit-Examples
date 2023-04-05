
export const actions = {
	default: async () => {
		let shapes = [
			{
				color: 'Red',
				shape: 'Circle'
			},
			{
				color: 'Blue',
				shape: 'Square'
			},
			{
				color: 'Yellow',
				shape: 'Triangle'
			}
		];
		return { success: true, shapes };
	}
};
