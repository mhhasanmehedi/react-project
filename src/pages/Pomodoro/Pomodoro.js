import React, { Component } from 'react';
import './Pomodoro.css';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      sessionMinutes: 25,
      sessionSeconds: '00',
      timerIsOn: false,
      pause: false,
      session: 'Sesson',
    };
  }
  render() {
    return (
      <div id='container'>
        <div id='clock'>
          <div id='title'>
            <h4>POMODORO CLOCK</h4>
          </div>
          <div id='buttons'>
            <div id='break-label'>
              BREAK LENGTH
              <div id='break'>
                <div id='break-decrement' className='material-icons'>
                  remove_circle
                </div>
                <div id='break-length'>5</div>
                <div id='break-increment' className='material-icons'>
                  add_circle
                </div>
              </div>
            </div>
            <div id='session-label'>
              SESSION LENGTH
              <div id='session'>
                <div id='session-decrement' className='material-icons'>
                  remove_circle
                </div>
                <div id='session-length'>25</div>
                <div id='session-increment' className='material-icons'>
                  add_circle
                </div>
              </div>
            </div>
          </div>
          <div id='timer-label'>
            <h3>{this.state.session}</h3>
            <div id='time-left'>
              <audio
                id='beep'
                src='https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3'
                type='audio/mp3'
              ></audio>
            </div>
            <div id='button-timer'>
              <div id='start_stop' className='material-icons'>
                play_circle_filled
              </div>
              <div id='reset' className='material-icons'>
                replay
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pomodoro;
