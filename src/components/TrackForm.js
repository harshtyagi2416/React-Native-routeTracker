import React, { useContext } from "react";
import { Text, Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  //   console.log(locations.length);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Input value={name} onChangeText={changeName} placeholder="Enter Name" />

      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer>
        {!recording && locations.length ? (
          <Button title="SAVE" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
