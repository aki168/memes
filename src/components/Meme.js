import { useEffect,useState } from "react";
// import memesData from "../memesData";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/2hgfw.jpg'
  })

  const [allMemeImages, setAllMemeImages] = useState([]);

  // 接收API資料
  useEffect(()=>{
    async function getMemesData(){ 
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data)
    } // 設定串接[非同步 -> 同步]
    getMemesData() // 執行連線
  },[])

  const getMeme = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="Meme">

        <input
          className="Meme--input"
          type="text"
          placeholder="上面那行字"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="Meme--input"
          type="text"
          placeholder="下面那行字"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          onClick={getMeme}
          className="Meme--btn">換張迷因
        </button>

      </div>
      <div className="meme">
        <img
          className="Meme--img"
          src={meme.randomImage}
          alt="迷因圖"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}