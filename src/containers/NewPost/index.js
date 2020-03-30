import React, {Component} from "react";
import {fieldsToForm} from './fieldsToForm'
import {TextFieldStyled} from './styled'
import {connect} from "react-redux";
import {newPost} from "../../actions/Actions";

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        };
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };
    
    handleSubmission = event => {
        event.preventDefault();
        this.props.newPost(this.state.form)


    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmission}>
                    {fieldsToForm.map(field => {
                        return (
                            <div key={field.name}>
                                <TextFieldStyled id={field.name}
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    onChange={this.handleInputChange}
                                    pattern={field.pattern}
                                    inputProps={{ pattern: field.pattern, min: field.min, title: field.title}}
                                    min={field.min}
                                    required={field.required}
                                    title={field.title}
                                    value={this.state.form[field.name]}
                                    margin={'dense'}
                                    fullWidth
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    />
                            </div>
                        );
                    })
                }
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    newPost: (form) => dispatch(newPost(form)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
