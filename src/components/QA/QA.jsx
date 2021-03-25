import React from 'react';

import './QA.css';


const QA = () => {
    const [answer, setAnswer] = React.useState(0);

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    const questions = {
        'Вопрос 1': text,
        'Вопрос 2': text,
        'Вопрос 3': text,
        'Вопрос 4': text,
        'Вопрос 5': text,
        'Вопрос 6': text,
        'Вопрос 7': text,
        'Вопрос 8': text,
    }

    function setActive(e) {
        setAnswer(e);
    }

    return (
        <section className="qa">
            <div className="qa-line">
                <div className="max-width">
                    <h2 className="block__title text--upper qa__title">Вопрос ответ</h2>
                </div>
            </div>
            <div className="qa__wrapper max-width">
                <div className="qa-columns__left">
                    {Object.keys(questions).map((text, i) => (
                        <button className="qa-question__item" key={`${text}-${i}`} onClick={() => { setActive(i) }}>
                            <p className="qa-question__text">{text}</p>
                            <div className={`qa-question__icon ${answer === i ? 'qa-active' : ''}`}>&#8592;</div>
                        </button>
                    ))}
                </div>
                <div className="qa-columns__right">
                    <p className="qa-answer__title">Ответ</p>
                    {Object.keys(questions).map((key, i) => (
                        <div className={`qa-answer__text ${answer === i ? '' : 'qa-hidden'}`} key={i}>
                            <p>{text}</p>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QA;