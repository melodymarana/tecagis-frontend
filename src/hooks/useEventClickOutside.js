import { useEffect, useRef, useState } from 'react'

export function useEventClickOutside(initialIsVisible) {
	const [isComponentVisible, isComponentVisibleSet] = useState(initialIsVisible)

	const ref = useRef(null)

	const handleHideDropdown = (event) => {
		if (event.key === 'Escape') {
			isComponentVisibleSet(false)
		}
	}

	const handleClickOutside = (event) => {
		if (!ref.current.contains(event.target) && ref.current) {
			isComponentVisibleSet(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleHideDropdown, true)
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('keydown', handleHideDropdown, true)
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isComponentVisible, isComponentVisibleSet }
}
