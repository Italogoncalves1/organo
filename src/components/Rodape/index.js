import './index.css'

import IconFB from '../../assets/fb.png'
import IconTW from '../../assets/tw.png'
import IconIG from '../../assets/ig.png'
import Logo from '../../assets/logo.png'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={IconFB} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={IconTW} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={IconIG} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={Logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Italo Gonçalves.
            </p>
        </section>
    </footer>)
}

export default Rodape