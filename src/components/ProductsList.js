import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchProducts = async () => {
		setLoading(true);
		setError(null);
		const { data, error } = await supabase
			.from('products')
			.select('*');

		if (error) {
			console.error('Ошибка при загрузке данных:', error);
			setError('Не удалось загрузить данные. Попробуйте позже.');
		} else {
			setProducts(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="products-list">
			<h1>Список товаров</h1>
			{loading ? (
				<p className="loading">Загрузка...</p>
			) : error ? (
				<p className="error">{error}</p>
			) : (
				<ul className="product-items">
					{products.map((product) => (
						<li key={product.id} className="product-item">
							<h2 className="product-title">{product.title}</h2>
							<p className="product-description">{product.description}</p>
							<p className="product-price">Цена: {product.price}₽</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ProductsList;
