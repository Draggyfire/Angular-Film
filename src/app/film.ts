export interface Film{
  title:string;
  year:number;
  affiche:string;
  entrees:number;
  rating:number;
  director:string;
  actors:string[];
}

export const FILMS:Film[]= [
  {
    title:"Dragon Ball Super Broly",
    year:2019,
    affiche: "https://fr.web.img3.acsta.net/pictures/19/02/22/16/14/0019120.jpg",
    entrees: 9001,
    rating:5,
    director:"Tatsuya Nagamine",
    actors:["Goku", "Vegeta", "Freezer", "Broly", "Bardock"]
  },
  {
    title:"My Hero Academia Two Heroes",
    year:2019,
    affiche:"https://fr.web.img6.acsta.net/pictures/19/01/18/16/14/2145553.jpg",
    entrees: 1947344,
    rating:4,
    director:"Kenji Nagasaki",
    actors:["Izuku Midoriya", "Katsuki Bakugo", "Momo Yaoyorozu"]
  },
  {
    title:"Sword Art Online - Progressive",
    year:2022,
    affiche:"https://fr.web.img6.acsta.net/pictures/21/12/01/16/45/1662892.jpg",
    entrees: 846544646,
    rating:5,
    director:"Ayoko Kôno",
    actors:["Kazuto Kirigaya" , "Asuna Yuuki"]
  },
  {
    title:"Danmachi : Arrow of the Orion",
    year:2019,
    affiche: "https://images.cinefil.com/movies/1065385.webp",
    entrees: 86786785,
    rating:5,
    director:"Katsushi Sakurabi",
    actors:["Bell Cranel", "Hestia", "Aiz Wallenstein", "Artemis"]
  },
  {
    title:"Sword Art Online - Ordinal Scale",
    year:2017,
    affiche: "https://fr.web.img2.acsta.net/pictures/17/01/26/16/34/219690.jpg",
    entrees: 1564564,
    rating:5,
    director:"Tomohiko Itō",
    actors:["Kazuto Kirigaya" , "Asuna Yuuki"]
  }
].sort(function (a,b){
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
})
