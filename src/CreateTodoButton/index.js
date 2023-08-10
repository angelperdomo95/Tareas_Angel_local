import './CreateTodoButton.css';
import { RiHeartAddFill } from "react-icons/ri";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    > <RiHeartAddFill/> </button>
  );
}

export { CreateTodoButton };