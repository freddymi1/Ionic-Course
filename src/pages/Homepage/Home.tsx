import { IonAvatar, IonButton, IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonContent, IonHeader, 
  IonIcon,  
  IonItem, IonItemOption, 
  IonItemOptions, IonItemSliding, 
  IonLabel, IonList, 
  IonPage, 
  IonTitle, IonToolbar, IonMenuButton, IonGrid, IonCol, IonRow,
  IonSegment,IonSegmentButton
} from '@ionic/react';
import './Home.css';
import { star, mail, logoLinkedin, phonePortrait, gitBranch, logoGithub, people, person, home, heart, pin, call, globe, basket } from 'ionicons/icons';

const listArr = [
  {
    name: 'NARISOA HARILALA Freddy Michel',
    phone: '+261 34 21 243 19',
    post: 'Developpeur Front-end',
    photoI: 'assets/images/fm.jpg'
  }
]
const ExpArray = [
  {
    title: 'Developpeur Front-end',
    dateA: 'Nov 2020 - ',
    societe: 'Sayna Madagascar',
    desc: 'Developpeur front-end'
  },
  {
    title: 'Technicien en Informatique',
    dateA: '2018 - 2019 ',
    societe: 'Atout-service Madagascar',
    desc: 'Technicien en Informatique'
  }
]

const Home: React.FC = () => {
  
  return (
    <IonPage>
      {/* <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton menu="main-menu"></IonMenuButton>
            </IonButtons>
            <IonTitle>Homepage</IonTitle>
          </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <div className="sectionHeadprofile">
            
          <div className="sectionProfile">
            <div className="myProfile">
              <img className="myImage" src="assets/images/fm.jpg" />
            </div>
            <div className="sectionName">
              <div className="nameLasname">
                <h1 className="myName">NARISOA HARILALA Freddy Michel</h1>
              </div>
              <h1 className="myPost">+261(0)34 21 243 19</h1>
              <h1 className="myPost">michelfreddy1992@gmail.com</h1>
              <h1 className="myPost">Developpeur <span className="myPostdev">Front-end</span></h1>
              <IonButton color="primary" routerLink="/" >Telecharger mon cv</IonButton>
            </div>
          </div>
        </div>
        
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="call">
            <IonIcon icon={phonePortrait} />
          </IonSegmentButton>
          <IonSegmentButton value="home">
            <IonIcon icon={mail} />
          </IonSegmentButton>
          
          <IonSegmentButton value="heart">
            <IonIcon icon={logoLinkedin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={logoGithub} />
          </IonSegmentButton>
        </IonSegment>
        
        {/*  */}
        <IonCard>
          <IonCardHeader>
            <IonTitle>
              <h1>Experience profesionnel</h1>
            </IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {
                ExpArray.map(element => (
                  <IonItemSliding  key={element.title}>
                    <IonItem>
                      <IonAvatar>
                        <IonIcon slot="start" icon={star} />
                      </IonAvatar>
                      <IonLabel className="ion-padding">
                        <h2 className="postTitle">{element.title}</h2>
                        <h4 className="postSociete">{element.societe}</h4>
                        <p className="postDate">{element.dateA}</p>
                        <p className="postDesc">{element.desc}</p>
                        <IonButton color="tertiary">
                          <IonIcon slot="start" icon={star}></IonIcon>
                          Detail
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
