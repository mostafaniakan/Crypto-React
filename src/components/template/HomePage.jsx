import { useState } from "react";
import { useEffect } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../servises/CriptoApi";
import Pagination from "../modules/Pagination";


const HomePage = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchApiCrypto = async () => {
            const url = getCoinList();
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCoins(data);
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApiCrypto();

        return () => {

        };
    }, []);
    return (
        <>
            <Pagination page={page} setPage={setPage}/>
            <TableCoin coins={coins} loading={loading} />
        </>
    )
}

export default HomePage;