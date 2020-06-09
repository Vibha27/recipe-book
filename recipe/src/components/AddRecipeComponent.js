import React,{ Component } from 'react';
import { Button, Label,Row,Col,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import { Form, Control } from 'react-redux-form';

class AddRecipe extends Component {

    constructor(props){
        super(props);
        this.state = {
            image : null
        }
    }

handleSubmit(values){
    let ingredients = values.ingredients.split('\n')
    let directions = values.directions.split('\n')
    console.log(ingredients,directions)
    this.props.postImage(values.name,values.author,this.state.image,values.category,values.description,
        values.preptime,values.cooktime,values.totaltime,ingredients,directions)
    this.props.resetInitialAddRecipeForm();
}

handleImageChange = (event) => {
    let reader = new FileReader();
    let img = event.target.files[0];
    // let base64 = 
    reader.onloadend = () => {
        this.setState({ image :  reader.result})
    }
    reader.readAsDataURL(img)
}

    render(){
        
        return(
            <div style={{ backgroundColor : '#E2D6DB '}}>
                <div className="container">
                
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            
                            <BreadcrumbItem active>Add Recipe</BreadcrumbItem>
                            
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Add Your Recipe</h3>
                            <hr />
                        </div>
                    </div>

                    {/* Form controlled */}
                    <div className="row row-content">

                        <div className="col-12 col-md-9">
                            <Form model="addrecipe"
                            onSubmit={(values) => this.handleSubmit(values)}
                            >
                                <Row className="form-group">
                                    <Label htmlfor="name" md={2}>Recipe Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".name" id="name"  name="name" 
                                        placeholder="Recipe name" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlfor="author" md={2}>Author Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".author" id="author"  name="author" 
                                        placeholder="Your name" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>

                                
                                <Row className="form-group">
                                    <Label htmlfor="image" md={2}>Dish Image</Label>
                                    <Col md={10}>
                                        <Control.file model=".image" id="image" name="image"
                                        className="form-control" onChange={this.handleImageChange}
                                    /> 
                                    
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="category" md={2}>Category</Label>
                                    <Col md={10}>
                                        <Control.text model=".category" id="category"  name="category" 
                                        placeholder="eg : snacks" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="description" md={2}>Recipe Description</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".description" id="description"  name="description" 
                                        placeholder="About your recipe" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlfor="preptime" md={2}>Preparation Time</Label>
                                    <Col md={10}>
                                        <Control.text model=".preptime" id="preptime"  name="preptime" 
                                        placeholder="eg: 10mins" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>
                                
                                <Row className="form-group">
                                    <Label htmlfor="cooktime" md={2}>Cook Time</Label>
                                    <Col md={10}>
                                        <Control.text model=".cooktime" id="cooktime"  name="cooktime" 
                                        placeholder="eg: 10mins" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlfor="totaltime" md={2}>Total Time</Label>
                                    <Col md={10}>
                                        <Control.text model=".totaltime" id="totaltime"  name="totaltime" 
                                        placeholder="eg: 10mins" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlfor="ingredients" md={2}>Ingredients</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".ingredients" id="ingredients"  name="ingredients" 
                                        placeholder="Ingredients. press enter after typing each ingredients" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlfor="directions" md={2}>Direction</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".directions" id="directions"  name="directions" 
                                        placeholder="press enter after every steps" 
                                        className="form-control"
                                    
                                        /> 
                                    
                                    </Col>
                                </Row>
                                
                                
                                <Row className="form-group">

                                    <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary" >Add Recipe</Button>
                                    </Col>
                                </Row>
                            </Form>

                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default AddRecipe;