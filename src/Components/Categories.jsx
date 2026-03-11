import React, {useState} from 'react';

const Categories = ({id, onChangeCategory}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые',]

    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                            <li key={index} onClick={() => onChangeCategory(index)} className={id === index ? 'active' : ''}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;