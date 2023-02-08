import PropTypes from 'prop-types'

export default function ProductItem(props) {
	return (
		<div className="card product-item">
			<div className="card-wrapper">
				<div className="card-media">
					<img src="https://picsum.photos/400/300" className="thumbnail" alt="product thumbnail" />
					<div className={`badge ${props.badgeColor}`}>{props.badgeLabel}</div>
				</div>
				<div className="card-content">
					<p className="title">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					</p>
					<div className="description">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
						Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
						Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
						Ipsum
					</div>
				</div>
				<div className="card-footer">
					<div className="product-price">
						<span className="normal-price mr-2">2,000 บาท</span>
						<span className="discount-price">1,200 บาท</span>
					</div>
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	badgeColor: PropTypes.string,
	badgeLabel: PropTypes.string,
}
