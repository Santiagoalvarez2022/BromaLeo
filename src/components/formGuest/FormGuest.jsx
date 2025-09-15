import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGuestList, confirmGuest } from '../../service/guests.js';
import Modal from './Modal.jsx';
import Loader from '../loader/Loader.jsx';
import './FormGuest.css';

export default function FormGuest() {
    const navigate = useNavigate();
    const [options,setOptions] = useState([]);
    const [input,setInput] = useState('');
    // lista de nombre traidos desde google sheets
    const [Guests,setGuets] = useState([]);
    // estados para mostrar options
    const [showOptions, setShhowOptions] = useState(false);
    //estado para enviar solo cuando le nombre este elegido y sea correcto
    const [selected,setSelected] = useState(false);
    //informacion del invitado seleccionado
    const [loader,setLoader] = useState(false);
    const [guestSelected, setGuest] = useState();
    const [modal, setModal] = useState(false);

    const handlerGuestList = async() =>{
      setLoader(true);
      try {
        const response = await getGuestList();

        if (response.status === 200) {
            setLoader(false);
            setGuets(response.data);
        }
      } catch (error) {
        // navigate('/error')
        console.log(error, 'Error al pedir la lista de invitados');
      }
    };

    const handlerInput = ({target}) =>{
      let {value} = target;
      setSelected(false)
      setGuest()
      setInput(value);
      if(value){
        let list_options = Guests.filter((guest)=> guest.Nombre.toLowerCase().includes(value.toLowerCase()));
        setOptions(list_options)
        setShhowOptions(true)
      }
      else {
        setShhowOptions(false)
        setSelected(false)
      }
    };

    const selecteName = (option) =>{
      const findName = Guests.findIndex(o=> o.Nombre === option.Nombre)
      if (findName !== -1) {
        setInput(option.Nombre);
        setSelected(true);
        setShhowOptions(false);
        setGuest(option);
      }
    };

    const confirmInvitation = async() =>{
      try {
        const response = await confirmGuest(guestSelected.Id);

        setLoader(true);
        setSelected(false);

        if (response.status === 200) {
          setModal(true);
          setInput("");
          setGuest();
          setShhowOptions(false);
          setLoader(false);
        }

      } catch (error) {
        navigate('/error')
        console.log(error);
      }
    };

    const closeModal = () =>{
      setModal(false);
      handlerGuestList();
    };

    useEffect(()=>{
      handlerGuestList();
    },[]);

    return (
    <>
      {
        loader
          && <Loader />
      }

      {
        modal
          && <Modal
          close={closeModal}
        />
      }

      <form className="guestForm" onSubmit={(e)=>e.preventDefault()}>
          <input
            placeholder='Nombre y Apellido'
            className='inptGuest bg-[#B6D9E8] text-base text-black px-4 py-1 rounded-xl font-Inria shadow-md '
            value={input}
            onChange={handlerInput}
            autoFocus={false}
            type="text"
          />

          <ul className="optionsContainer">
            {
              showOptions
                && options.length > 0
                && (
                options.map((option,index)=>{
                if (option.Confirmo.toLocaleLowerCase() === "no") {
                  return <li
                    className="optionNames"
                    key={index}
                    onClick={() => selecteName(option)}
                  >
                  {option.Nombre}
                </li>
                }}))
            }

          {
            selected
            && <p className="guestSelected mb-2">Invitado seleccionado <br /> "{input}"</p>
          }

          {
            selected
            && <button
            onClick={confirmInvitation}
            className="acptInvitation"
            > Confirmar </button>
          }

          </ul>
      </form>
  </>)
};