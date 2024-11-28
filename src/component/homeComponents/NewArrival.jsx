import React from 'react'
import assets from '../../assets/assets';
import { CiStar } from "react-icons/ci";

const NewArrival = () => {

    const products = [
        {
          img: assets.img,
          title: "Product 1",
          price: "$19.99",
          rating: 4.5
        },
        {
          img: assets.img,
          title: "Product 2",
          price: "$29.99",
          rating: 4.7
        },
        {
          img: assets.img,
          title: "Product 3",
          price: "$15.99",
          rating: 4.2
        },
        {
          img: assets.img,
          title: "Product 4",
          price: "$49.99",
          rating: 3.8
        },
        {
          img: assets.img,
          title: "Product 5",
          price: "$39.99",
          rating: 5.0
        },
        {
          img: assets.img,
          title: "Product 6",
          price: "$24.99",
          rating: 4.3
        },
        {
          img: assets.img,
          title: "Product 7",
          price: "$59.99",
          rating: 4.6
        },
        {
          img: assets.img,
          title: "Product 8",
          price: "$14.99",
          rating: 3.9
        }
      ];

    const allProducts = products.map((product, index) => {
        return (
            <section key={index}>
                <div>
                    {product.img}
                    <p>{product.title}</p>
                </div>
                <div>
                    <p>{product.price}</p>
                    <ul className='flex'>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                    </ul>
                </div>

            </section>
        )
    })
      
  return (
    <section>
        <h2>New Arrivals</h2>
        <section>
            {allProducts}
        </section>

    </section>
  )
}

export default NewArrival