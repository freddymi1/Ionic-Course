import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonTabs,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Homepage/Home';

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

import Aboutme from './pages/About/Aboutme';
import LoginPage from './pages/Loginpage/LoginPage';
import { Register } from './pages/Register/Register';
import { MainMenu } from './pages/Menu/MainMenu';
import { Experience } from './pages/Experience/Experience';

import { bookmarks, call, cog, document, home, phoneLandscape } from 'ionicons/icons';
import { useState } from 'react';
// import { TabMenu } from './pages/Tabs/Tabs';

const App: React.FC = () => {
  const [size, setSize] = useState<boolean>();
  
  // Fonction que perment de modifier la menu en tabs
  const onRisizeBody = () => {
      if(window.innerWidth > 565){
        setSize(true)
      }
      else {
        setSize(false)
      }
      
  }
  // Executer la fonction onRisizeBody
  window.addEventListener('resize', onRisizeBody)

  return(
    <IonApp>
      <IonReactRouter>
        {/* {
          size ? (
            <IonSplitPane contentId="menu">
              <MainMenu/>
              <IonRouterOutlet id="menu">
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutme" component={Aboutme}/>
                <Route exact path="/experience" component={Experience}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={Register}/>
              </IonRouterOutlet>
            </IonSplitPane>
          ):(
            <IonPage id="main">
              
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/aboutme" component={Aboutme}/>
                  <Route exact path="/experience" component={Experience}/>
                  <Route exact path="/login" component={LoginPage}/>
                  <Route exact path="/register" component={Register}/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/aboutme">
                    <IonIcon icon={document} />
                    <IonLabel>About me</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/experience">
                    <IonIcon icon={cog} />
                    <IonLabel>Experience</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </IonPage>
          )
        } */}
        <IonPage id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutme" component={Aboutme}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/register" component={Register}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              
              <IonTabButton tab="tab3" href="/experience">
                <IonIcon icon={cog} />
                <IonLabel>Experience</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/experience">
                <IonIcon icon={bookmarks} />
                <IonLabel>Formation</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/experience">
                <IonIcon icon={call} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
        
      </IonReactRouter>
    </IonApp>
  )
  };

export default App;
