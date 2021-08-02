import React, { useState, useEffect } from "react";
import './App.css';

//  https://api.imgflip.com/get_memes

function Templates({templates, setMeme}) {

  return (
    <div>
    <div className="heading">
      <h1>Meme Generator</h1>
      <h1>Click on the Memes to create!</h1>
    </div>
    {templates.map(template => (
      <div key={template.id} class="template"  onClick={() => {
        setMeme(template);
      }}>
        <div 
        className="image" >
          <img src={template.url} alt={template.name}/>
        </div>
      </div>
    ))}
    </div>
  );

}

function Meme({meme, setMeme}) {
  const [form, setForm] = useState({
      template_id: meme.id,
      username: "CodiacZenode",
      password: "abcdefghijklmnop1234",
      boxes: []
  });
  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
        url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
    .then(res => res.json())
    .then((data) => {
          setMeme({...meme, url: data.data.url});
    });
  };
  return (
    <div>
      <div class="heading">
        <h1>Edit and Create your own Memes!</h1>
      </div>
      <div className="edit-meme">
        <img src={meme.url} alt={meme.name} className="meme-image"/>
      </div>
      <div className="input-captions">
        {
            [...Array(meme.box_count)].map((element, index) => (
              <input
              key={index} 
              type="text" placeholder={`Meme Caption ${index + 1}`}
              onChange={(event) =>{
                const newBoxes = form.boxes;
                newBoxes[index] = {text: event.target.value};
                setForm({...form, boxes: newBoxes})
              }}
              />
            )) 
        }
      </div>
      <div className="buttons">
            <button onClick={generateMeme}>Create Meme</button>
            <button onClick={() => setMeme(null)}>Choose Template</button>
      </div>
    </div>
  );
}

function App() {

  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
    setTemplates(data.data.memes);
    })
  }, []);
  return (
    <div class="wrapper">
      {meme == null ? <Templates templates={templates} setMeme={setMeme} /> : 
      <Meme meme={meme} setMeme={setMeme}/>}
    </div>
  );
  
}

export default App;
