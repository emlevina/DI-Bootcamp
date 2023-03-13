import React from 'react';
import axios from "axios";
import { setColorAction, setResultsAction } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const ClickBtn = () => {
    const dispatch = useDispatch()
    const fname = useSelector(state => state.fname)
    const sname = useSelector(state => state.sname)
    const setResults = (obj) => {
        dispatch(setResultsAction(obj))
    }
    const setColor = (color) => {
        dispatch(setColorAction(color))
    }
    const getRandomColor = () => {
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
        let color = Math.floor(Math.random() * 16777215).toString(16)
        const checkContrast = (color1) => {
            let colorRgb = hexToRgb(color1)
            let whiteRgb = {
                r: 255,
                g: 255,
                b: 255
            }
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
        return color
    }

    const handleClick = () => {
        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: { sname, fname },
            headers: {
                'X-RapidAPI-Key': 'fb691ae04dmsh050968e48741dcbp1279d7jsnd7d8fc2dfec0',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            setResults(response.data);
            setColor(getRandomColor())

        }).catch(function (error) {
            console.error(error);
        });
    }

    return <button onClick={handleClick} type="submit">Check</button>;
};

export default ClickBtn;