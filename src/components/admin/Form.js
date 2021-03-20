import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { connect } from "react-redux";
import { addImage } from "../../actions/handle";

function Form({ addImage }) {
  const [data, setData] = useState({
    note: "",
    img: "",
  });

  const onAdd = () => {
    console.log(data);
    addImage(data);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>add foto</h1>
      <input
        type="text"
        value={data.note}
        onChange={(e) => setData({ ...data, note: e.target.value })}
        // value={data.note}
        // onChange={(e) => setData({ ...data, note: e.target.value })}
      />
      <br />
      <br />
      <FileBase64
        type="file"
        onDone={({ base64 }) => setData({ ...data, img: base64 })}
      />
      <button onClick={() => onAdd()}>wyslij</button>
    </div>
  );
}

export default connect(null, { addImage })(Form);
