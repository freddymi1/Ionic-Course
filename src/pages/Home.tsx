import { IonAvatar, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const listArr = [
  {
    name: 'Freddy',
    desc: 'He is a developper'
  },
  {
    name: 'Erica',
    desc: 'She is a compatable'
  },
  {
    name: 'Mie',
    desc: 'She is an administrator'
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Ionic looks pretty cool!
        <IonList>
          {
            Array(4).fill(1).map((_, i) => (
              <IonItem key={i}>
                <IonText>Item list {i}</IonText>
              </IonItem>
            ))
          }
        </IonList>
        <IonList>
          {
            listArr.map(element => (
              <IonItemSliding  key={element.name}>
                <IonItem>
                  <IonAvatar>
                    <img src={`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`}/>
                  </IonAvatar>
                  <IonLabel className="ion-padding">
                    <h2>{element.name}</h2>
                    <h4>{element.desc}</h4>
                    <p>Some helper text!</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="start">
                  <IonItemOption onClick={()=> alert("Deleted!")}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
