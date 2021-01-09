import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li{
    padding: 20px 20px 0 10px;
  }
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    top:0;
    display: ${({ open }) => open ? 'block' : 'none'};
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: margin-right 2s ease-in-out .5s;
    li{
      color: #fff;
      &:last-child {
        position:absolute;
        bottom:20%;

        

      }
    }
  }
`;

const RightNav = ({ open }) => {
    console.log(open)
  return (
    <Ul open={open}>
      <li>
        <Link
        to='/'
        style={{color:'#fff',textDecoration: 'none'}}
        className='nav-bar'
        activeStyle={{color: 'red'}}
        >
        Нүүр</Link>
        </li>
      <li>
        <Link to='/exam'
        style={{color:'#fff' ,textDecoration: 'none'}} 
        className='exam-bar'
        activeStyle={{color:'red'}}
        >
          Уралдаант сорил</Link></li>
      <li>
      <Link to='/exam'
        style={{color:'#fff' ,textDecoration: 'none'}} 
        className='exam-bar'
        activeStyle={{color:'red'}}
        >
          ЭЕШ</Link></li>
      <li>
        
      <Link to='/high-class'
        style={{color:'#fff' ,textDecoration: 'none'}} 
        className='exam-bar'
        activeStyle={{color:'red'}}
        >
          Ахлах анги
          </Link>
          </li>
      <li>
        
      <Link to='/mid-class'
        style={{color:'#fff' ,textDecoration: 'none'}} 
        className='exam-bar'
        activeStyle={{color:'red'}}
        >
        Дунд анги
        </Link>
        </li>
      <li>
      <Link to='/Log-in'
        style={{color:'#fff' ,textDecoration: 'none'}} 
        className='exam-bar'
        activeStyle={{color:'red'}}
        >
          Нэвтрэх
          </Link>
          </li>
    </Ul>
  )
}

export default RightNav;