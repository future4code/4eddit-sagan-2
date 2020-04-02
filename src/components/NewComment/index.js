import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { newComment } from "../../actions/Actions"
import {TextFieldStyled, StyledPaper, WrapperDiv} from './styled'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



const formData = [
    {
        name: 'text',
        label: 'Novo comentário',
        type: 'text',
        multiline: true,
        rows: 3,
        title: 'Escreva um novo comentário'
    }
]

class NewComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
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

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.newComment(this.props.id, this.state.form);
        console.log("teste ")
    }

    render() {
        return (
            <StyledPaper>
                <FormControl fullWidth>
                <form onSubmit={this.handleOnSubmit}>
                    {formData.map(field => {
                        return (
                                <TextFieldStyled variant="outlined"
                                    key={this.props.id}
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    value={this.state.form[field.name]}
                                    required={field.required}
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    fullWidth
                                    onChange={this.handleInputChange}
                                    title={field.title}
                                />
                        )
                    })}
                    <Button type="submit" variant="contained" color="primary">
                    Comentar
                    </Button>
                    </form>
                </FormControl>
            </StyledPaper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.posts.user
})

const mapDispatchToProps = (dispatch) => ({
    goToFeed: () => dispatch(push(routes.root)),
    newComment: (id, form) => dispatch(newComment(id, form))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
