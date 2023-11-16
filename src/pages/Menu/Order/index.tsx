import React, { useState } from "react";
import styles from "./Order.module.scss"
import options from "./options.json"
import classNames from "classnames"
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"

interface Props {
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order({order, setOrder} : Props){
    const [open, setOpen] = useState(false);
    const orderName = order && options.find(options => options.value === order)?.nome;
    return(
        <button className={classNames({[styles.order] : true,[styles["order--active"]] : order !== "",})} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
            <span>{orderName || "Ordenar Por"}</span>
            {open ? < MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.order__options]: true,
                [styles["order__options--active"]]: open,
            })}>
                {options.map(options => (
                    <div className={styles.order__option} key={options.value} onClick={() => setOrder(options.value)}>
                        {options.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}