import styled from 'styled-components'

export const Container=styled.div`
    max-width:1200px;
    margin:0 auto;
    background: #373735;
`

export const MainContainer=styled.div`
    display: flex;
`

export const TopContainer=styled.section`
    min-height:140px;
    display:flex;
    justify-content:space-between;
    padding:16px;
    align-items:center;
`

export const HeaderContainer=styled.div`
    display: flex;
    width: 1440px;
    padding: 85px 120px 31px 120px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 54px;
    background-color: #373735;
    min-height:100vh:  
    `

export const Input=styled.input`
    background-color:transparent;
    border: 1px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding: 0 10px;
`

export const FilterContainer=styled.section`
    display:flex;
    justify-content:center;
    gap:4px;
    color:blue;
    padding:12px;
`

export const Button=styled.button`
        background: red;
        border-radius:5px;
        padding: 6px 12px;
        border:none;
        cursor:pointer;
`

export const FoodCardsContainer=styled.section`
 min-height:calc(100vh - 140px);
 background-image:url("/Images/bg.png");
 background-size:cover;
`

export const FoodCards=styled.div`
    display: flex;
    flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`

export const FoodCard=styled.div`
width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`


    