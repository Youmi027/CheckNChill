import React, { useState } from "react";
import Weather from "../weather/Weather";


import MoviesList from '../movies/MoviesList';
import Maps from '../Map/Map';


import Check from '../../assets/Check.png';
import Chill from '../../assets/Chill.png';

import '../Home/Home.css'
import SearchCity from "../search/SearchCity";

import Footer from '../Footer';

const Home = (props) => {
    
    const [isSearched, setIsSearched] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [temperature, setTemperature] = useState(0);
    
    function isClicked(searchValue){
        setIsSearched(true);
        setSearchValue(searchValue)
    }

    function getActivity(){
        if(temperature >18){
            return  <div>
                        <Maps/>
                    </div> 
            
        }else{
            return <div>
                    <MoviesList/> 
                </div>
                   
            }
        }
    return(
        <div>
            <SearchCity onSearch={(searchValue) => isClicked(searchValue)}/> 

            <h1 id="titleMain">CheckNChill</h1>
            <p className="underText">The new app you were waiting for</p>

        
            {
                isSearched == true &&

                <Weather cityValue = {searchValue} onGetWeather={(data)=>setTemperature(data.main.temp)}/> 

                {
                    getActivity()
                }
                {/*<MoviesList/> 
                <Maps />*/}
                </div>

            }

            {
                isSearched == false &&
                <div>
                    <h1 className="titleAboutUs">ABOUT US </h1>
                    <div className="containerAbout">
                        <div className="ContainerAboutTop">
                            <div className="divTextAbout">
                                <img id="imageAbout" src={Check}/>
                                
                                <p id="textAbout">
                                    <h3 id="titleAbout">
                                    Why CheckNChill ? 
                                    </h3>
                                    <p>Changing your plans due to the weather can be very frustrating! 
                                    <br>
                                    </br>
                                    Imagine yourself. It???s been 2 months since you planned to go to the sea with your friends and at the last minute, 
                                    everything is cancelled because of the weather! 
                                    It???s so frustrating, right? <br>
                                    </br>That???s why we created this app, just for you!</p>
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="ContainerAboutBottom">
                            <div className="divTextAbout">
                                <div>
                                    <h3 id="titleAbout">
                                        Just check it... and chill ! 
                                    </h3>
                                    <p id="textAbout">
                                        <p>
                                        The application CheckNChill was created by an observation. 
                                        <br></br> 
                                        It is very complicated to organize an activity because of the weather that can sometimes be changing. <br>
                                        </br>CheckNchill announces the weather first, but on top of that it reminds you of the essentials to take with you.
                                        You can also enjoy a daily quote that will inspire your day! 
                                        <br></br>
                                        On sunny days the app offers you ideas for outdoor activities, such as the nicest bars in your area ! And when it rains, the app proposes you to watch nice movies at home!
                                        CheckNChill is THE app that you need ! 
                                        </p>
                                    </p>
                                </div>
                                <img id="imageAbout" src={Chill}/>
                            </div>
                        </div>
                    <Footer/> 
                </div>
            }
           


        </div>
    )
}

export default Home;