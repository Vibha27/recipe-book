import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,Media, Breadcrumb,BreadcrumbItem, Button,Label,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Control, LocalForm } from 'react-redux-form';


// Render Dish
    function RenderDish({dish}) {

        // For rendering ingredients in li
        const ingredients = dish.ingredients.map(ingredient => {
            return (
                <ul>
                    <li>{ingredient}</li>
                </ul>
            );
        
        })

        const directions = () => {
            return(

                <ol>
                    {dish.directions.map(direction => {
                        return (
                            <li>{direction} <br /> </li>
                        );
                    })}
                </ol>
            );
        }

        if(dish != null) {
            return (
                    <Card>
                        <CardImg  width="100%" height="500px" src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardText><b>Category:</b> {dish.category}</CardText>
                            <CardText><b>Recipe name:</b> {dish.name}</CardText>
                            <CardText><b>Author name:</b> {dish.author}</CardText>
                            <CardText><b>Prep Time:</b> {dish.preptime}  <b>Cook Time:</b> {dish.cooktime}  <b>Total time:</b> {dish.totaltime}</CardText>
                            <CardText><b>Description:</b>{dish.description}</CardText>
                            <CardText><b>Ingredients:</b> <br /><br /> 
                                {ingredients}
                            </CardText>
                            <CardText><b>Directions</b> : <br /><br /> 
                                {directions()}
                            </CardText>

                        </CardBody>
                    </Card>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

// Render Comments
function RenderComments({comments, postComment, dishId}) {
        
    return (
        <div>
            <h4>Comments</h4>

                {comments.map((comment)=>{

                    return (
                        <div>
                            <hr />

                            <Media tag="li" key={comment.id} >
                                
                                <Media left middle className="rounded-circle bg-primary text-white p-3 font-weight-bolder">
                                    {comment.name.substring(0,1)}
                                </Media>
                                
                                <Media body className="ml-5">
                                    <Media body>{comment.comment}</Media>
                                    <p><small>{new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</small></p>
                                </Media>
                            </Media>
                        </div>
                    );
                    
                })
            }
            {/* CommentForm Component */}
            <CommentForm dishId={dishId} postComment={postComment} />
            
        </div>
    );
        
}

class CommentForm extends Component {

    handleSubmit(values) {
        this.props.postComment(this.props.dishId,values.name,values.comment)
        alert("Current state is: "+ JSON.stringify(values));
 
    }

    RenderModal(){
        return (
            <LocalForm onSubmit={(values)=> this.handleSubmit(values)} >

                <Row className="form-group">
                    <Label htmlfor="name" xs={12}>Your Name</Label>
                                
                        <Col xs={12}>
                            <Control.text model=".name"
                            className="form-control" 
                            name="name"
                            />
                        </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlfor="comment" xs={12}>Comment</Label>
                        <Col xs={12}>
                            <Control.textarea model=".comment" 
                            className="form-control" name="comment" row="6"/>
                            </Col>
                </Row>
                <Row className="form-group">
                    <Col xs={12}>
                        <Button type="submit" value="Submit"  color="primary" >Post</Button>
                    </Col>
                </Row>
            </LocalForm>
          
        )
    }

    render() {
        return (
            <div className="container">    
                {this.RenderModal()}       
            </div>

        );
    }

} 

const DishDetail = (props) => {

    if(props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-10 m-1">
                        <Media list>
                            <RenderComments dishId={props.dish.id}
                            comments={props.comments}
                            postComment = {props.postComment}/>
                            
                        </Media>
                    </div>
                </div>
                </div>
            );
        }else{
            return <div></div>
        }
            

}
 

export default DishDetail;