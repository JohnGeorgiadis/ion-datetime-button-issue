import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const CustomModal: React.FC<any> = (props) => {
  return (
    <IonModal isOpen={true}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={props.onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
          quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos,
          dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>

        <IonLabel
          position="floating"
          style={{ color: "#226C79", marginTop: 0 }}
        >
          start data
        </IonLabel>

        <IonDatetimeButton datetime="startDate" />
        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="startDate"
            preferWheel
            presentation="date"
            name="startDate"
            showDefaultButtons
            color="primary"
          />
        </IonModal>
      </IonContent>
    </IonModal>
  );
};

export default CustomModal;
