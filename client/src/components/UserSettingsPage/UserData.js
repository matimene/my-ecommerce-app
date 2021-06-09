import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ME, UPDATE_USER } from "../../queries";
import {
  UserSettingsContainer,
  UserSettingsLabel,
  UserSettingsInput,
  UserSettingsSaveButton,
  UserSettingsH1,
} from "./UserSettingsElements";

const UserData = ({ info }) => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState(null);

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: ME }],
  });

  const saveChanges = async () => {
    if (newPassword.length && newPassword !== newPassword2) {
      return window.alert("PASSWORDS DONT MATCH");
    }

    let nameNew = name ? name : info.name;
    let adressNew = adress ? adress : info.adress;
    let phoneNew = phone ? phone : info.phone;

    try {
      if (newPassword.length && newPassword === newPassword2) {
        await updateUser({
          variables: {
            name: nameNew,
            adress: adressNew,
            phone: phoneNew,
            password,
            newPassword,
          },
        });
      } else {
        await updateUser({
          variables: {
            name: nameNew,
            adress: adressNew,
            phone: phoneNew,
            password,
          },
        });
      }
      return window.alert("Sucessfully changed!");
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <UserSettingsContainer>
      <UserSettingsH1>Your settings</UserSettingsH1>
      <UserSettingsLabel>Name</UserSettingsLabel>
      <UserSettingsInput
        onChange={(e) => setName(e.target.value)}
        placeholder={info.name}
      />
      <UserSettingsLabel>Adress</UserSettingsLabel>
      <UserSettingsInput
        onChange={(e) => setAdress(e.target.value)}
        placeholder={info.adress}
      />
      <UserSettingsLabel>Phone</UserSettingsLabel>
      <UserSettingsInput
        onChange={(e) => setPhone(e.target.value)}
        placeholder={info.phone}
      />
      <UserSettingsLabel>New Password</UserSettingsLabel>
      <UserSettingsInput
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Only if you want to change it"
        type="password"
        name="newPassword"
      />
      <UserSettingsInput
        onChange={(e) => setNewPassword2(e.target.value)}
        placeholder="Repeat it"
        type="password"
        name="newPassword2"
      />
      <UserSettingsLabel>Password</UserSettingsLabel>
      <UserSettingsInput
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter current password to continue"
        type="password"
      />
      <UserSettingsSaveButton onClick={() => saveChanges()}>
        Save changes
      </UserSettingsSaveButton>
    </UserSettingsContainer>
  );
};

export default UserData;
