import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-inline: 16vb;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://s3-alpha-sig.figma.com/img/ef26/ce43/fa5d843238ef978c2de7c13a290ebd62?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hK1b~10CerGooPb-v~7dXTtB2RQP~hlCDXW70ZEGNG4nyx4May2dKbla6JI4sGf6Z0trmdPMYcmbu~UrydFdzMbTkaslrtuh6CMv42HEkBRuwWEK9Ml2MrxU6JZ04mN4LiGqhJMnmxNnf1WHVZCivCwkGWLGjM5c9kS37SXUG~vsq-026YadmD6sJILM~pVlNUvWq-jQ0rttupk1tatZhHnyQfzB9aY1LLPZOlvH7tp4qQACQHH9Q14TWruNFx9sxuvke7eGl~vqGr3ReRN-Y~ZaFV-R8Q4HV1m1~P35GXA5n7E~tiw0n~tJPBsBeDTPjV-MgtLiV2udZOrgJYiCwg__),
    lightgray 50% no-repeat;
  min-height: 700px;
  background-position: bottom;
  background-size: cover;

  @media only screen and (max-width: 890px) {
    padding-inline: 36px;
    min-height: 700px;
  }


`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding-block: 140px;
    padding-inline: 120px;
    color: #fff;
  }

  .content-text h1 {
    font-size: 64px !important;
    text-align: center;
    padding-inline: 30vb;

  }

  .content-text p {
    font-size: 24px  !important;
    text-align: center;
    padding-inline: 35vb;

  }

  @media only screen and (max-width: 890px) {
    padding-inline: 36px !important;
    .content-text {
    gap: 24px;
    padding-block: 100px;
    padding-inline: 0px;

  }

  .content-text h1 {
    font-size: 32px !important;
    padding-inline: 36px !important;
  }

  .content-text p {
    font-size: 12px;
    padding-inline: 36px !important;


 
  }

  }

  
`;

export const Nav = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative; /* Adicionado para controlar o posicionamento do menu toggle */

  .nav-itens {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
  }

  .nav-itens a {
    text-decoration: none;
    color: #ffffff;
  }

  .logo {
    color: #fff;
    font-weight: 400;
  }

  .btn {
    background-color: #fff;
    padding: 5px 20px;
    border-radius: 8px;
  }

  .btn-primary {
    color: #3e86f5 !important;
  }

  /* Menu Toggle */

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }

  .bar {
    width: 40px;
    height: 6px;
    background-color: #fff;
    margin: 2px 0;
    border-radius: 4px;
    transition: 0.4s;
  }

  .bar1.open {
    width: 40px;
    transform: rotate(45deg) translateY(7px);
  }

  .bar2 {
    width: 25px !important;
    transform: translateX(0px);
  }

  .bar2.open {
    display: none;
    width: -25px;
  }

  .bar3.open {
    width: 40px;
    transform: rotate(-45deg) translateY(-7px);
  }

  .nav-itens.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 10px;
    width: 100%;
    height: 275px !important;
    background-color: #33333347;
    padding: 16px;
    gap: 25px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    z-index: 1;
    opacity: 1;
    animation: slide 0.3s, opacity 0.5s cubic-bezier(0.1, 0, 0.1, 0);
  }

  @media only screen and (max-width: 890px) {
    justify-content: space-around;

    .hamburger {
      display: flex;
    }

    .nav-itens {
      display: none;
    }

    .nav-itens.open {
      width: 100%;
      
    }
  }

  /* Menu Toggle */

  @keyframes slide {
    0% {
      height: 0;
    }
    100% {
      height: 275px;
    }
    0% {
      height: 0;
    }
  }
    @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;



    }
  }
`;

export const InfoSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 16vb;
  position: relative;
  padding-bottom: 75px;

  .itensPesquisa {
    display: flex;
    align-items: center;

  }

  .option {
    position: absolute;
    top: 150px;
    z-index: 1;
    justify-content: center;
    display: flex;
    gap: 10px;
    align-items: center;
    width: 279px;
    height: 100px;
    border-radius: 25px 25px 0px 0px;
    background: #fff;
  }

  .option a {
    display: flex;
    align-items: center;
    padding: 18px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
  }

  .option img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .option a .flight {
    transform: rotate(-45deg);
  }

  .active {
    border-radius: 25px;
    background: rgba(62, 134, 245, 0.2);
  }

  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1160px;
    padding: 18px;
    height: 274px;
    border-radius: 0px 50px 50px 50px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 240px;
  }

  .info-content{
    display: flex;
    align-items: center;
    gap: 40px;
    border: 1px solid #00000030;
    padding-inline: 40px;
    padding-block: 40px;
    border-radius: 20px;
    font-size: 18px;
  }

  .icon{
    width: 50px;
    height: 50px;
    border: 1px dashed #00000050;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon img{
    width: 40px;
    height: 40px;
   
 
    padding: 5px;

  }
  .info-content p {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info-content p img{
    width: 20px;
    height: 20px;
  }

  .icon-flight{
    transform: rotate(180deg)
  }

  

  @media screen and (max-width: 768px) {
    padding-inline: 80px;

    .option {
    position: absolute;
    top: 150px;
    z-index: 1;
    justify-content: center;
    display: flex;
    gap: 5px;
    align-items: center;
    width: 300px;
    height: 100px;
    border-radius: 25px 25px 0px 0px;
    background: #fff;
    margin-left: 10px;
  }


  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    height: 700px;
    padding: 18px;
    border-radius: 0px 50px 50px 50px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 240px;
  }

  }

 

`;

