
import {useContext } from 'react';
import { FrequentlyContext } from '../App';
import data from '../db/data.json';
import { extractImages } from '../helpers/extract-images';
import ellipsis from '../images/icon-ellipsis.svg';

require('../helpers/extract-images');

export const Activities = () => {
    const { frequencies } = useContext( FrequentlyContext );
    const images = extractImages();
    return(
        <div className="activities">

        {data.map (activity => {
            let image;
            let current = '';
            let prev = '';
            if (frequencies.selection === 'daily'){
                current = `${activity.timeframes.daily.current}hrs`
                prev = `Last Day - ${activity.timeframes.daily.previous}hrs`
            }else if(frequencies.selection === 'weekly'){
                current = `${activity.timeframes.weekly.current}hrs`
                prev = `Last Week - ${activity.timeframes.weekly.previous}hrs`
            }else{
                current = `${activity.timeframes.monthly.current}hrs`
                prev = `Last Month - ${activity.timeframes.monthly.previous}hrs`
            }
            for (const key in images){
                const text =activity.title.substring(0,4).toLocaleLowerCase();
                if(key.substring(5,9)===text){
                    image = images[key].default;
                    break;
                }
                
            }
            return (
                <span key={activity.title} className={activity.title.split(' ').join('').toLocaleLowerCase() + " activity"} >
                    <img src={image} alt="test" className="act-img"/>
                    <span className="activity-details">
                            <span className="act-name">
                                {activity.title}
                            </span>
                            <span className="act-time">
                                {current}
                            </span>
                            <span className="act-points">
                            <img src={ellipsis} alt="ellipsis" className="ellipsis"/>
                            </span>
                            <span className="act-pre-time">
                                {prev}
                            </span>
                    </span>
                </span>
                )
            })}
        </div>
    )

}
