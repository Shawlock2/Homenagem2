class Frame{
    constructor(title,text,style, id){

        this.main = document.getElementById('frame-container')
        this.textbox = document.createElement('section')
        this.title = title
        this.text = text
        this.style = style
        this.id = id

    }

    elementos(){

        this.textbox.id = this.id

        const titulo = document.createElement('h1')
        titulo.id = 'title-frank'
        titulo.innerText = this.title
        this.textbox.appendChild(titulo)

        const paragrafo = document.createElement('p')
        paragrafo.innerText = this.text
        this.textbox.appendChild(paragrafo)

        this.main.appendChild(this.textbox)

        const formatacao = document.createElement('link')
        formatacao.rel = 'stylesheet'
        formatacao.href = this.style
        this.main.appendChild(formatacao)


    }

}



function conteudo() {

    let indice  = Math.floor(Math.random() * 4)

    switch (indice) {
        case 0:
            const frankstein = new Frame('Frankstein')
            frankstein.text = '"Frankenstein", escrito por Mary Shelley e publicado em 1818, é um romance gótico que explora temas como ambição desenfreada, solidão, responsabilidade moral e as consequências da busca pelo conhecimento além dos limites.'
            frankstein.style = 'arquivos/estilos/frank.css'
            frankstein.id = 'texto-frank'
            frankstein.elementos()
            break;

        case 1:
            const eminem = new Frame('Eminem')
            eminem.text = ' Eminem é conhecido por suas letras controversas, muitas vezes abordando temas polêmicos como violência, problemas familiares, abuso de substâncias e críticas sociais. Seu estilo único de rap incorpora jogos de palavras complexos, humor ácido e narrativas emocionais.'
            eminem.style = 'arquivos/estilos/eminem.css'
            eminem.id = 'texto-eminem'
            eminem.elementos()
            break;
        case 2:
            const shrek = new Frame('Shrek')
            shrek.text = '"Shrek" é um filme de animação lançado em 2001, dirigido por Andrew Adamson e Vicky Jenson. A história se passa em um mundo de conto de fadas e segue um ogro chamado Shrek, que vive em um pântano isolado e é repentinamente invadido por uma série de personagens de contos de fadas, forçados a se mudar para lá pelo malvado Lorde Farquaad.'
            shrek.style = 'arquivos/estilos/shrek.css'
            shrek.id = 'texto-shrek'
            shrek.elementos()

            let audio = document.getElementById("audio-shrek")

            let musica = document.createElement('audio')
            musica.loop = true
            // musica.controls = true
            musica.id = 'control-player'
            musica.preload = 'auto'
            musica.id = 'audio-tocado'

            let endereco = document.createElement('source')
            endereco.src = 'arquivos/audios/shrek.m4a'
            endereco.type = 'audio/mp4'

            let button = document.createElement('button')
            button.id = 'player'
            button.textContent = '🦗'

            musica.appendChild(endereco)
            audio.appendChild(musica)
            audio.appendChild(button)

            break;

        case 3:
            const breaking = new Frame('Breaking Bad')
            breaking.text = '"Breaking Bad" é uma aclamada série de televisão americana criada por Vince Gilligan, que foi ao ar entre 2008 e 2013. A história segue a jornada de Walter White, um professor de química do ensino médio que se transforma em um produtor e traficante de metanfetamina após ser diagnosticado com câncer terminal.'
            breaking.style = 'arquivos/estilos/breaking.css'
            breaking.id = 'text-bad'
            breaking.elementos()
            break;
        default:
            break;
    }

    document.getElementById("frame-container").classList.add("aparecer")

    const audioPlayer = document.getElementById('audio-tocado');
    const playButton = document.getElementById('player');

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = '🐸';
        } else {
            audioPlayer.pause();
            playButton.textContent = '🦗';
        }
    });

 }

function exibir(){
    let acordion = document.getElementById("filme-crepusculo")

    if(acordion.style.display === 'none'){
        acordion.style.display = 'block'
        acordion.style.margin = 'auto'
    }
    else{
        acordion.style.display = 'none'
    }
}

function velozes(){
    let url = 'https://www.youtube.com/watch?v=lURZze_EB5E&ab_channel=noceutempao'
    window.open(url, '_blank')
}

function exibir(){
    let acordion = document.getElementById("filme-crepusculo")

    if(acordion.style.display === 'none'){
        acordion.style.display = 'block'
        acordion.style.margin = 'auto'
    }
    else{
        acordion.style.display = 'none'
    }
}

function exibirshrek(){
    let acordion = document.getElementById("filme-shrek")

    if(acordion.style.display === 'none'){
        acordion.style.display = 'block'
        acordion.style.margin = 'auto'
    }
    else{
        acordion.style.display = 'none'
    }
}