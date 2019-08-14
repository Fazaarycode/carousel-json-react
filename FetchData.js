import React, {Component} from 'react'


class FetchData extends Component {
    state = {
        myData : [],
        isLoading: true
    }
    componentDidMount(){
        this.callApi1();
    }
    callApi1 = async() =>{
        const data1= await fetch('https://jsonplaceholder.typicode.com/albums');
        const data1Json = await data1.json();
       
        const mapArray = data1Json.map(async val =>{
        const myVal =   await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${val.id}`);
            return myVal.json();
        })
        const dataToSet = await Promise.all(mapArray);
        this.setState({
            myData: dataToSet
        })

    }
    render(){
        // const {isLoading} = this.state;
        const Print =React.lazy(()=> import ('./Print'))
        return <div>            
                <React.Suspense fallback={<center><h1>Loading...</h1></center>}>
                    <Print state = {this.state.myData}/>
                </React.Suspense>
            
        </div>
    }
}

export default FetchData;