import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <header className="header-left-box">    
                <div class="svg-livrinho"> <img src="/assets/images/book.svg" alt=""/> </div>
                <div class="title"> <span>Dev</span>School</div>
            </header>

            <div class="black-space"></div>
            <div class="management">
                <div> Gerenciamento </div>
                <img src="/assets/images/setinha pra baixo.svg" alt=""/>
            </div>

            <div class="espaco-alunos">
                <div> Alunos </div>
            </div>
        </Container>
    )
}