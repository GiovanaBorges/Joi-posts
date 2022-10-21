import {initializeApp} from "firebase/app"
import {
  getFirestore , 
  getDocs, 
  collection, 
  addDoc
} from "firebase/firestore"
import {useEffect, useState} from "react"

import Header from "./components/header";
import {
  MessageContent,
  Message,
  InputMessage 
} from "./App.styles"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBlcu1R5bXMVO9gM2wcPq8RoBZF9jGm_Zc",
  authDomain: "jois-1aadf.firebaseapp.com",
  projectId: "jois-1aadf"
});

function App() {
  const [message,setMessage] = useState("")
  const [name,setName] = useState("")
  const [newDate,setNewDate] = useState("")
  const [messages,setMessages] = useState([])

  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db,"tbuser")

  async function createPost(){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const user = await addDoc(userCollectionRef, {
      message:message,
      name:name,
      date:`${date}/${month}/${year}`
    }).then(
      alert("Post criado com sucesso"),
      window.location.reload()
    )
    //console.log(user)
   
  }
  

  useEffect(() =>{
    const getUsers = async () =>{
      const data = await getDocs(userCollectionRef)
      //console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setMessages(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUsers()
  },[])
  
  return (
    <div>
      <Header/>
      <InputMessage>
      <input 
      type="text"
      placeholder="DIgite seu nome"
      value={name}
      onChange={(e) => {setName(e.target.value)}}
       />
      
      <input type="text"
      placeholder="Digite sua Mensagem"
      value={message}
      onChange={(e) => {setMessage(e.target.value)}}
      />
     
      <button onClick={createPost}>Enviar mensagem para JOi dizer</button>

      </InputMessage>
      
        {messages.map((m) => {
          return(
            <>
            
              <Message key={m.id} >
                <MessageContent>
                  <h2>{m.message}</h2>
                  <h3>{m.name}</h3>
                  <h3>{m.date ? m.date : "2 minutos ago"}</h3>
                </MessageContent>
             
              </Message>
         
            
            </>
          )
        })}
      
    </div>
  );
}

export default App;