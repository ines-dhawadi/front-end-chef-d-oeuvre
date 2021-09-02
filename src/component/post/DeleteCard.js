import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/action/actionPost";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteCad = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteCad();
        }
      }}
    >
      <img src="/images/imgChat/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
