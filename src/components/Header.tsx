import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <HeaderContainer>
      <CartButton>
        <FontAwesomeIcon icon={faCartShopping} style={{ cursor: "pointer" }} />
      </CartButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CartButton = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;
