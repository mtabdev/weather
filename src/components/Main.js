import React,{useState,useEffect} from 'react'



const Main = () => {

        const[city,setcity]=useState(null);
        const [search,setSearch]=useState('Yemen');
        const [wd,setwd]=useState(null);
        const searchWeather=(event)=>{

                setSearch(event.target.value);
              
        }
       

        

        useEffect(() => {

           const  fetchAPI=async()=>{

                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
                const resp =await fetch(url)
                const data =await resp.json();
                setcity(data.main);
                setwd(data.weather);

            }

            fetchAPI();

            console.log(process.env)
            
            
        },[search] )

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();





    return (
        <>
        
           <div>
            <div className="app-wrap">
    <header>
      <input type="text" autoComplete="off" className="search-box" placeholder="Search for a city..." onChange={searchWeather}/>
    </header>
    {!city?
    <h2>No Data Found</h2>
    
    :
    (
        <main>
        <section className="location">
          <div className="city">{search}</div>
          <div className="date">{today.toLocaleDateString("en-US", options)}</div>
        </section>
        <div className="current">
          <div className="temp">{city.temp}<span>°C</span></div>
         {
                !wd?(
                    <p>Seems like cloudy</p>
                ):
                (
                    <div className="weather">{wd[0].main}</div>
                )

         }
          <div className="hi-low">{city.temp_min} °C / {city.temp_max} °C</div>
        </div>
      </main>
    )
    
    
    }
    
     
  </div>
</div>
        


        
        </>
    )
}

export default Main;
