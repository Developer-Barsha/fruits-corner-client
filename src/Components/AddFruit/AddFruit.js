import React from 'react';

const AddFruit = () => {
    return (
        <div className='form-container pb-3'>
            <form className=''>
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