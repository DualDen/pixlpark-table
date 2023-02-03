import React, {FC} from 'react';
import loader from '../../assets/loading.svg'
const Loader:FC = () => {
    return (
        <div className={"loader"}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;