import PropTypes from 'prop-types'

export default function PageTitle(props) {
	return <h2 className="page-title">{props.title}</h2>
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
}
