import imgBanner from '../../img/banner.png';
import '../Banner/Banner.css'

export const Banner = () => {
    return(
        <header className='banner'>
            <img src={imgBanner} alt='Imagem do banner'/>
        </header>
    );
}