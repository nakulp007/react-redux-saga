import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData } from './actions';

class Home extends React.Component{
    
    componentDidMount() {
        this.props.requestApiData();
    }

    person = (x,i) => (
        <div key={x.id.value}>
            <h1>{x.gender}</h1>
            <h1>{x.name.first}</h1>
            <h1>{x.name.last}</h1>
            <img src={x.picture.medium} alt={""} />
        </div>
    )

    render() {
        //give default value
        //because when it first renders results will be null 
        //and map of null will throw error
        const { results = [] } = this.props.data;
        return (
            <h1>
                {results.map(this.person)}
            </h1>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);