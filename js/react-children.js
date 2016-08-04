const App=React.createClass({
    render:function(){
    return< ul >
            {
                this.props.children.map((item, index)=> {
                    {console.log(item)}
                    return <li key={index}>{item}</li>
                })
            }
        </ul>

    }
});

ReactDOM.render(<App>
    <span>React child</span>
    <span>hello</span>
    <span>world</span></App>,
    document.getElementById('content'));