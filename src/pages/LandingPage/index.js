import './index.scss'
import './../../commom/index.scss'

export default function index(){

    return(
        <main>
            <section className="f1">
                <div className='f1-cabecalho'>

                    <div className='f1-cab1'>
                        <p className='f1-cab1-dc1'>Lista de Desejos</p>
                        <img className='f1-cab1-img1' src="./../../assets/imgs/sacola (1).svg" alt='' />
                    </div>

                    <div className='f1-cab2'>
                            <div className='f1-cab2-0-5'>
                            <img className='f1-cab2-img' src='./../../assets/imgs/logomodellepng.png' alt=''/>
                            </div>
                            <hr/>

                                <div className='f1-cab2-1'>
                                    <p className='f1-cab2-1-1'>Novidades</p>
                                    <p className='f1-cab2-1-2'>Mulher</p>
                                    <p className='f1-cab2-1-3'>Homem</p>
                                    <p className='f1-cab2-1-4'>Mundo Modelle</p>
                                </div>
                    </div>


                    <div className='f1-cab3'>
                        <img className='f1-cab1-img2' src="./../../assets/imgs/handbag (1) 1.svg" alt='' />
                        <p className='f1-cab3-login'>Login</p>
                    </div>
                </div>

                <div className='f1-desc1'>
                    <h1 className='f1-desc1-dc1'>Nova</h1>
                    <div className='f1-desc1-1'>
                        <h1 className='f1-desc1-dc1'>Coleção de Inverno</h1>
                        <img className='f1-desc1-img1' src='./../../assets/imgs/Vector.svg' alt=''/>
                    </div>
                </div>

            </section>


            <section className='f2'>
                

                <div className='f2-cab1'> 
                    <p className='f2-cab1-novidades'> Novidades para elas </p>
                    <p className='f2-cab1-colecao'> Nova coleção Modelle Vuitton </p>
                    <div className='f2-cab1-lancamento'> Compre os lançamentos</div>
                    <p className='f2-cab1-data'> * Até 03/23</p>
                </div>

            </section>
        </main>
    )

}