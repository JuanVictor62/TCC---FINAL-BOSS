import './index.scss'
import './../../commom/index.scss'

export default function index(){

    return(
        <main>
            <section className="f1-landingpage">
                <div className='f1-cabecalho'>

                    <div className='f1-cab1'>
                        <p className='f1-cab1-dc1'>Lista de Desejos</p>
                        <img className='f1-cab1-img1' src="./../../assets/imgs/sacola-listadedesejos.png" alt='' />
                        <img className='f1-cab1-img2' src="./../../assets/imgs/carrinho.png" alt='' />
                    </div>

                    <div className='f1-cab2'>
                            <img className='f1-cab2-img' src='./../../assets/imgs/logomodellepng.png' alt=''/>
                            <hr/>

                                <div className='f1-cab2-1'>
                                    <p>Novidades</p>
                                    <p>Mulher</p>
                                    <p>Homem</p>
                                    <p>Mundo Modelle</p>
                                </div>
                    </div>

                    <div className='f1-cab3'>
                        <p>Login</p>
                    </div>
                </div>

                <div className='f1-desc1'>
                    <h1 className='f1-desc1-dc1'>Nova</h1>
                    <div className='f1-desc1-1'>
                        <h1 className='f1-desc1-dc1'>Coleção de Inverno</h1>
                        <img className='f1-desc1-img1' src='./../../assets/imgs/neve.png' alt=''/>
                    </div>
                </div>

            </section>
        </main>
    )

}