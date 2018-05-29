
class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            Visibility : false
        }
    }
    handleToogleVisibility(){
     this.setState ((prevState) =>{
        return{
            Visibility : !prevState.Visibility
        }
     });
    }
    render(){
        return (
                <div>
                <h1>Visibility Toogle</h1>
                <VisibilityInputDetails/>
                <button type='button' onClick={this.handleToogleVisibility}>
                    {this.state.Visibility ? 'Hide details' : 'Show details'}
                </button>
                <p>{this.state.Visibility && 'This is a message for you'}</p> 
                </div>
        );
    }
}

class VisibilityInputDetails extends React.Component{
    render(){
        return(
            <div>
                <input type='text'/>
            </div>
        );
    }
} 

ReactDOM.render(<Visibility/>, document.getElementById('index'));

// console.log('Show Details is running');

// let Visibility;

// const handleShow = () => {
//     Visibility = !Visibility;
//     render();
// };
// const appRoot = document.getElementById('index');

// const render = () =>{
    // const app = (
    //     <div>
    //     <h1>Visibility Toogle</h1>
    //     <button type='button' onClick={handleShow}>
    //         {Visibility ? 'Hide details' : 'Show details'}
    //     </button>
    //     <p>{Visibility && 'This is a message for you'}</p> 
    //     </div>
    // );
// ReactDOM.render(app, appRoot);    
// };
// render();
 
