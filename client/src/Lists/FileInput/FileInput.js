import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class FileInput extends Component {
  // needInp = false;
  // showing = () => this.needInp = !this.needInp;

  dataStringLines = [];
  dataHeader = [];

  constructor(props) {
    super(props);
    this.state = {
      inputJson: null,
      inpSuccess: "No file yet"
    };
  }

  processData = dataString => {
    this.setState({inputJson:null,inpSuccess:false});
    this.dataStringLines = dataString.split(/\r\n|\n/);
    this.headers = this.dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const list = [];
    for (let i = 1; i < this.dataStringLines.length; i++) {
      const row = this.dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (this.headers && row.length === this.headers.length) {
        const obj = {}        
        for (let j = 0; j < this.headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (this.headers[j]) {
            obj[this.headers[j]] = d;
          }
        }
        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
    this.setState({inputJson: JSON.parse(JSON.stringify(list)), inpSuccess: "Server not received"});
    console.log(this.state.inputJson);
    console.log(this.state.inpSuccess);
    const inpjson = this.state.inputJson;
    axios
      .post('http://localhost:5000/users/importFile', {
        inpjson
      })
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status == "ok") {
          this.setState({inputJson: this.state.inputJson, inpSuccess: "Import successfully"})
        }
      })
      .catch((err) => {
        console.log(err);
      });      
  }
    
  showFile = async (e) => {
    // inputJson = null;
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      this.processData(text);
    };
    try {
      reader.readAsText(e.target.files[0]);
    } catch (error) {
      this.setState({inputJson: this.state.inputJson, inpSuccess: "Import failed"});
      console.log("ERROR!!!!!");
      console.log(error);
    }
  }

  // showing = needInput => {
  //   if(needInput) needInput = false;
  //   else needInput = true;
  // }

  render = () => {
    return (
      <div>           
        <FontAwesomeIcon icon={faUpload} size="lg"/>
        Tải file csv từ máy: 
        <input type="file" onChange={(e) => this.showFile(e)}/>
        {(this.state.inpSuccess == "Import successfully")? <p>Nhập file thành công</p>
        : (this.state.inpSuccess == "Server not received")? <p>Lỗi máy chủ. Xin vui lòng thử lại</p> 
        : (this.state.inpSuccess == "Import failed")? <p>Nhập file thất bại. Xin vui lòng thử lại</p> 
        : <></>}
      </div>
    )
  }
}

export default FileInput;
