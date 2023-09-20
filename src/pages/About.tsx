import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'dark'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" color="medium">
                <p>
                    Aplikasi ini adalah sebuah aplikasi pemantau cuaca yang dibuat menggunakan Ionic Framework.
                </p>
                <br></br>
                <p>Pengembang: Poli Deo Justin Lolowang</p>
                <p>LinkedIn: Deo Lolowang</p>
                <p>GitHub: yowsky</p>

            </IonContent>
        </IonPage>
    )
}

export default About;