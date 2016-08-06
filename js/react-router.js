const App=React.createClass({
    render:function(){
    return <div>
        <ReactRouter.Link to="/Left">Left</ReactRouter.Link>
        <ReactRouter.Link to="/Right">Right</ReactRouter.Link>
    </div>
    }
});

const Left=React.createClass({
    render:function(){
    return <div>
        <ReactRouter.Link to="/">Left</ReactRouter.Link>
        <input type="text" value="Good luck! YOu switch left success!"/>
    </div>
    }
});


const Right=React.createClass({
    render:function(){
    return <div>
        <ReactRouter.Link to="/right">Right</ReactRouter.Link>
        <input type="text" value="Good luck! YOu switch right success!"/>
    </div>
    }
});


ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.Route path="Left" component={Left}/>
            <ReactRouter.Route path="Right" component={Right}/>
            <ReactRouter.IndexRoute component={Left}/>
        </ReactRouter.Route>
    </ReactRouter.Router>, document.getElementById('content'));