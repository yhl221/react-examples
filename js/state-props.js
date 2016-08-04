const App=React.createClass({
    getInitialState:function(){
       return {
           name:'YHL',
           password:'123456'
       }
    },

    editPassWord:function(){
      this.setState({password:111111})
    },

    render:function(){
        return <div>
            <User name={this.state.name}/>
            <Password password={this.state.password} onEdit={this.editPassWord}/>
        </div>;
    }
});

const User=React.createClass({
    render:function(){
    return <div>
        <button >{this.props.name}</button>
    </div>
    }
});

const Password=React.createClass({
    render:function(){
    return  <div>
        <button >{this.props.password}</button>
        <button onClick={this.props.onEdit}>Edit</button>
    </div>
    }
});
ReactDOM.render(<App/>,document.getElementById('content'));