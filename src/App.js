import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/header/Header";
import { Route, Routes} from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import Form from "./components/Form/Form";


function App() {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    })

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route index path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
