import React , { Component} from 'react';
import { withRouter,Route,Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import Veg from './VegComponent';
import Nonveg from './NonvegComponent';
import Dessert from './DessertComponent';
import Drink from './DrinkComponent';
import AddRecipe from './AddRecipeComponent';
import Footer from './FooterComponent'
import { fetchComments,postComment, postImage,fetchDishes,fetchVegDishes , fetchNonVegDishes, fetchDessert, fetchDrink} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStoreToProps = state => {
    return {
        dishes : state.dishes,
        comments:state.comments,
        vegs: state.vegs,
        nonvegs : state.nonvegs,
        desserts : state.desserts,
        drinks: state.drinks
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId,name,comments) => dispatch(postComment(dishId,name,comments)),
    postImage: (name,author,image,category,description,preptime,cooktime,totaltime,ingredients,directions) => dispatch(postImage(name,author,image,category,description,preptime,cooktime,totaltime,ingredients,directions)),
    resetInitialAddRecipe : () => dispatch(actions.reset('addRecipe')),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchVegDishes: () => {dispatch(fetchVegDishes())},
    fetchNonVegDishes: () => {dispatch(fetchNonVegDishes())},
    fetchDessert: () => {dispatch(fetchDessert())},
    fetchDrink: () => {dispatch(fetchDrink())}
})


class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchVegDishes()
        this.props.fetchNonVegDishes()
        this.props.fetchDessert()
        this.props.fetchDrink()
    }

    render() { 

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                postComment = {this.props.postComment}
                />
            );
          };

        return(
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => <Home dishes={this.props.dishes} />} />
                    <Route path='/dishes/:dishId' component={DishWithId} />
                    <Route path='/veg' component={() => <Veg vegs={this.props.vegs} /> } />
                    <Route path='/nonveg' component={() => <Nonveg nonvegs={this.props.nonvegs} /> } />
                    <Route path='/dessert' component={() => <Dessert desserts={this.props.desserts} /> } />
                    <Route path='/drink' component={() => <Drink drinks={this.props.drinks} /> } />
                    <Route path='/addrecipe' component={() => <AddRecipe postImage={this.props.postImage} resetInitialAddRecipeForm ={this.props.resetInitialAddRecipe} /> } />
                    
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>

        )
    }
}


export default withRouter((connect(mapStoreToProps,mapDispatchToProps)(Main)));