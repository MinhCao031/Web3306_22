import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

class FileInput extends Component {
    needInp = false;
    showing = () => this.needInp = !this.needInp;

    dataStringLines = [];
    dataHeader = [];
    inputJson = null;
    needInp = false;

    processData = dataString => {
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
      this.inputJson = JSON.parse(JSON.stringify(list));
        console.log(this.inputJson);
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
        console.log(error);
        console.log("ERROR!!!!!!!!!!!!!!!");
      }
    }
  
    showing = needInput => {
      if(needInput) needInput = false;
      else needInput = true;
    }

    render = () => {
      return (
        <div>           
          <FontAwesomeIcon icon={faUpload} size="lg"/>
          Tải file csv từ máy: 
          <input type="file" onChange={(e) => this.showFile(e)}/>
        </div>
      )
    }
}


export default FileInput;
// style={'color: #BABABA, margin: 1px 1px'}
