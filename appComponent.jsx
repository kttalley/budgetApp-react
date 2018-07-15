var dataSet = [
    {amount: -10, description: 'BK'},
    {amount: 1000, description: 'payDay'},
    {amount: -4.50, description: 'starbucks'}  
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.data = dataSet;
        this.state.total = 0;
    }
    componentWillMount() {
        this.setState({
            data: dataSet,
            total: dataSet.reduce( (a, b) => {
                return a + b.amount;
            }, 0)
        });
    };

    add (description, amount) {
        //ajax POST request to server
    }

    render() {
        return (
            <div>
                <h1>My Budget</h1>
                <Add onAdd = {this.add} />
                <TransactionList transactions = {this.state.data} />
                <Balance total = {this.state.total} />
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);