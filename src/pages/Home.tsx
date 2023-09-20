import { contrastOutline, settings, settingsOutline, information } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';
import HomeContentContainer from "../components/HomeContentContainer";
import { useContext, useEffect, useState } from "react";
import { AppConfig } from "../SettingContext";

const Home: React.FC = () => {
  const { setting } = useContext(AppConfig)

  useEffect(() => {
    console.log(setting)
  }, [setting])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar" color="dark">
          {/* Setting page */}
          <IonButton slot="start" routerLink="/settings" color="medium">
            <IonIcon icon={settingsOutline} color="light" />
          </IonButton>

          {/* Header title */}
          <IonTitle className="ion-text-center ion-text-capitalize" color="light">Weather App</IonTitle>

          {/* information / About button */}
          <IonButton slot="end" color="medium" routerLink="/about">
            <IonIcon icon={information} color="light"/>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      
      {/* Fullscreen Color */}
      <IonContent fullscreen className="ion-fullscreen" color="dark">

        {/* Search Bar */}
        <HomeContentContainer setting={setting} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
