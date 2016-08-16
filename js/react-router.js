const App = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/Left">Left</ReactRouter.Link>
            <br/>
            <input type="text" value="left "/>

        </div>
    }
});

const Left = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/Right">Right</ReactRouter.Link>
            <input type="text" />Good luck! YOu switch right success!
        </div>
    }
});



ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.Route path="Left" component={Left}>
        </ReactRouter.Route>
    </ReactRouter.Route>
    </ReactRouter.Router >, document.getElementById('content'));