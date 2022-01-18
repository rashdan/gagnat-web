import React, {useState} from 'react'
import Down_Arrow from '../../../assets/icons/down_arrow.svg'



const data = [
    {
        question:'Kostar det att använda Gagnat?',
        answer:'Ja, det kostar att använda av Gagnat. Både för partners och medlemmar. Prissättningen för förmedling baseras på antal möbler och dess vikt och Partners betalar en summa som motsvarar återvinningspriset. Medlemmar betalar en årsavgift för att ha tillgång till platformen. För en tydligare kostbild, vänligen kontakta oss'
    },
    {
        question:'Hur lång tid tar det att bli ihopkopplad med medlemmar?',
        answer:'I snitt brukar det ta ca 1 vecka från att ni har identifierat vilka möbler som ska förmedlas. More right answers here / homework for gagnat',
    },
    {
        question:'Varför är återanvändning viktigare än återvinning?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus? Error, sint. Sapiente, rerum.',
    },
    {
        question:'Vad är SDG och varför ska jag bry mig?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus? Error, sint. Sapiente, rerum.',
    },
    {
        question:'Får man skänka möbler till sina medarbetare?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus? Error, sint. Sapiente, rerum.',
    }
]

const Faqs = () => {

    const [selected, setSelected]=useState(null)

    const toggle = (i) =>
        {
            if(selected == i)
            {
                return setSelected(null)
            }
            setSelected(i)
        }


    return (

        

        <div className='accordian-wrapper'>
            <div className="accordian">
                {
                    data.map((item, i)=>
                    (
                        <div className="item">
                        <div className="title" onClick={()=>toggle(i)}>
                            <h5>{item.question}</h5>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className=
                        {selected == i ? 'content show' : 'content'}
                        >
                        {item.answer}
                        </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Faqs
