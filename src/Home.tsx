import { useState, useEffect, FormEvent } from "react";
import axios from "axios";

export function Home() {
 
const [user, setUser] = useState("");
const [fruits, setFruits] = useState<fruit[]>([]);
const message: string = `Hello,${user}`; 
type fruit = { 
  id: number;
  name: string;
  price: number;
  image: string;
};

useEffect(() => {
  axios.get("/api")
  .then(res => {
    setFruits(res.data);
  });  
}, []);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user) {
    alert(message);
  };
  };
 

return(
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input 
           className="input"
           type="text" 
           value={user}
           placeholder="名前を入力してください"
           onChange={(e) => setUser(e.target.value) }
          />
          <button className="button" type="submit">送信</button>
        </form>
        <div className="fruitsContainer">
        {fruits?.map((fruit) => (
          <div key = {fruit.id}>
            <div>
              <img className="image" alt={fruit.name} src={fruit.image} />
              <p className="fruitsName">{fruit.name}</p>
              <p className="text">{`￥${fruit.price}円`}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
);
};
