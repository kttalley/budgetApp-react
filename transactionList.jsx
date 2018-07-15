//It will take in an array of objects representing all my transactions and pass it 
//to another component Transaction List Entry, 
//which will render it to the DOM.
var TransactionList = (props) => {
    var txList = props.transactions.map( (transaction, idx) => (
        <TransactionListEntry transaction = {transaction} key = {idx} />
    ))
    return (
        <div>
            <h1>Transactions</h1>
                <div>
                    {txList}
                </div>
        </div>
    )    
};