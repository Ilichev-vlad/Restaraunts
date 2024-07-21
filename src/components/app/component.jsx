import { Layout } from "../layout/component";
import { ThemeContextProvider } from "../theme-context/component";
import { Provider } from "react-redux";
import { UserContextProvider } from "../user-context/component";
import { store } from "../../redux";

import './app.css';
import { RestaurantTabsContainer } from "../restaurant-tabs/container";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContextProvider>
                <ThemeContextProvider>
                    <div>
                        <Layout>
                           <RestaurantTabsContainer />
                        </Layout>
                    </div>
                </ThemeContextProvider>
            </UserContextProvider>
        </Provider>
    );
}