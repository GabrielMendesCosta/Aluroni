import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import Search from './Search'
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items'

export default function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <Search 
                    search={search} 
                    setSearch={setSearch} 
                />
                <div className={styles.menu__filter}>
                    <Filters 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Order order={order} setOrder={setOrder}/>
                </div>
                <Items />
            </section>
        </main>
    )
}