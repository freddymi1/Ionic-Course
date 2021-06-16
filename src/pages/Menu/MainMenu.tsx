import { 
    IonHeader, 
    IonMenu,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonIcon,
    IonLabel,
} from "@ionic/react"
import { cog, document, home } from "ionicons/icons";
import React from 'react';
export const MainMenu: React.FC = () => {
    
    return(
        <IonMenu className="transition-shadow" side="start" menuId="main-menu" contentId="menu" type="overlay">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Freddy Michel</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonList className="ion-padding">
                    <IonItem routerLink="/">
                        <IonIcon icon={home} slot="start"></IonIcon>
                        <IonLabel>Home</IonLabel>  
                    </IonItem>
                    <IonItem routerLink="/aboutme">
                        <IonIcon icon={document} slot="start"></IonIcon>
                        <IonLabel>About</IonLabel>  
                    </IonItem> 
                    <IonItem routerLink="/experience">
                        <IonIcon icon={cog} slot="start"></IonIcon>
                        <IonLabel>Experience</IonLabel>  
                    </IonItem>  
                </IonList>
            </IonContent>
        </IonMenu>
    )
}