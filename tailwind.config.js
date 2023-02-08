/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	corePlugins: {
		container: true,
	},
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			screens: {
				md: '768px',
				lg: '976px',
				xl: '1024px',
				'2xl': '1320px',
			},
			fontFamily: {
				body: ['IBM Plex Sans Thai', 'sans-serif'],
				sans: ['IBM Plex Sans Thai', 'sans-serif'],
				serif: ['IBM Plex Sans Thai', 'sans-serif'],
			},
			fontSize: {
				xs: '.75rem', //12px
				sm: '.875rem', //14px
				base: '1rem', //16px
				lg: '1.125rem', //18px
				xl: '1.25rem', //20px
				'2xl': '1.375rem', //22px
				'3xl': '1.5rem', //24px
				'4xl': '1.625rem', //26px
				'5xl': '1.75rem', //28px
				'6xl': '2rem', //32px
				'7xl': '2.5rem', //40px
			},
			colors: {
				primary: '#02AAB0',
				secondary: '#00CDAC',
				/* primary: '#7663DE',
				secondary: '#977CE8', */
				white: '#FFFFFF',
				grey: {
					50: '#F6F7F8',
					100: '#F5F5F5',
					200: '#E1E4E8',
					300: '#EAEAEA',
					400: '#8C8F95',
					500: '#707070',
					600: '#4B5563',
					700: '#3b3b3b'
				},
				divider: '#D2D5DA',
				'coolGray-900': '#111827',
				'coolGray-600': '#4B5563',
				'coolGray-500': '#6B7280',
				'coolGray-400': '#9CA3AF',
				'coolGray-300': '#D1D5DB',
				'coolGray-200': '#E5E7EB',
				'coolGray-50': '#F9FAFB',
				'gray-50': '#FAFAFA',
				'blue-500': '#3B82F6',
				'lightBlue-900': '#0C4A6E',
				'lightBlue-500': '#0EA5E9',
				'lightBlue-300': '#CBD5E1',
				'purple-500': '#A855F7',
				'teal-700': '#0F766E',
				'teal-600': '#0D9488',
				'teal-500': '#14B8A6',
				'teal-400': '#02AAB0',
				'teal-300': '#5EEAD4',
				'teal-200': '#99F6E4',
				'teal-100': '#00CDAC',
				'teal-50': '#CCFBF1',
				'teal-10': '#F0FDFA',
				'yellow-400': '#FACC15',
				'yellow-100': '#FEF9C3',
				'yellow-50': '#FEFCE8',
				'red-500': '#EF4444',
				'green-600': '#16A34A',
				'green-200': '#BBF7D0',
				'orange-500': '#F97316',
				'lime-300': '#5EEAD4',
				'lime-50': '#F7FEE7',
				'lightBlue-500': '#0EA5E9',
				'lightBlue-200': '#BAE6FD',
				'amber-200': '#FDE68A',
				'emerald-200': '#A7F3D0',
				'rose-200': '#FECDD3',
			},
			padding: {
				28: '7.5rem',
			},
			zIndex: {
				'-10': -10,
			},
			borderWidth: {
				8: '16px',
			},
			borderRadius: {
				sm: '4px',
				DEFAULT: '8px',
				md: '28px',
				lg: '40px',
			},
			boxShadow: {
				DEFAULT: '0px 16px 22px -12px rgba(0,0,0,0.3);',
				sm: '0px 6px 36px rgba(167, 180, 193, 0.16)',
				lg: '0px 100px 80px rgba(102, 102, 102, 0.07), 0px 41.7776px 33.4221px rgba(102, 102, 102, 0.0118884), 0px 22.3363px 17.869px rgba(102, 102, 102, 0.00745993), 0px 12.5216px 10.0172px rgba(102, 102, 102, 0.0108709), 0px 6.6501px 5.32008px rgba(102, 102, 102, 0.016841), 0px 2.76726px 2.21381px rgba(102, 102, 102, 0.021471);',
				xl: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);',
				none: 'none',
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			lineHeight: {
				normal: '1',
			},
			inset: {
        112: '28rem',
      }
		},
	},
	plugins: [require('@tailwindcss/typography')],
	// plugins: [require("@tailwindcss/line-clamp")](),
}
