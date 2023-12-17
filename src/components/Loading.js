import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 60%, 100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const CenteredContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .6s, transform 1s;
    opacity: 1;

    ${({ finished }) => 
    finished &&
    css`
        transform: translate(-50%, -50%) scale(4) !important;
        opacity: 0;
    `}
`;

const LoaderContainer = styled.div`
  width: 65px;
  height: 65px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: ${pulse} .5s linear infinite;
  opacity: 0;
  transition: opacity 1s;

  ${({ loaded }) =>
    loaded &&
    css`
      opacity: 1;
    `}
`;

const LoaderInner = styled.div`
  position: absolute;
  width: 65px;
  height: 65px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: ${scaleUp} .5s linear infinite;
`;

const Loading = () => {
  const [load, setLoad] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 900));
      setLoad(true);
    };
    fetchData();

  
    
  }, []);

  useEffect(() => {
    if(load){
        const finishAnimation = async () => {
            
            await new Promise(resolve => setTimeout(resolve, 3000))
            setFinished(true);
        }  
        finishAnimation();  
    }
  }, [load]);


  return (
    <CenteredContainer finished={finished}>
      <LoaderContainer loaded={load}>
        <LoaderInner />
      </LoaderContainer>
    </CenteredContainer>
  );
};

export default Loading;
