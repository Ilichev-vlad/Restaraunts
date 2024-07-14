import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Layout } from "../layout/component";
import { Restaurant } from "../restaurant/component";
import { TabBar } from "../tabBar/component";

import './app.css';

export const App = () => {
    const [currentRestData, setCurrentRestData] = useState(restaurants.length ? restaurants[0] : {});

    const setCurrentRest = (currentRestData) => {
        setCurrentRestData(currentRestData);
    }
    
    return (
        <div>
            <Layout>
                <TabBar restaurants={restaurants} setCurrentRest={setCurrentRest} />
                <Restaurant 
                    key={currentRestData.id}
                    name={currentRestData.name} 
                    menu={currentRestData.menu} 
                    reviews={currentRestData.reviews}
                />
                {/* <Restaurant 
                    key={currentRestData.id}
                    name={currentRestData.name} 
                    menu={currentRestData.menu} 
                    reviews={currentRestData.reviews}
                />
                <Restaurant 
                    key={currentRestData.id}
                    name={currentRestData.name} 
                    menu={currentRestData.menu} 
                    reviews={currentRestData.reviews}
                /> */}
            </Layout>
        </div>
    );
}