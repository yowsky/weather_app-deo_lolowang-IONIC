import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Settings from "./pages/Settings";
import About from "./pages/About";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { createContext, useState } from 'react';
import { AppConfig } from './SettingContext';

setupIonicReact();



const App: React.FC = () => {
  const [settings, setSettings] = useState<{
    'apiKey': string,
    'language': string,
    'metric': string,
    'user': {
      'auto_refetch': boolean,
      'fetch_interval': number
    }
  }>({
    'apiKey': 'd0803559f03dafe4ee9b2515f4dc8c21',
    'language': 'id',
    'metric': 'metric',
    'user': {
      'auto_refetch': true,
      'fetch_interval': 300000
    }
  })

  return (
    <AppConfig.Provider value={{setting: settings, setSettings: setSettings}}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            {/* Home */}
            <Route exact path="/home">
              <Home />
            </Route>
            
            {/* Home redirect */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            {/* Settings */}
            <Route exact path="/settings">
              <Settings />
            </Route>

            {/* About */}
            <Route exact path="/about">
              <About/>
            </Route>

          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AppConfig.Provider>
  )
};

export default App;
