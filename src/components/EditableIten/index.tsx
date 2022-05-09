import { useEffect, useState } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { BsTrash } from 'react-icons/bs';

import * as C from './styles';

import { deleteData, getData, updateData } from '../../helpers/API';

type Props = {
  mainPhoto: string;
  id: string;
  title: string;
  price: string;
  description: string;
}

function EditableItens({mainPhoto, id, title, price, description}:Props) {
  const [titleInput, setTitleInput] = useState(title);
  const [priceInput, setPriceInput] = useState(price);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [wasEdited, setWasEdited] = useState(false);
  const [initialState, setinitialState] = useState(
    {
      initialTitle: title,
      initialPrice: price,
      initialDescription: description
    }
  );
  
  useEffect(() => {
    if(
        initialState.initialTitle !== titleInput ||
        initialState.initialPrice !== priceInput ||
        initialState.initialDescription !== descriptionInput
      ) setWasEdited(true);

  }, [titleInput, priceInput, descriptionInput])

  const handleUpdate = async () => {
    const tmpData = await getData(`posts/${id}`);
    const data = {...tmpData, title: titleInput, price: priceInput, description: descriptionInput};

    updateData(`posts/${id}`, data);
    window.location.reload();
    
  }
  
  const handleDelete = () => {
    if(window.confirm('Do you really want to delete this ad?')) {
      deleteData(`posts/${id}`)
      window.location.reload();
    } 
  }
  
  const handleReset = () => {
    setTitleInput(initialState.initialTitle);
    setDescriptionInput(initialState.initialDescription);
    setPriceInput(initialState.initialPrice)
    setWasEdited(false)
  }

  return (
    <>
      <C.Container>
        <div className='imageContainer'>
          <img className='imageContainer__img' src={mainPhoto} alt=''/>
        </div>
        <div className='dataContainer' >
          <input 
            className='title' 
            value={titleInput}
            maxLength={50}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <label>
            <input 
              className='price'
              value={priceInput}
              maxLength={9}
              onChange={(e) => setPriceInput(e.target.value)}
            />
            $
          </label>
          <textarea 
            className='description' 
            value={descriptionInput}
            maxLength={512}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <div className='actionButtons'>
            <button 
              className='editButton'
              disabled={!wasEdited}
              onClick={handleUpdate}
            >
              Save changes
            </button>
            <div 
              className='resetButton'
              onClick={handleReset}
            >
              <VscDebugRestart/>
              Reset
            </div>
            <div 
              className='deleteButton'
              onClick={handleDelete}
            >
              <BsTrash/>
              Delete
            </div>
          </div>
        </div>
      </C.Container>
    </>
   );
}

export default EditableItens;