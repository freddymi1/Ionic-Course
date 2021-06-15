import { IonContent, 
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
 } from "@ionic/react";
import { useState } from "react";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function loginUser(){
        console.log(username, password)
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <h2>Login page</h2>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput
                            type="text"
                            placeholder="Username"
                            onIonChange={(e: any)=>setUsername(e.target.value)}
                        >
                        </IonInput>
                        <IonInput 
                            type="password" 
                            placeholder="Password"
                            onIonChange={(e: any)=>setPassword(e.target.value)}
                            >
                        </IonInput>
                        <IonButton onClick={loginUser} color="primary">Sing In</IonButton>
                        Haven't account? <a href="/register">Sign up</a>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
export default LoginPage;