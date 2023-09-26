import React from "react";
import styled from "styled-components";
import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CartView from "./CartView";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { add } from "../redux/Cart";

export default function Body() {
  const toggle = useAppSelector((state) => state.toggleCartView.value);
  const dispatch = useDispatch();

  return (
    <div>
      <CardContainer>
        {ItemList.map((item) => {
          return (
            <Card key={item.id}>
              <CardText>{item.name}</CardText>
              <CardButtons>
                <Button onClick={() => dispatch(add(item))}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </Button>
              </CardButtons>
            </Card>
          );
        })}
      </CardContainer>
      {toggle ? <CartView /> : null}
    </div>
  );
}

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 10px;
`;

const Card = styled.div`
  height: 100px;
  width: calc(98% / 3);
  margin-bottom: 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 10px;
`;

const CardText = styled.h2`
  font-size: 1.2rem;
`;

const CardButtons = styled.div`
  display: flex;
  height: 100%;
  width: 11%;
  justify-content: flex-end;
  align-items: center;
`;
const Button = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
