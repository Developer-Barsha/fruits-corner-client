import React from 'react';
import auth from '../../firebase.init'
import {useAuthState} from 'react-firebase-hooks/auth'
import { toast, ToastContainer } from 'react-toastify';

const AddFruit = () => {
    const [user] = useAuthState(auth);

    const handleAddFruit=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = user.email;
        const image = e.target.image.value;
        const supplier = e.target.supplier.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const fruit = {name, email, image, supplier, price, quantity, description};
        console.log(fruit);
        fetch('http://localhost:5000/allfruits', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(fruit)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        e.target.reset();
        toast("Congrats!! Your Item's Added")
    }

    return (
        <div className='form-container pb-3'>
            <ToastContainer/>
            <form onSubmit={handleAddFruit}>
                <h3 className='pb-1'>Add A New Item</h3>
                <div className='w-100 d-flex gap-2'>
                    <input type="text" name="name" placeholder='Fruit Name' required />
                    <input type="text" name="supplier" placeholder='Fruit Supplier' required />
                </div>
                <div className='w-100 d-flex gap-2'>
                    <input type="text" name="price" placeholder='Fruit Price' required />
                    <input type="text" name="quantity" placeholder='Fruit Quantity' required />
                </div>
                <input type="text" name="image" placeholder='Fruit Image Link' required />
                <textarea className='w-100 p-2 rounded-sm' maxLength={120} rows={3} style={{ resize: 'none' }} type="text" name="description" placeholder='Fruit Description' required />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddFruit;