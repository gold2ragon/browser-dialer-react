const phones = [
  'YOUR_TWILIO_NUMBER_1',
  'YOUR_TWILIO_NUMBER_2',
]
var StatusToggle = React.createClass({
  render: function() {
    self = this;
    return (
      <div className="btn-status">
        <button className={self.props.status} onClick={this.props.toggleStatus}>
          <div className="available"></div>
          <div>{self.props.status}</div>
        </button>
      </div>
    );
  }
});
var SelectPhoneList = React.createClass({
  getInitialState() {
    return {
      selectedPhone: phones[0]
    }
  },
  handleOnChangePhoneOption(phone) {
    this.setState({selectedPhone: phone})
  },
  render: function() {
    self = this;
    var phoneLists = phones.map(function(phone) {
      return (
        <li>
          <a href="#" onClick={() => self.handleOnChangePhoneOption(phone)}>
            <span> {phone} </span>
          </a>
        </li>
      );
    });
    return (
      <div className="phonenumber-list">
        <span>
          <svg className="svg-phone" width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" fill="none" fill-rule="evenodd">
              <g transform="translate(-11.000000, -12.000000)" fill="#C0C0C0">
                <g>
                  <g transform="translate(11.000000, 12.000000)">
                    <path d="M7.9113186,5.54495189 C7.71455835,5.74171214 7.40357103,5.74973621 7.1979098,5.54407498 C7.00066524,5.34683043 6.99579862,5.03190044 7.19703289,4.83066618 L10.0550527,1.97264641 L8.06096496,1.97264641 C7.78155731,1.97264641 7.55505265,1.74542397 7.55505265,1.47457195 L7.55505265,1.3992923 C7.55505265,1.12421337 7.78547127,0.90121784 8.04667858,0.90121784 L11.349141,0.90121784 C11.6206585,0.90121784 11.8407669,1.13163645 11.8407669,1.39284376 L11.8407669,4.6953062 C11.8407669,4.9668237 11.6135445,5.18693213 11.3426925,5.18693213 L11.2674128,5.18693213 C10.9923339,5.18693213 10.7693384,4.95621923 10.7693384,4.68101982 L10.7693384,2.68693213 L7.9113186,5.54495189 Z M0.0213710966,2.05833333 C-0.195300504,3.84583333 1.24556564,6.5 3.88895918,9.1325 C5.05898582,10.2916667 8.03822034,13 10.5624445,13 C11.6024682,13 12.4041531,12.5233333 13,11.5483333 C12.8916642,10.8766667 9.87992894,8.34166667 9.16491266,8.33083333 C8.88323958,8.43916667 8.7099023,8.63416667 8.51489786,8.85083333 C8.28739268,9.12166667 8.01655318,9.425 7.56154281,9.5875 C7.49654133,9.60916667 7.40987269,9.62 7.32320405,9.62 C6.41318333,9.62 4.6906441,7.98416667 3.88895918,6.86833333 C3.45561597,6.24 3.29311227,5.77416667 3.41228165,5.4275 C3.57478535,4.98333333 3.86729202,4.7125 4.13813152,4.485 C4.3656367,4.29 4.56064114,4.11666667 4.66897694,3.835 C4.66897694,3.58583333 4.11646436,2.6 3.07644067,1.41916667 C2.20975427,0.444166667 1.63557452,0.0433333333 1.44057008,0 C0.595550839,0.52 0.129706897,1.2025 0.0213710966,2.05833333 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">{this.state.selectedPhone}
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            {phoneLists}
          </ul>
        </div>
        <span onClick={this.props.handleToggleKeypad}><i className="fa fa-th"></i></span>
      </div>
    );
  }
});
var NumberInputText = React.createClass({
  render: function() {
    return (
      <div className="input-group input-group-sm">
        <input type="tel" className="form-control" placeholder="555-666-7777"
            value={this.props.currentNumber} onChange={this.props.handleOnChange}/>
      </div>
    );
  }
});

var CountrySelectBox = React.createClass({
  render: function() {
    var self = this;

    var CountryOptions = self.props.countries.map(function(country) {
      var flagClass = 'flag flag-' + country.code;

      return (
        <li>
          <a href="#" onClick={() => self.props.handleOnChange(country.cc)}>
            <div className={ flagClass }></div>
            <span> { country.name } (+{ country.cc })</span>
          </a>
        </li>
      );
    });

    return (
      <div className="input-group-btn">
        <button type="button" className="btn btn-default dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            +<span className="country-code">{self.props.countryCode}</span>
            <i className="fa fa-caret-down"></i>
        </button>
        <ul className="dropdown-menu">
          {CountryOptions}
        </ul>
      </div>
    );
  }
});

var LogBox = React.createClass({
  render: function() {
    return (
      <div>
        <div className="log">{this.props.text}</div>
        <p>{this.props.smallText}</p>
      </div>
    );
  }
});

var CallButton = React.createClass({
  render: function() {
    return (
      <button className={'btn btn-call btn-success ' + (this.props.onPhone ? 'btn-danger': 'btn-success')}
          onClick={this.props.handleOnClick} disabled={this.props.disabled}>
        <i className={'fa fa-fw fa-phone '+ (this.props.onPhone ? 'fa-close': 'fa-phone')}></i>
      </button>
    );
  }
});

var MuteButton = React.createClass({
  render: function() {
    return (
      <button className="btn btn-circle btn-default btn-mic" onClick={this.props.handleOnClick}>
        <i className={'fa fa-fw fa-microphone ' + (this.props.muted ? 'fa-microphone-slash': 'fa-microphone')}></i>
      </button>
    );
  }
});

var DTMFTone = React.createClass({
  // Handle numeric buttons
  sendDigit(digit) {
    this.props.handleOnClick(digit);
    // Twilio.Device.activeConnection().sendDigits(digit);
  },

  render: function() {
    return (
      <div className="keys">
        <div className="key-row">
          <button className="btn" onClick={() => this.sendDigit('1')}>1
            <span>&nbsp;</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('2')}>2
            <span>A B C</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('3')}>3
            <span>D E F</span>
          </button>
        </div>
        <div className="key-row">
          <button className="btn" onClick={() => this.sendDigit('4')}>4
            <span>G H I</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('5')}>5
            <span>J K L</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('6')}>6
            <span>M N O</span>
          </button>
        </div>
        <div className="key-row">
          <button className="btn" onClick={() => this.sendDigit('7')}>7
            <span>P Q R S</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('8')}>8
            <span>T U V</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('9')}>9
            <span>W X Y Z</span>
          </button>
        </div>
        <div className="key-row">
          <button className="btn" onClick={() => this.sendDigit('*')}>*
            <span>&nbsp;</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('0')}>0
            <span>&nbsp;</span>
          </button>
          <button className="btn" onClick={() => this.sendDigit('#')}>#
            <span>&nbsp;</span>
          </button>
        </div>
      </div>
    );
  }
});
var MessageBox = React.createClass({
  getInitialState() {
    return {
      message: ''
    }
  },
  render: function() {
    return (
      <div>
        <textarea className="form-control" onChange={this.props.updateMessage}/>
        <button className="btn btn-success btn-send" disabled={this.props.disabled} onClick={this.props.sendMessage}>Send</button>
      </div>
    );
  }
});
var IncomingInfo = React.createClass({
  getInitialState() {
    return {
      seconds: 0
    }
  },
  render: function() {
    return (
      <div className="subpad text-center incoming-box">
        <p className="incoming">Incoming call</p>
        <p className="seconds">{this.state.seconds}</p>
        <p className="caller"><b>Caller: {this.props.phone_number}</b></p>
        <p className="location">{this.props.location}</p>
        <div>
          <button className="btn btn-decline" onClick={this.props.onDecline}>Decline</button>
          <button className="btn btn-accept" onClick={this.props.onAccept}>Accept</button>
        </div>
      </div>
    );
  }
});

var DialerApp = React.createClass({
  getInitialState() {
    return {
      muted: false,
      log: 'Connecting...',
      toggleKeypad: true,
      togglePad: false,
      onPhone: false,
      countryCode: '1',
      currentNumber: '',
      isValidNumber: false,
      countries: [
        { name: 'United States', cc: '1', code: 'us' },
        { name: 'Great Britain', cc: '44', code: 'gb' },
        { name: 'Colombia', cc: '57', code: 'co' },
        { name: 'Ecuador', cc: '593', code: 'ec' },
        { name: 'Estonia', cc: '372', code: 'ee' },
        { name: 'Germany', cc: '49', code: 'de' },
        { name: 'Hong Kong', cc: '852', code: 'hk' },
        { name: 'Ireland', cc: '353', code: 'ie' },
        { name: 'Singapore', cc: '65', code: 'sg' },
        { name: 'Spain', cc: '34', code: 'es' },
        { name: 'Brazil', cc: '55', code: 'br' },
        { name: 'Russia', cc: '7', code: 'ru' },
      ],
      selectedPhone: phones[0],
      status: 'Online',
      message: '',
      calling: false,
      connection: null,
    }
  },

  // Initialize after component creation
  componentDidMount() {
    var self = this;

    // Fetch Twilio capability token from our Node.js server
    $.getJSON('/token').done(function(data) {
      Twilio.Device.setup(data.token);
    }).fail(function(err) {
      console.log(err);
      self.setState({log: 'Could not fetch token, see console.log'});
    });

    // Configure event handlers for Twilio Device
    Twilio.Device.disconnect(function() {
      self.setState({
        onPhone: false,
        log: 'Call ended.'
      });
    });

    Twilio.Device.ready(function() {
      self.log = 'Connected';
    });
    
    Twilio.Device.incoming(function(conn) {
      console.log(conn);
      console.log('Incoming connection from ' + conn.parameters.From);
      console.log(self.state.status);
      if (self.state.status == 'Busy') {
        conn.status('closed');
        console.log('busy');
      }
      self.setState({ calling: true, togglePad: true, connection: conn })
    });
  },

  // Handle country code selection
  handleChangeCountryCode(countryCode) {
    this.setState({countryCode: countryCode});
  },

  // Handle number input
  handleChangeNumber(e) {
    this.setState({
      currentNumber: e.target.value,
      isValidNumber: /^([0-9]|#|\*)+$/.test(e.target.value.replace(/[-()\s]/g,''))
    });
  },

  // Handle muting
  handleToggleMute() {
    var muted = !this.state.muted;
    this.setState({muted: muted});
    Twilio.Device.activeConnection().mute(muted);
  },

  // Make an outbound call with the current number,
  // or hang up the current call
  handleToggleCall() {
    if (!this.state.onPhone) {
      this.setState({
        muted: false,
        onPhone: true
      })
      // make outbound call with current number
      var n = '+' + this.state.countryCode + this.state.currentNumber.replace(/\D/g, '');
      Twilio.Device.connect({ number: n });
      this.setState({log: 'Calling ' + n})
    } else {
      // hang up call in progress
      Twilio.Device.disconnectAll();
    }
  },
  handleToggleKeypad () {
    console.log('handdleToggleKeypad');
    this.setState({ toggleKeypad: !this.state.toggleKeypad })
  },
  handleTogglePad() {
    this.setState({ togglePad: !this.state.togglePad })
  },
  updatePhoneNumber(digit) {
    let currentNumber = this.state.currentNumber + digit;
    console.log(currentNumber);
    this.setState({
      currentNumber: currentNumber,
      isValidNumber: /^([0-9]|#|\*)+$/.test(currentNumber.replace(/[-()\s]/g,''))
    })
  },
  toggleStatus() {
    if(this.state.status == "Online") {
      this.setState({status: "Busy"})
    }
    else {
      this.setState({status: "Online"})
    }
    console.log(this.state.status);
  },
  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  },
  sendMessage() {
    let to = '+' + this.state.countryCode + this.state.currentNumber.replace(/\D/g, '');
    let msg = this.state.message;
    fetch('/sms',{
      method: 'POST',
      body: JSON.stringify({
        to: to,
        body: msg
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function(response){
      return response.json()
    }).then(function(response){
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
  },
  onAccept() {
    this.state.connection.accept();
  },
  onDecline() {
    this.state.connection.reject();
    this.setState({calling: false});
  },
  render: function() {
    var self = this;
    return (
      <div id="dialer">
        {/* phone icon button */}
        <div className="phone-icon-div">
          <button className="dial-button" onClick={ this.handleTogglePad }>
            <svg width="20px" height="20px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" fill="none" fill-rule="evenodd">
                <path d="M0.589270933,2.57109947 C0.355932286,4.49609947 1.90763429,7.35443281 4.75436579,10.1894328 C6.01439448,11.4377661 9.22280088,14.3544328 11.9411961,14.3544328 C13.0612216,14.3544328 13.9245746,13.8410995 14.5662559,12.7910995 C14.4495866,12.0677661 11.2061794,9.33776614 10.4361618,9.32609947 C10.1328216,9.44276614 9.94615069,9.65276614 9.73614591,9.88609947 C9.49114033,10.1777661 9.19946702,10.5044328 8.70945586,10.6794328 C8.63945427,10.7027661 8.54611881,10.7144328 8.45278335,10.7144328 C7.47276103,10.7144328 5.61771878,8.95276614 4.75436579,7.75109947 C4.28768849,7.07443281 4.11268451,6.57276614 4.24102076,6.19943281 C4.41602475,5.72109947 4.73103192,5.42943281 5.02270523,5.18443281 C5.26771081,4.97443281 5.47771559,4.78776614 5.59438492,4.48443281 C5.59438492,4.21609947 4.99937137,3.15443281 3.87934586,1.88276614 C2.94599127,0.83276614 2.32764386,0.401099473 2.11763907,0.354432806 C1.20761835,0.914432806 0.705940257,1.64943281 0.589270933,2.57109947 L0.589270933,2.57109947 Z M9.56625591,2.10443281 C9.56625591,1.69021924 9.90729366,1.35443281 10.3186253,1.35443281 L12.8138865,1.35443281 C13.2294087,1.35443281 13.5662559,1.68733142 13.5662559,2.10443281 C13.5662559,2.51864637 13.2252182,2.85443281 12.8138865,2.85443281 L10.3186253,2.85443281 C9.90310316,2.85443281 9.56625591,2.52153419 9.56625591,2.10443281 L9.56625591,2.10443281 Z M9.56625591,5.10443281 C9.56625591,4.69021924 9.90729366,4.35443281 10.3186253,4.35443281 L12.8138865,4.35443281 C13.2294087,4.35443281 13.5662559,4.68733142 13.5662559,5.10443281 C13.5662559,5.51864637 13.2252182,5.85443281 12.8138865,5.85443281 L10.3186253,5.85443281 C9.90310316,5.85443281 9.56625591,5.52153419 9.56625591,5.10443281 L9.56625591,5.10443281 Z" fill="currentColor"></path>
              </g>
            </svg>
          </button>
        </div>        

        { this.state.togglePad 
          ? <div className="mainpad">
            <StatusToggle status={this.state.status} toggleStatus={this.toggleStatus} />
            <SelectPhoneList handleToggleKeypad={ this.handleToggleKeypad }/>
            <div id="dial-form" className="input-group input-group-sm">
              <CountrySelectBox countries={this.state.countries} countryCode={this.state.countryCode}
                  handleOnChange={this.handleChangeCountryCode}/>
              <NumberInputText currentNumber={this.state.currentNumber} handleOnChange={this.handleChangeNumber} />
            </div>
            {
              this.state.calling 
                ? <IncomingInfo phone_number={this.state.connection.parameters.From} location="USA" onAccept={this.onAccept} onDecline={this.onDecline}/> 
                : this.state.toggleKeypad ?
                  <div className="subPad">
                    <DTMFTone handleOnClick={this.updatePhoneNumber}/>
                    <div className="controls">
                      <CallButton handleOnClick={this.handleToggleCall} disabled={!this.state.isValidNumber} onPhone={this.state.onPhone}/>
                      { this.state.onPhone ? <MuteButton handleOnClick={this.handleToggleMute} muted={this.state.muted} /> : null }
                    </div>
                  </div>: 
                  <MessageBox disabled={!this.state.isValidNumber}
                              updateMessage={this.updateMessage}
                              sendMessage={this.sendMessage}/>
            }                       
          </div> 
          : null 
        }
        

      </div>
    );
  }
});

ReactDOM.render(
  <DialerApp/>,
  document.getElementById('dialer-app')
);