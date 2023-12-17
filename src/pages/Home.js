import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import styled from 'styled-components';


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 100000));
      setIsLoading(false);
    };

    fetchData();
  }, []);


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Conteúdo Carregado!</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
