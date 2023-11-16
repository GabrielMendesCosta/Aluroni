import React from "react";
import filters from "./filters.json"
import styles from "./Filters.module.scss"
import classNames from "classnames";

type IOptions = typeof filters[0];

interface Props{
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter,setFilter} : Props){
    function selectFilter(options: IOptions){
        if(filter === options.id) return setFilter(null);
        return setFilter(options.id);
    }
    return (
        <div className={styles.filters}>
            {filters.map((options) => (
                <button className={classNames({
                    [styles.filters__filter]: true,
                    [styles['filters__filter--active']]: filter === options.id
                })} 
                key={options.id} 
                onClick={() => selectFilter(options)}
            >
                    {options.label}
                </button>
            ))}
        </div>
    );
}