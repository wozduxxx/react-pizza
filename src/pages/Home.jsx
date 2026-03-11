import React, {useEffect, useState} from 'react';
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import Pagination from "../Components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage} from "../redux/features/filter/filterSlice";
import axios from "axios";

const Home = ({searchValue}) => {
    const dispatch = useDispatch()
    const {categoryId, sort, currentPage} = useSelector(state => state.filter)
    const sortType = sort.sortProperty

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const category = categoryId ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://688cc8dccd9d22dda5ce78ec.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortType}&order=desc${search}`)
            .then(json => {
            setItems(json.data)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [categoryId, searchValue, currentPage, sortType]);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePage = number => {
        dispatch((setCurrentPage(number)))
    }

    const pizzas = items.map(obj => (<PizzaBlock key={obj.id} {...obj}/>))
    const skeletons = [...Array(8)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories id={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;