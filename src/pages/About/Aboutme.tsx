import { IonHeader, 
    IonPage, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonText
} from "@ionic/react";
import { useEffect, useState } from "react";
const Aboutme: React.FC = () => {
    const [input, setInput] = useState('')
    useEffect(()=>{
        console.log(input)
    })
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
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