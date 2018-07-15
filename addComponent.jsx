
//Add component is stateful because
//it must declare the description and amount
//upon user input.

//Passing down the add function from the parent component app to add
//because the parent component will have access to the entire
//transactions data set and will take care of updating it from there.
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'Description',
            amount: 'Amount'
        }
        this.add = this.add.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeAmt = this.handleChangeAmt.bind(this);
    }

    handleChangeDesc(e) {
        this.setState({
          description: e.target.value
        });
    }

    handleChangeAmt(e) {
        this.setState({
            amount: e.target.value
        });
    }

    add() {
        this.props.onAdd(
            this.state.description,
            this.state.amount
        )
    }

    render() {
        return (
            <div>
                <input type = "text" value = {this.state.description} onChange = {this.handleChangeDesc}/>
                <input type = "text" value = {this.state.amount} onChange = {this.handleChangeAmt}/>
                <button onClick = {this.add}> Add </button>
            </div>
        )
    }
}