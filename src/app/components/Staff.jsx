import React from 'react';
import Image from 'next/image';
import Tony from '../images/tony.webp';
import MrTony from '../images/mr-tony.webp';
import Sabastian from '../images/sabastian.webp';
import Brian from '../images/brian.png'

export default function Staff() {

    const onClickTony = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/669506#ba_s=bd_1');
    const onClickMrTony = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/669505#ba_s=bd_1');
    const onClickSebastian = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/746316#ba_s=bd_1');
    const onClickBrian = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/966764#ba_s=bd_1');

    return (
        <div className="staff">
            <div className="person">
                <a href={onClickTony} className="container">
                    <Image
                        className="circle"
                        src={Tony}
                        width={540}
                        height={540}
                        alt='Barber 1'
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </a>
                <div className="divider"></div>
                <div className="name">Tony</div>
                <div className="title">Friday - Monday</div>
            </div>
            <div className="person">
                <a href={onClickMrTony} className="container">
                    <Image
                        className="circle"
                        src={MrTony}
                        alt='Barber 2'
                        width={360}
                        height={360}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </a>
                <div className="divider"></div>
                <div className="name">Mr. Tony</div>
                <div className="title">Thursday - Saturday</div>
            </div>
            <div className="person">
                <a href={onClickSebastian} className="container">
                    <Image
                        className="circle"
                        src={Sabastian}
                        alt='Barber 3'
                        width={540}
                        height={540}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </a>
                <div className="divider"></div>
                <div className="name">Sabastian</div>
                <div className="title">Sunday - Wednesday</div>
            </div>
            <div className="person">
                <a href={onClickBrian} className="container">
                    <Image
                        className="circle"
                        src={Brian}
                        alt='Barber 4'
                        width={360}
                        height={360}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </a>
                <div className="divider"></div>
                <div className="name">Brian</div>
                <div className="title">Tuesday - Friday</div>
            </div>
        </div>
    )
}
