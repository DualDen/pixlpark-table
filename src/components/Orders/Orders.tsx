import React, {FC, useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {dataHash} from "../../utils/sha";
import {normalDate} from "../../utils/date";
import {Order, OrderStatus} from "../../types/types";

interface PropsTypes {
    orders: Order[];
}

const Orders = (props: PropsTypes) => {

    return (
        <>
            {props.orders.map(order => {
                const date = normalDate(order.DateCreated)
                return (
                    <tr key={order.Id}>
                        <td>{order.Id}</td>
                        <td>{order.Title}</td>
                        <td>{date}</td>
                        <td>{OrderStatus[order.Status as keyof typeof OrderStatus]}</td>
                        <td>{order.PaymentStatus === "Paid" ?
                        "Оплачен" :
                            "Не оплачен"
                        }</td>
                        <td>{order.Price} ₽</td>
                        <td>{order.DeliveryPrice} ₽</td>
                        <td>{order.DeliveryAddress === null ? "Данные отсутствуют" :
                            order.DeliveryAddress?.AddressLine1 === " , " ? "Данные отсутствуют" :
                        `${order.DeliveryAddress?.Country}, ${order.DeliveryAddress?.City}, ${order.DeliveryAddress?.AddressLine1}`
                        }</td>
                        <td>{order.DeliveryAddress?.Phone
                            ? order.DeliveryAddress?.Phone.toString()
                            : "Данные отсутствуют"}</td>
                    </tr>
                )
            }

            )}
        </>
    );
};

export default Orders;