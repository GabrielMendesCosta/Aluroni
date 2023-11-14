import filters from "./filters.json"
import styles from "./Filters.module.scss"

type IOptions = typeof filters[0];

export default function Filters(){
    function selectFilter(options: IOptions){}
    return (
        <div className={styles.filters}>
            {filters.map((options) => (
                <button className={styles.filters__filter} key={options.id} onClick={() => selectFilter(options)}>
                    {options.label}
                </button>
            ))}
        </div>
    );
}