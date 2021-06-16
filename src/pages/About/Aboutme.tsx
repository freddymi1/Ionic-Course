import { IonHeader, 
    IonPage, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonInput,
    IonList,
    IonItem,
    IonText
} from "@ionic/react";
import { useState } from "react";
const Aboutme: React.FC = () => {
    const [input, setInput] = useState('')
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton menu="main-menu"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>About page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="tertiary" routerLink="/" >Homepage</IonButton>
                <IonButton color="tertiary" routerLink="/login" >Log In</IonButton>
                <IonButton color="danger" routerLink="/register" >Register</IonButton>
                <IonInput value={input} onIonChange={(e: any)=>setInput(e.target.value)} ></IonInput>
                <IonList>
                {
                    Array(3).fill(1).map((_, i) => (
                    <IonItem key={i}>
                        <IonText>Item list {i}</IonText>
                    </IonItem>
                    ))
                }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Aboutme;