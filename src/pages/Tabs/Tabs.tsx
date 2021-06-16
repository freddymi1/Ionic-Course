import { 
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonBadge
 } from "@ionic/react";
import { calendar, cog, document, home, informationCircle, map, personCircle } from "ionicons/icons";


export const TabMenu: React.FC = () =>{
    return(
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
    )
}