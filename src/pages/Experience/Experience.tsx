import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonToast
} from "@ionic/react"
import { useState } from "react"
export const Experience: React.FC = () => {
    const [showT1, setShowT1] = useState<boolean>(false)
    return(
        <>
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton menu="main-menu"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Experience</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton onClick={()=> setShowT1(true)} expand="full" color="success">
                    Lancer la Toast 
                </IonButton>
                <IonButton onClick={()=> setShowT1(true)} expand="full" color="primary">
                    Lancer la modal 
                </IonButton>
                <IonToast
                    isOpen={showT1}
                    onDidDismiss={()=>setShowT1(false)}
                    message="Message test de toats avec ionic"
                    duration={1000}
                    position="middle"
                    color="warning"
                />
            </IonContent>
        </IonPage>
        </>
    )
}