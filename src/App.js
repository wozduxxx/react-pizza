import './scss/app.scss';
import Header from "./Components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import {createContext, useState} from "react";
import {store} from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {} from './redux/features/filter/filterSlice'

export const SearchContext = createContext('')

function App(   ) {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <div className="wrapper">
                <SearchContext value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home searchValue={searchValue}/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </SearchContext>
            </div>
        </div>
    );
}

export default App;
