import './App.css';
import { useState, useEffect } from 'react';
import quotes from './QoutesDB'

function App() {
  const [currQuote, setCurrQuote] = useState({})
  const [currColor, setCurrColor] = useState('')
  const [currIndex, setCurrIndex] = useState()

  useEffect(() => {
    setNewQuote()
  }, [])

  const getRandomIndex = () => {
    let index = Math.random() * quotes.length | 0.5
    while (index === currIndex) {
      index = Math.random() * quotes.length | 0.5
    }
    return index
  }

  const getRandomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16)
    const checkContrast = (color1) => {
      let colorRgb = hexToRgb(color1)
      let whiteRgb = {
        r: 255,
        g: 255,
        b: 255
      }
      // console.log(color)
      // console.log(colorRgb)
      const color1luminance = luminance(colorRgb.r, colorRgb.g, colorRgb.b);
      const color2luminance = luminance(whiteRgb.r, whiteRgb.g, whiteRgb.b);

      const ratio = color1luminance > color2luminance
        ? ((color2luminance + 0.05) / (color1luminance + 0.05))
        : ((color1luminance + 0.05) / (color2luminance + 0.05));

      return ratio < 0.3
    }

    while (color.length < 6 || !checkContrast(color)) {
      color = Math.floor(Math.random() * 16777215).toString(16)
    }

    // console.log(color)
    return `#${color}`
  }



  function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function hexToRgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  const setNewQuote = () => {
    const index = getRandomIndex()
    setCurrIndex(index)
    setCurrQuote(quotes[index])
    setCurrColor(getRandomColor())
  }

  return (
    <div className="app" style={{ background: currColor }}>
      <div style={{ background: 'white' }} className='card'>
        <h2 style={{ color: currColor }}><span className='quoteMark'>" </span>{currQuote && currQuote.quote}</h2>
        <p>{currQuote && currQuote.author}</p>
        <button onClick={setNewQuote} className='button' style={{ color: currColor, borderColor: currColor }}>new quote</button>
      </div>
    </div>
  );
}

export default App;
