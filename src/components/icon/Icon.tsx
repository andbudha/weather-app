import img1 from '../../imgs/icons/1.svg';
import img2 from '../../imgs/icons/2.svg';
import img3 from '../../imgs/icons/3.svg';
import img4 from '../../imgs/icons/4.svg';
import img5 from '../../imgs/icons/5.svg';
import img6 from '../../imgs/icons/6.svg';
import img7 from '../../imgs/icons/7.svg';
import img8 from '../../imgs/icons/8.svg';
import img11 from '../../imgs/icons/11.svg';
import img12 from '../../imgs/icons/12.svg';
import img13 from '../../imgs/icons/13.svg';
import img14 from '../../imgs/icons/14.svg';
import img15 from '../../imgs/icons/15.svg';
import img16 from '../../imgs/icons/16.svg';
import img17 from '../../imgs/icons/17.svg';
import img18 from '../../imgs/icons/18.svg';
import img19 from '../../imgs/icons/19.svg';
import img20 from '../../imgs/icons/20.svg';
import img21 from '../../imgs/icons/21.svg';
import img22 from '../../imgs/icons/22.svg';
import img23 from '../../imgs/icons/23.svg';
import img24 from '../../imgs/icons/24.svg';
import img25 from '../../imgs/icons/25.svg';
import img26 from '../../imgs/icons/26.svg';
import img29 from '../../imgs/icons/29.svg';
import img30 from '../../imgs/icons/30.svg';
import img31 from '../../imgs/icons/31.svg';
import img32 from '../../imgs/icons/32.svg';
import img33 from '../../imgs/icons/33.svg';
import img34 from '../../imgs/icons/34.svg';
import img35 from '../../imgs/icons/35.svg';
import img36 from '../../imgs/icons/36.svg';
import img37 from '../../imgs/icons/37.svg';
import img38 from '../../imgs/icons/38.svg';
import img39 from '../../imgs/icons/39.svg';
import img40 from '../../imgs/icons/40.svg';
import img41 from '../../imgs/icons/41.svg';
import img42 from '../../imgs/icons/42.svg';
import img43 from '../../imgs/icons/43.svg';
import img44 from '../../imgs/icons/44.svg';

type IconPropsType = {
    iconID: number | null
}

export const Icon = (props: IconPropsType) => {
    const icons = [
        { id: 1, icon: img1 },
        { id: 2, icon: img2 },
        { id: 3, icon: img3 },
        { id: 4, icon: img4 },
        { id: 5, icon: img5 },
        { id: 6, icon: img6 },
        { id: 7, icon: img7 },
        { id: 8, icon: img8 },
        { id: 11, icon: img11 },
        { id: 12, icon: img12 },
        { id: 13, icon: img13 },
        { id: 14, icon: img14 },
        { id: 15, icon: img15 },
        { id: 16, icon: img16 },
        { id: 17, icon: img17 },
        { id: 18, icon: img18 },
        { id: 19, icon: img19 },
        { id: 20, icon: img20 },
        { id: 21, icon: img21 },
        { id: 22, icon: img22 },
        { id: 23, icon: img23 },
        { id: 24, icon: img24 },
        { id: 25, icon: img25 },
        { id: 26, icon: img26 },
        { id: 29, icon: img29 },
        { id: 30, icon: img30 },
        { id: 31, icon: img31 },
        { id: 32, icon: img32 },
        { id: 33, icon: img33 },
        { id: 34, icon: img34 },
        { id: 35, icon: img35 },
        { id: 36, icon: img36 },
        { id: 37, icon: img37 },
        { id: 38, icon: img38 },
        { id: 39, icon: img39 },
        { id: 40, icon: img40 },
        { id: 41, icon: img41 },
        { id: 42, icon: img42 },
        { id: 43, icon: img43 },
        { id: 44, icon: img44 }
    ];

    //finding the right icon according to the received icon id
    const icon = icons.find(icon => icon.id === props.iconID);
    const weatherImg = icon?.icon;

    return (
        <div>
            <img src={weatherImg} alt={'weather icon'} />
        </div>
    );
}