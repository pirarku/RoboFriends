import React, { Component }from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import Search from '../components/Search';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(User => setTimeout(
            time => this.setState({ robots:User }),2000))
    }

    searchHandler = (e) => {
        this.setState({searchfield: e.target.value});
    }

    render() {
        const { robots, searchfield} = this.state;
        const filSearch = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield);
        })

        return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Search onSearch={this.searchHandler}/>
                    { 
                        !robots.length ? 
                        <h1 className='tc'>loading please wait....</h1>:
                        (<Scroll>
                            <CardList robots={filSearch} />
                        </Scroll>)
                    }   
                </div>
             )
 }
}

export default App;