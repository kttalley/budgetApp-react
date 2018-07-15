const Balance = (props) => {
    var style = {
        color: props.total > 0 ? 'green' : 'red' 
    };

    return (
        <div>
            <h1>Balance</h1>
            <p style = {style}>${ props.total.toFixed(2) }</p>
        </div>
    )
};

ReactDOM.render(
    <Balance total = {40}/>,
    document.getElementById('balance')
);