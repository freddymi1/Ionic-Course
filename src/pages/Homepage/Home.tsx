import { IonAvatar, IonButton, IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonContent, IonHeader, 
  IonIcon, 
  IonInput, 
  IonItem, IonItemOption, 
  IonItemOptions, IonItemSliding, 
  IonLabel, IonList, 
  IonPage, IonText, 
  IonTitle, IonToolbar, IonMenu, IonSplitPane, IonMenuButton
} from '@ionic/react';
import './Home.css';
import {star, list} from 'ionicons/icons'
import { useEffect, useState } from 'react';

const listArr = [
  {
    name: 'Freddy',
    desc: 'He is a developper',
    photoI: 'assets/images/fm.jpg'
  },
  {
    name: 'Erica',
    desc: 'She is a compatable',
    photoI: 'assets/images/ks.jpg'
  },
  {
    name: 'Mie',
    desc: 'She is an administrator',
    photoI: 'assets/images/ks1.jpg'
  }
]

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton menu="main-menu"></IonMenuButton>
            </IonButtons>
            <IonTitle>Homepage</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonTitle>
              <h1>Liste des amis</h1>
            </IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {
                listArr.map(element => (
                  <IonItemSliding  key={element.name}>
                    <IonItem>
                      <IonAvatar>
                        <img src={element.photoI}/>
                      </IonAvatar>
                      <IonLabel className="ion-padding">
                        <h2>{element.name}</h2>
                        <h4>{element.desc}</h4>
                        <p>Some helper text!</p>
                        <IonButton color="tertiary">
                          <IonIcon slot="start" icon={star}></IonIcon>
                          Voir
                        </IonButton>
                      </IonLabel>
                    </IonItem>
                    <IonItemOptions side="start">
                      <IonItemOption onClick={()=> alert("Deleted!")}>Delete</IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))
              }
            </IonList>
          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
