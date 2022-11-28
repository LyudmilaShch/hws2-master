import React from 'react'
import {Slider, SliderProps, SliderThumb} from '@mui/material'
import range from '../../../../img/range.png';
import s from "../../HW11.module.css";

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {
}

const ImageThumb = (props: AirbnbThumbComponentProps) => {
    const {children, ...other} = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className={s.imgGange}>
            </span>
        </SliderThumb>
    );
};

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 5,
                width: 250,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                },
                '& .MuiSlider-rail': {
                    color: "#8B8B8B",
                    opacity: 1,
                },
            }}
            slots={{thumb: ImageThumb}}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
