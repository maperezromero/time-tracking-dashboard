import { useContext } from 'react';
import { FrequentlyContext } from '../App';
import userPicture from '../images/image-jeremy.png'



export const User = () => {
    const { frequencies, setFrequencies } = useContext( FrequentlyContext)
    const handleTime = (frequently) => {
        if (frequently === 'daily'){
            setFrequencies({daily: 'selected', weekly:'', monthly:'', selection:'daily'})
        }else if (frequently === 'weekly'){
            setFrequencies({daily: '', weekly:'selected', monthly:'', selection: 'weekly'})
        }else{
            setFrequencies({daily: '', weekly:'', monthly:'selected', selection: 'monthly'})
        }
    }
    return(
        <div className="user">
            <span className="user-data">
                <img src={userPicture} alt="User" className="user-picture"/>
                <span className="user-text">
                    <span className="normal-text">Report for</span>
                    <span className="name-text">Jeremy</span>
                    <span className="lastname-text">Robson</span>
                </span>    
            </span>
            <span className="selection">
                <span className={`daily ${frequencies.daily}`}  onClick={()=> handleTime('daily')}>Daily</span>
                <span className={`weekly ${frequencies.weekly}`} onClick={()=> handleTime('weekly')}>Weekly</span>
                <span className={`monthly ${frequencies.monthly}`} onClick={()=> handleTime('monthly')}>Monthly</span>
            </span>
        
        </div>
    )
}
