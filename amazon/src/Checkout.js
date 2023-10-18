import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvoider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket , user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__add' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg' alt='banner' />
            <img className='checkout__add' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg' alt='banner' />
            
            <div>
                
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    /> 
                ))}

              


            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>
            
        </div>


    </div>
  )
}

export default Checkout