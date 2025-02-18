import { useState } from 'react'
import './App.css'
import withLogger from './Components/WithLoggerTogo';
import Avatar from './Components/Avatar'
import Greating from './Components/Greating';
import Style from './Components/Style';
import Button from './Components/Button';
import Card from './Components/Card';
import List from './Components/List';
import StatusMessage from './Components/StatusMessage';
import Modal from './Components/Modal';
import IconButton from './Components/IconButton';

const LoggedStyle = withLogger(Style);

function App() {
  const [avatarImg, setAvatarImg] = useState(null);
  const [avatarAlt, setAvatarAlt] = useState(null);
  const [vaqtinchaImg, setVaqtinchaImg] = useState(null);
  const [vaqtinchaAlt, setVaqtinchaAlt] = useState(null);
  const [name, setName] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [color, setColor] = useState(null)
  const [alertTXT, setAlertTXT] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [formInput, setFormInput] = useState(null)
  const [form2Input, setForm2Input] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [buttonChange, setButtonChange] = useState('reset');
  const showAlert = () => {
    alert(alertTXT ? `You written this : ${alertTXT}` : "You clicked button");
  };
  const showForm = (e) => {
    e.preventDefault()
    alert(`Siz kiritgan 1-nmadur : ${formInput}; va 2-nmadur : ${form2Input}`);
  }
  return (
    <div className='App'>
      <h2>Masalalarni chunishim bo'yicha qildim , notogri qilingan bolsa qaysi biri xatoligi yozib qoying iltimos</h2>
      <div className="box">
        <div className="box-left">
          <h2>1) Avatar qoshish <span style={{fontSize: "13px"}}>( Tayyor URL: https://as2.ftcdn.net/v2/jpg/04/27/16/05/1000_F_427160582_w0D5Z01pVaz32w7JzzNWTtE2n1VvvKmi.jpg )</span></h2>
          <input type="text" onChange={(e) => { setVaqtinchaImg(e.target.value) }} placeholder='img URL' />
          <input type="text" onChange={(e) => { setVaqtinchaAlt(e.target.value) }} placeholder='img ALT' />
          <button onClick={() => {
            setAvatarImg(vaqtinchaImg)
            setAvatarAlt(vaqtinchaAlt)
          }}>See result</button>
        </div>
        <div className="box-right">
          <Avatar src={avatarImg} alt={avatarAlt} />
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>2) Greating</h2>
          <input type="text" placeholder='enter name' onChange={(e) => { setName(e.target.value) }} />
        </div>
        <Greating name={name} />
      </div>
      <div className="box">
        <div className="box-left">
          <h2>3) Style</h2>
          <label>
            <span>Bg Color</span>
            <input type="color" onChange={(e) => { setColor(e.target.value) }} value={color || "#ffffff"} />
          </label>
          <label>
            <span>Width</span>
            <input type="range" onChange={(e) => { setWidth(e.target.value * 5) }} />
          </label>
          <label>
            <span>Height</span>
            <input type="range" onChange={(e) => { setHeight(e.target.value * 2) }} />
          </label>
        </div>
        <div className="box-right">
          <LoggedStyle width={width} color={color} height={height} />
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>4) Button Alert <span style={{ fontSize: "15px" }}><mark>inputga text kiritmasdan buttonni bossangiz "You clicked" yozuvi chqadi</mark></span> </h2>
          <label>
            <span>Alert uchun text</span>
            <input type="text" onChange={(e) => { setAlertTXT(e.target.value) }} />
          </label>
          <Button alertTXT={alertTXT} showAlert={showAlert} />
        </div>
        <div className="box-right">
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>5) Card</h2>
        </div>
        <div className="box-right">
          <Card>
            {/* chldren */}
            <h3>Card Title</h3>
            <p>Card description</p>
          </Card>
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>6) List Render</h2>
        </div>
        <div className="box-right">
          <List items={['olma', 'banan', 'anor', 'shaftoli', 'tarvuz']} />
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>7) Status Message</h2>
          <span>To change message status <button onClick={()=> setIsSuccess(!isSuccess)}>tap me</button></span>
        </div>
        <div className="box-right">
          <StatusMessage isSuccess={isSuccess} />
        </div>
      </div>
      <div className="box">
        <div className="box-left">
          <h2>8) Delete Confirmation</h2>
        </div>
        <div className="box-right">
          <Modal title="Delete Confirmation" isOpen={isOpen} setIsOpen={setIsOpen}>
            <p>Are you sure you want to delete?</p>
            <div>
              <button onClick={() => setIsOpen(false)}>Yes</button>
              <button onClick={() => setIsOpen(false)}>No</button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="box">
        <h2>9) HOC</h2>
        <h2>Open Console 👉🏻</h2>
      </div>
      <div className="box">
          <form onSubmit={showForm}>
            <h2>10) IconButton Form</h2>
            <input type="text" placeholder='nmadur yozn ' onChange={(e)=> setFormInput(e.target.value)} required />
            <input type="text" placeholder='yana nmadur yozn ' onChange={(e)=> setForm2Input(e.target.value)} />
            {/* Icon orniga yozuv 😁 */}
            <IconButton type={buttonChange} icon={buttonChange}/>
            <span style={{display : "block"}}>to change button type <button type='button' onClick={() => {buttonChange === 'reset' ? setButtonChange('submit') : setButtonChange('reset')}}>tap me</button></span>
            {/* submit ga o'zgartirsa bo'ladi */}
          </form>
      </div>
      <div>
    </div>
    </div>
  )
}

export default App
