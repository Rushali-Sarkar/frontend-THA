import React from 'react';
import {useState} from 'react';
import "./App.css";

function AddItemForm({addItem}) {
  const [title, setTitle] = useState('');
  const [calorie, setCalorie] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addItem({ title, calorie });
    setTitle('');
    setCalorie('');
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <div className="input-items">
          <div className="input-blocks">
            <input type='text' 
              name='title' 
              id='title' 
              className="food-input"
              required 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Food name'
            />
          </div>
          <div className="input-blocks">
            <input
              type='number'
              name='number'
              id='number'
              className="calorie-input"
              required
              value={calorie}
              onChange={e => setCalorie(e.target.value)}
             placeholder='Calorie amount'
            />
          </div>
        </div>
        <button type='submit' className="submit-button">Add Item</button>
      </form>
    </div>
  );
}

function RenderItem({ updateItem, removeItem, item, index }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="lists">
      <div>
        {isEditing ? (
          <input
            type='text'
            name='title'
            id='title'
            className="editing-food"
            required
            value={item.title}
            onChange={e => updateItem(index, { title: e.target.value })}
          />
        ) : (
          <h2 className='card-title'>{item.title}</h2>
        )}
        {isEditing ? (
          <input
            type='number'
            name='calorie'
            id='calorie'
            className="editing-calorie"
            required
            value={item.calorie}
            onChange={e => updateItem(index, { calorie: e.target.value })}
          />
        ) : (
          <p>
            You have consumed {item.calorie} calories
          </p>
        )}
        <div>
          <button className="delete-button" onClick={() => removeItem(index)}>
            Delete
          </button>
          <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]);

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = item => {
    setItems([...items, item]);
  };

  const removeItem = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <AddItemForm addItem={addItem} />
      {items.length === 0 ? (
        <h3 className="heading">Start Adding Items</h3>
      ) : (
        items.map((item, index) => (
          <RenderItem
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
}