export const OfferSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 16vb;
  padding-bottom: 200px;
  padding-top: 300px;
  background-color: #F7F7F7;
  text-align: center;

  
 
  .optionOffer{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 60px;
    padding:  10px;
    background-color: #fff;
    border-radius: 10px;
    margin: 40px;
  }

  .optionOffer a {
    text-decoration: none;
    color: #00000050;
    font-weight: 500;
    padding: 10px;
    cursor: pointer;
    &:hover{
      background-color:#3E86F5;
    color: #fff;
    padding:  10px;
    border-radius: 10px;
    }
  }

  .active{
    background-color:#3E86F5;
    color: #fff !important;
    padding: 10px;
    border-radius: 10px;
  }


  .offerContent{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  flex-wrap: wrap;

  }

  .card{
    width: 380px;
    height: 457px;
    display: flex;
    padding-inline: 15px;
    padding-block: 15px;
    flex-direction: column;
    border-radius: 40px;
    background-color: #fff;
    gap: 5px;

  }

  .card img{
    width: 350px;
    height: 300px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 40px;
    margin-bottom: 10px;

  }

  .card .modeContent{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding-left: 10px;
    
  }

  .modeContent p{
      font-size: 14px;
      font-weight: 500;
      color: #00000050;
      
    }

  .card .modeContent .mode{
    padding: 2px 8px;;
    border: 1px solid transparent;
    border-radius: 25px;
    font-size: 14px
  }

  

  .mode.relax{
    background-color:#FCDDEC;
    color:#F178B6;
  }
  .mode.adventure{
    background-color:#F1F1FD;
    color:#7879F1;
  }


  .card .name{
    padding-left: 10px;
    font-size: 24px !important;
    font-weight: 600;
    text-align: left;
  }

  .card .card-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 10px;
  }

  .card .price{
   
    font-size: 24px;
    font-weight: 500;
  }

  .card .price > span{
    font-size: 18px;
    color: #00000050
  }

  .card .button{
    padding: 5px 12px;
    background-color: #F2F6FF;
    color: #3E86F5;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
      padding-inline: 36px !important;
  }

`

export const SectionFrame = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: #f7f7f7;
  padding-left: 16vb;
  padding-right: 16vb;



  .content {
    width: 1220px;;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
 
     }

  .content-image {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .content-text{
   width: 50%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-bottom: 40px;

  }

  .content-image img {
    width: 480px;
    height: 800px;
    border-radius: 75px;
    object-fit: cover;
    position: relative;
  }

  .card {
    width: 174px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    background: #fff;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);

  }

  .card .title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: -10px;
    color: #3e86f5;
  }

  .card .subTitle {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .card1 {
    top: 56px;
    right: -50px;
    position: absolute;
  
  }

  .card2 {
    top: 50%;
    position: absolute;
    left: -50px;
  }

  .card3 {
    bottom: 143px;
    position: absolute;
    right: -50px;  
  }

  .content-text h1{
    font-size: 48px;
    font-weight: 600;

  }

  .content-text p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 40px */
    color: #00000050
  }

  .button{
    width: 179px;
    height: 75px;
    border-radius: 10px;
    background:  #3E86F5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 1px 0px 2px 5px #3E86F5;
    margin-top: 20px;
    margin-left: 4px;
  }

  @media only screen and (max-width: 768px) {
    .content {
    padding-top: 400px;
    flex-direction: column;
    padding-inline: 40px;
  }
  .content-image img {
    width: 350px !important;
    height: 600px;
  
  }

  .card1 {
    top: 50px;
    right: 80px;
    width: 120px;
    height: 70px;
    
  }

  .card .title{
    font-size: 24px;
  }

  .card .subTitle {
    font-size: 14px;
  }

  .card2 {
    top: 40%;
    left: 80px;
    width: 120px;
    height: 70px;
  }

  .card3 {
    bottom: 50px;
    right: 80px;  
    width: 120px;
    height: 70px;
  }
  .content-text {
    padding-inline: 100px;
  }

  .content-text h1{
    font-size: 30px !important;

  }

  .content-text p {
    font-size: 18px;
  }

  .button{
    width: 100%;
  }

 
}
`;
