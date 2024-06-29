import { DNA } from "react-loader-spinner";
import chartUp from "/assets/chart-up.svg";
import chartDown from "/assets/chart-down.svg";
import styles from "./TableCoin.module.css";
const TableCoin = ({ coins, loading }) => {
    console.log();
    return (
        <div className={styles.container}>
            {loading ?
                <div>
                    <DNA visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper" />
                </div>
                :
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>Total Volome</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <TableRow key={coin.id} coin={coin} />
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>

    )
}
export default TableCoin;

const TableRow = ({ coin: {
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume
} }) => {
    return (
        <tr>
            <td>
                <div className={styles.symbol}>
                    <img src={image} alt={symbol} />
                    <span>{symbol.toUpperCase().toLocaleString()}</span>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                ${current_price}
            </td>
            <td className={price_change > 0 ? styles.success : styles.error}>
                {price_change.toFixed(2)}%
            </td>
            <td>
                {total_volume.toLocaleString()}
            </td>
            <td>
                {price_change > 0 ?
                    <img src={chartUp} alt="Volume Up" /> :
                    <img src={chartDown} alt="Volume Down" />
                }
            </td>
        </tr>
    )
}