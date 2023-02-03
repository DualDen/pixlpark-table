
export enum FetchActionTypes {
    FETCH_REQUEST_TOKEN = "FETCH_REQUSET_TOKEN",
    FETCH_ORDERS = "FETCH_ORDERS",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export enum OrderStatus {
    DispatchedToCourier = "Передано курьеру",
    ShippedToStorage = "Отправлено на хранение",
    Cancelled = "Отменен",
    Delivered = "Доставлен"
}

export interface FetchOrdersAction  {
    type: FetchActionTypes.FETCH_ORDERS,
    payload: Order[],
}

export interface SetIsLoadingAction {
    type: FetchActionTypes.SET_IS_LOADING,
    payload: boolean,
}

export interface FetchState{
    orders: Order[];
    isLoading: boolean;
    requestToken: string;
    publicKey: string,
    privateKey: string,
}

export interface FetchRequestAction {
    type: FetchActionTypes.FETCH_REQUEST_TOKEN,
    payload: string,
}

export interface Order {
    Id: number,
    PaymentStatus: string,
    Price?:number,
    Title: string,
    DeliveryPrice?:number,
    DateCreated:string,
    Status:string,
    DeliveryAddress?: {
        Country?:string,
        City?:string,
        AddressLine1?:string,
        Phone?: string,
    }
}

export type FetchAction = FetchRequestAction | FetchOrdersAction | SetIsLoadingAction