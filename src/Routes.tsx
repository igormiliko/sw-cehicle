import { useLocation } from 'react-router';
import { AnimatePresence, motion } from "framer-motion";
import { 
    Route, 
    Switch,
} from 'react-router-dom';

import LoadPage from './views/LoadPage';
import Home from './views/Home';
import Checkout from './views/Checkout';
import Vehicles from './views/Vehicles';
import GoodBuy from './views/GoodBuy';
import Header from './components/layout/Header';


const Routes = () => {
    const location = useLocation()
    return (
        <div>

        <div>
            <Header /> 
            <div className="h-24"></div>
        </div>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                    <Route path="/loadPage" component={LoadPage} />
                    <Route path="/vehicles" component={Vehicles} />                        
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/success" component={GoodBuy} />
                    <Route path="/" component={Home} />
                </Switch>
            </AnimatePresence>
        </div>
    )

}

export default Routes