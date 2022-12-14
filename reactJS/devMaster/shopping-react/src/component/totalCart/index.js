
// import { cartTotal } from "../redux/selector"
import { listCartLocal,cartTotal } from "../redux/selector"
import {  useSelector } from 'react-redux/es/exports';

const YourTotals = () => {
    const listCart= useSelector(listCartLocal)
    const total= useSelector(cartTotal)
    console.log(listCart.length)
    
    return (
        <>
        <tr>
            <th colSpan={6}>Empty product in your cart</th>
        </tr>
            <tr>
            <td colSpan={4}>
                Total
            </td>
            <td colSpan={2} className="total-price text-left">
                {listCart.length===0?0:total}
            </td>
        </tr>
        </>
    )
}

export default YourTotals