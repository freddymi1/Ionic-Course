import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonTitle,
    IonContent
} from "@ionic/react"
export const PhotMain: React.FC = () => {
    return(
        <>
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton menu="main-menu"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Take photo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="danger">
                    Click me
                </IonButton>
                
            </IonContent>
        </IonPage>
        </>
    )
}