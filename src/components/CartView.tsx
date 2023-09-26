import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/ToggleCartView";
import { useAppSelector } from "../redux/hooks";

export default function CartView() {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.CartController.value)

  return (
    <CartContainer>
      <Cart>
        <CloseIcon onClick={() => dispatch(toggle())}>
          <FontAwesomeIcon icon={faXmark} />
        </CloseIcon>
        <CartList>
          {
            cart.map((cartItem) => {
              return <CartListItem key={cartItem.id}>
                { cartItem.name }
              </CartListItem>
            })
          }
        </CartList>
      </Cart>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Cart = styled.div`
  background-color: white;
  height: 60%;
  width: 50%;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const CloseIcon = styled.div`
  align-self: flex-end;
  cursor: pointer;
  width: 2%;
`

const CartList = styled.div`

`

const CartListItem = styled.div`

`