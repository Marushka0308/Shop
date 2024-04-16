import { useState, useEffect } from "react";
import ItemsList from "./Items";
import './Shop.css';

const Shop = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    // useEffect is updated to run some code when count1, count2, count3, or count4 changes.
    // Currently, it doesn't do anything, but you can add your logic here.
    useEffect(() => {
        // Logic to run when counts change
    }, [count1, count2, count3, count4]);

    // Items useState is removed as it is not being modified and is redundant in its current form.

    // Static items list
    const items = [
        { image: 'https://picsum.photos/200', name: 'STRAWBERRIES', description: 'they are red', price: 15, id: 1 },
        { image: 'https://picsum.photos/200', name: 'BANANAS', description: 'they are yellow', price: 20, id: 2 },
        { image: 'https://picsum.photos/200', name: 'FROOTY', description: 'they are fruity', price: 25, id: 3 },
        { image: 'https://picsum.photos/200', name: 'MARSHMALLOWS', description: 'they are white', price: 35, id: 4 },
    ];

    const totalPrice = items[0].price*count1 + items[1].price*count2 + items[2].price*count3 + items[3].price*count4 ;

    return (
        <>
            <h1>ENJOY THE ARRAY OF ITEMS BELOW!</h1>
            <div className='cart'>
                <div className="product">
                <ItemsList items={items.filter((item) => item.id === 1)} />
                <button onClick={() => setCount1(Math.max(0, count1 + 1))}>+</button>
                <button onClick={() => setCount1(Math.max(0, count1 - 1))}>-</button>
                <p>Count is {count1}</p>
                </div>

                <div className="product">
                <ItemsList items={items.filter((item) => item.id === 2)} />
                <button onClick={() => setCount2(Math.max(0, count2 + 1))}>+</button>
                <button onClick={() => setCount2(Math.max(0, count2 - 1))}>-</button>
                <p>Count is {count2}</p>
                </div>

                <div className="product">
                <ItemsList items={items.filter((item) => item.id === 3)} />
                <button onClick={() => setCount3(Math.max(0, count3 + 1))}>+</button>
                <button onClick={() => setCount3(Math.max(0, count3 - 1))}>-</button>
                <p>Count is {count3}</p>
                </div>

                <div className="product">
                <ItemsList items={items.filter((item) => item.id === 4)} />
                <button onClick={() => setCount4(Math.max(0, count4 + 1))}>+</button>
                <button onClick={() => setCount4(Math.max(0, count4 - 1))}>-</button>
                <p>Count is {count4}</p>
                </div>
            </div>
            <br/>
            <h1>Number of items in cart is {count1+count2+count3+count4}</h1>
            <h1>Total price of items in the cart is {totalPrice}</h1>
        </>
    );
}

export default Shop;
