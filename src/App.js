
import { useEffect, useState } from 'react';
import './App.css';

import {MainContainer,HeaderContainer
  ,Container,TopContainer,
  Input,FilterContainer,Button,FoodCardsContainer,FoodCards} from './App.ts'
import Header from './components/Header/header';
import Search from './components/Search/Search';

import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL="http://localhost:9000"

function App() {

  const [data, setData] =useState();
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState();
  const [filterData,setFilterData] =useState();

  const fetchFoodData=async()=>{
    setLoading(true);
    try{
      const response= await fetch(BASE_URL);

      const json=await response.json();

      setData(json);
      setFilterData(json);
      setLoading(false);

    }
    catch(error){
        setError("Unable to fetch data");
    }
  }

  useEffect(()=>{
    fetchFoodData();
  },[])
  

  const filterResult = (e)=>{
    const searchdata=e.target.value;
    console.log(searchdata);

    const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchdata.toLowerCase()))
    setFilterData(filter);
  }


  
  
  
  
  return (   

    <>
      <Container>
      <TopContainer>
        <div>
            <img src={process.env.PUBLIC_URL + '/images/FoodyZone.svg'} alt='dices' />
         </div> 

         <Input  onChange={filterResult} placeholder='Search Foods...'>
           
         </Input>

      </TopContainer>
      <FilterContainer>
        <Button onClick={()=>console.log("hello")}>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardsContainer>
        <FoodCards>
        <SearchResult data={filterData}></SearchResult>
        </FoodCards>
      </FoodCardsContainer>

    </Container>
    </>
  );
}

export default App;
