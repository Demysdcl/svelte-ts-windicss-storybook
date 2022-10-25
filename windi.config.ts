const componentSizes = {
	quarck: '0.25rem',
	nano: '0.5rem',
	xxxs: '1rem',
	xxs: '1.5rem',
	xs: '2rem',
	sm: '2.5rem',
	md: '3rem',
	lg: '3.5rem',
	xl: '4rem',
	xxl: '5rem',
	xxxl: '7.5rem',
	huge: '10rem',
	giant: '12.5rem',
	full: '100%'
}

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif']
		},
		fontSize: {
			sm: '0.625rem',
			base: '0.875rem',
			lg: '1rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '2.25rem'
		},
		lineHeight: {
			sm: '1.375rem',
			1: '1.5rem',
			2: '1.75rem',
			3: '2rem',
			4: '2.25rem',
			5: '2.5rem',
			6: '3rem',
			7: '4rem'
		},
		borderRadius: {
			small: '0.25rem',
			medium: '0.5rem',
			larger: '1rem',
			pill: '25rem',
			circular: '50%'
		},
		spacing: componentSizes,
		width: componentSizes,
		minWidth: componentSizes,
		maxWidth: componentSizes,
		colors: {
			primary: {
				main: '#2DCD69',
				light: '#93E3B0'
			},
			neutral: {
				darker: '#000000',
				dark: '#999999',
				medium: '#E5E5E5',
				light: '#FAFAFA',
				lighter: '#FFFFFF'
			},
			feedback: {
				error: {
					main: '#E74C3C',
					medium: '#F1A0A0',
					light: '#FDEEEC'
				},
				alert: {
					main: '#F1C40D',
					medium: '#F8E186',
					light: '#FEFAE7'
				},
				success: {
					main: '#2DCD69',
					medium: '#93E3B0',
					light: '#E9F9EF'
				}
			},
			support: {
				blue: {
					dark: '#19B5FE',
					light: '#E8F8FF'
				},
				turquoise: {
					dark: '#4ECDC4',
					light: '#EEFAFA'
				},
				green: {
					dark: '#87D37C',
					light: '#F3FBF2'
				},
				purple: {
					dark: '#BE90D4',
					light: '#F9F4FB'
				},
				orange: {
					dark: '#E67E23',
					light: '#FDF3E9'
				},
				pink: {
					dark: '#FF5B83',
					light: '#FFEFF3'
				},
				gray: {
					dark: '#67809F',
					light: '#F0F3F6'
				}
			}
		},
		extend: {}
	},
	shortcuts: {
		'header-01': 'font-bold text-3xl leading-6 tracking-normal',
		'header-02': 'font-bold text-2xl leading-4 tracking-normal',
		'subtitle-01': 'font-semibold text-2xl leading-4 tracking-normal',
		'subtitle-02': 'font-normal text-lg leading-1 tracking-normal',
		'body-01': 'font-normal text-base leading-sm tracking-normal',
		'body-02': 'font-semibold text-base leading-sm tracking-normal',
		'body-03': 'font-bold text-base leading-sm tracking-normal'
	},
	plugins: []
}
