import React from 'react'

const CrytpoCard = ({ props }) => {
    return (
        <div className='card__container'>
            <div className='card__img'></div>
            <div className='card__content'>
                <div className='c__c__header'>
                    <span className='c__c__h__text'>{props.name}</span>
                    <span className='c__c__h__text'>Change</span>
                </div>
                <div className='values'>
                    <span className='c__c__h__text'>{props.symbol}</span>
                    <span className={[props.change < 0 ? 'red-change': 'green-change']}>{props.change}</span>
                </div>
            </div>
        </div>
    )
}

export default CrytpoCard
