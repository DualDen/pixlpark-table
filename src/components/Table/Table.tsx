import React, {FC, useEffect} from 'react';
import Orders from "../Orders/Orders";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {dataHash} from "../../utils/sha";
import Loader from "../Loader/Loader";

const Table: FC = () => {
    const {fetchRequest,fetchOrders,setIsLoading} = useActions();
    const {requestToken, privateKey, publicKey, orders, isLoading} = useTypedSelector(state => state)
    const password = dataHash(requestToken,privateKey);
    useEffect(() => {
        fetchRequest()
        setIsLoading(true)
        fetchOrders(requestToken,publicKey,password)
    },[])
    return (
        <>
            {isLoading ? <Loader/>
            :
                <div className={'container'}>
                    <table>
                        <thead>
                        <tr>
                            <td style={{borderTopLeftRadius: "10px"}}>Номер заказа</td>
                            <td>Товары</td>
                            <td>Дата создания</td>
                            <td>Статус заказа</td>
                            <td>Статус оплаты</td>
                            <td>Стоимость заказа</td>
                            <td>Стоимость доставки</td>
                            <td>Адрес заказчика</td>
                            <td style={{borderTopRightRadius: "10px"}}>Телефон заказчика</td>
                        </tr>
                        </thead>
                        <tbody>
                        {orders && <Orders orders={orders}/>}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default Table;