import React from 'react';
//import logo from './logo.svg';
import speaker from './speaker.svg';
import './App.css';

// const reqImgs = require.context ('./sprites')
// const paths = reqImgs.keys();
// const imgs = paths.map( path => reqImgs(path));

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(getCookie("record"));
        let record = getCookie("record");
        if (record == null) {
            record = 0;
        }
        this.state = {
            playing: false,
            record: record
        };
        this.checkRecord = this.checkRecord.bind(this);
        this.setPlay = this.setPlay.bind(this);
        this.setNoPlay = this.setNoPlay.bind(this);
    }

    setPlay() {
        this.setState({playing: true});
    }

    setNoPlay() {
        this.setState({playing: false});
    }

    checkRecord(score) {
        if (score > this.state.record) {
            this.setState({record: score});
            document.cookie = "record=" + score;
        }
    }

    render() {
        let comp;
        if (!this.state.playing)
            comp = <Intro record={this.state.record} setPlay={this.setPlay} />;
        else
            comp = <Play checkRecord={this.checkRecord} setNoPlay={this.setNoPlay} />;
        return (
            <div className="App">
                <h1>Pokemon Cries Challenge</h1>
                <div id="View">
                    {comp}
                </div>
            </div>
        );
    }
}

class Intro extends React.Component {
    render() {
        return(
            <div id="menu">
                <p>Your record is {this.props.record}.</p>
                <button onClick={this.props.setPlay}>Start!</button>
            </div>
        )
    }
}

class Play extends React.Component {
    constructor(props) {
        super(props);

        let choices = [];
        while (choices.length < 3) {
            let num = Math.floor(Math.random() * 151) + 1;
            if (!choices.includes(num)) {
                choices.push(num);
            }
        }
        this.state = {
            score: 0,
            choices: choices.slice(),
            answer: choices[Math.floor(Math.random() * 3)],
            gameOver: false
        };
        //this.generateChoices = this.generateChoices.bind(this);
        //this.checkAnswer = this.checkAnswer.bind(this);
        this.restart = this.restart.bind(this);
    }

    generateChoices = () => {
        let choices = [];
        while (choices.length < 3) {
            let num = Math.floor(Math.random() * 151) + 1;
            if (!choices.includes(num)) {
                choices.push(num);
            }
        }
        this.setState({
            choices: choices.slice(),
            answer: choices[Math.floor(Math.random() * 3)]
        });
        //console.log(this.state.choices);
    }

    checkAnswer = (e) => {
        if (parseInt(e.target.id) === this.state.answer) {
            this.generateChoices();
            this.setState({score: this.state.score + 1});
        } else {
            this.setState({gameOver: true});
        }
    }

    createImages = () => {
        return this.state.choices.map(function(val, index) {
            let img_path = process.env.PUBLIC_URL + "/sprites/" + val + ".png";
            return <img id={val} className="choices" key={index} src={img_path} alt="random pokemon" onClick={this.checkAnswer} />
        }.bind(this));
    }

    playAudio() {
        document.getElementById("cry").play();
    }

    restart() {
        this.generateChoices();
        this.setState({
            gameOver: false,
            score: 0
        });
    }

    render() {
        console.log('Play Rendered')
        let wav_path = process.env.PUBLIC_URL + "/cries/" + this.state.answer + ".wav";
        if (!this.state.gameOver) {
            return(
                <div className="play">
                    <audio id="cry" src={wav_path}></audio>
                    <div id="speaker">
                        <img src={speaker} alt="answer" onClick={this.playAudio} />
                    </div>
                    <div id="choices">
                        { this.createImages() }
                    </div>
                    <div>
                        <p id="score">{this.state.score}</p>
                    </div>
                    <button onClick={this.props.setNoPlay}>Quit</button>
                </div>
            );
        } else {
            return <Result score={this.state.score} checkRecord={this.props.checkRecord} restart={this.restart} />
        }
    }
}

class Result extends React.Component {
    render() {
        this.props.checkRecord(this.props.score);
        return (
            <div>
                <div>
                    <h2>Game Over!</h2>
                    <p>You got {this.props.score} points.</p>
                </div>
                <div>
                    <button onClick={this.props.restart}>Restart</button>
                </div>
            </div>
        );
    }
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

export default App;
