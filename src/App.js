
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
  const [selectedBtn, setSelectedBtn]=useState("all");


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

  const filterFood = (type)=>{
    if(type==="All"){
      setFilterData(data);
      setSelectedBtn("All")
      return;
    }
    const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    setFilterData(filter);
    setSelectedBtn(type);
    
  }
  

  const filterResult = (e)=>{
    const searchdata=e.target.value;
    
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
        <Button onClick={()=>filterFood("All")}>All</Button>
        <Button onClick={()=>filterFood("Breakfast")}>Breakfast</Button>
        <Button onClick={()=>filterFood("Lunch")}>Lunch</Button>
        <Button onClick={()=>filterFood("Dinner")}>Dinner</Button>
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
