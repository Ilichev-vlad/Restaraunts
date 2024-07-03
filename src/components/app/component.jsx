import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Layout } from "../layout/component";
import { Restaurant } from "../restaurant/component";
import { TabBar } from "../tabBar/component";

export const App = () => {
    const [currentRestData, setData] = useState(restaurants ? restaurants [0] : {});

    const setCurrentRest = (currentRestData) => {
        setData(currentRestData);
    }
    
    return (
        <div>
            <Layout>
                <TabBar restaurants={restaurants} setCurrentRest={setCurrentRest} />
                <Restaurant 
                    name={currentRestData.name} 
                    menu={currentRestData.menu} 
                    reviews={currentRestData.reviews}
                />
            </Layout>
        </div>
    );
}