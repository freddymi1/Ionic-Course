import { IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonInput,
    IonButton,
    IonCard,
    IonContent,
    IonCardContent,
    IonCardHeader
} from "@ionic/react"
import { useState } from "react"

export const Register: React.FC = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function register(){
        console.log(name, lastname, email, password)
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <h2>Login page</h2>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput
                            type="text"
                            placeholder="Name"
                            onIonChange={(e: any)=>setName(e.target.value)}
                        >
                        </IonInput>
                        <IonInput
                            type="text"
                            placeholder="Lastname"
                            onIonChange={(e: any)=>setLastname(e.target.value)}
                        >
                        </IonInput>
                        <IonInput
                            type="text"
                            placeholder="Username or email"
                            onIonChange={(e: any)=>setEmail(e.target.value)}
                        >
                        </IonInput>
                        <IonInput 
                            type="password" 
                            placeholder="Password"
                            onIonChange={(e: any)=>setPassword(e.target.value)}
                            >
                        </IonInput>
                        <IonButton onClick={register} color="primary">Sign Up</IonButton>
                        Haven account? <a href="/login">Sign in</a>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}