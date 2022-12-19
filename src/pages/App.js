import '../style/style.css';
import { React, useState } from 'react';
import copy from 'copy-to-clipboard';
import { Button, Input, message, Upload, Select, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function Title(){
  return(
    <div class="part" id="part1">
        <h1 class="heading" id="title">{"Pastebin"}</h1>
        <Divider id="divider"/>
        <div>
          <strong>Usage</strong>: paste any text here, submit, then share it with URL.
        </div>
    </div>
  )
}

function Paste(props){
  const [font, setFont] = useState("Plaintext");
  const handleChange = (value) => {
    setFont(value);
  };

  if(props.type === "text"){
    return(
      <div>
        <Select
          defaultValue={font} id="select" style={{ width: '80px', margin: '7px'}}
          onChange={handleChange}
          options={[
            {
              value: 'Plaintext',
              label: 'Plain',
            },
            {
              value: 'JavaScript',
              label: 'JS',
            },
            {
              value: 'C++',
              label: 'CPP',
            },
            {
              value: 'C#',
              label: 'C#',
            }
          ]}
        />
        <br/>
        <textarea placeholder='Put your paste here' id='pasteinput'></textarea>
      </div>
    )
  }
  else if(props.type === "file"){
    return(
      <div>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />} id="btn-upload">Upload</Button>
        </Upload>
      </div>
    );
  }
}

function Setting (){
  return(
    <div class="part"  id="part3">
      <h2 class="heading">{"Settings"}</h2>
      <Input id="secs" type="number" list="secslist" placeholder="Expiration(secs)"/>
      <datalist id="secslist">
        <option value = {60}>1 minute</option>
        <option value = {300}>5 minutes</option>
        <option value = {3600}>1 hour</option>
        <option value = {86400}>1 day</option>
        <option value = {604800}>1 week</option>
      </datalist>
      <p class="information">Delete your paste after a period of time.</p>

      <Input id="times" type="number" list="timeslist" placeholder="Expiration(times)"/>
      <datalist id="timeslist">
        <option value = {5}></option>
        <option value = {10}></option>
        <option value = {20}></option>
        <option value = {50}></option>
        <option value = {100}></option>
      </datalist>
      <p class="information">Delete your paste after certain times of visits.</p>

      <Input id="password" type="text" placeholder="Password"/>
      <p class="information" id="information-password">Get your paste with password. If no, anyone could get the paste.</p>
    </div>
  )
}

function Handin(props){
  const [copy1, setCopy1] = useState("Copy");
  const [copy2, setCopy2] = useState("Copy");
  if(props.type==="true"||props.type==="again"){
    return(
      <div class="part"  id="part4">
        <h2 class="heading">Uploaded paste</h2>
        <Input.Group compact>
          <Input
            style={{
              width: 'calc(100% - 400px)'
            }}
            value="http:"
            id="url"
          />
          <Button id="btn-copy1"onClick={()=>{
            copy(document.getElementById("url").value);
            setCopy1("Copied");
            setCopy2("Copy");}}
          >{copy1}</Button>
        </Input.Group>
        <p class="information">URL</p>

        <Input.Group compact>
          <Input
            style={{
              width: 'calc(100% - 400px)'
            }}
            value={document.getElementById("secs").value+" secs / "+document.getElementById("times").value+" times"}
            id="expiration"
          />
          <Button id="btn-copy2" onClick={()=>{
            copy(document.getElementById("expiration").value);
            setCopy1("Copy");
            setCopy2("Copied");}}
          >{copy2}</Button>
        </Input.Group>
        <p class="information" id="information-expiration">Expiraion</p>
      </div>
    )
  }else return(
    <div></div>
  )
}

function App(){
  const [choice, setChoice] = useState("text");
  const [submit, setSubmit] = useState("false");

  return(
    <body>
      {/* part1 */}
      <Title/>

      {/* part2 */}
      <div class="part"  id="part2">
        <div>
          <Button id="fortext" onClick={()=>{
            setChoice("text");
          }}>Edit paste</Button>

          <Button id="forfile" onClick={()=>{
            setChoice("file");
          }}>Upload file</Button>
        </div>
      <Paste type={choice}/>
      </div>

      {/* part3 */}
      <Setting/>

      {/* part4 */}
      <Handin type={submit}/>

      {/* part5 */}
      <div class="part"  id="part5">
        <Button id="submit" onClick={()=>{
          if(submit!=="true") setSubmit("true");
          else setSubmit("again");
          if(choice==="text"){

          }
          else if(choice==="file"){

          }
        }}>Submit</Button>
      </div>

    </body>
  );
}

export default App;