import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { newComment } from "../../actions/Actions"


const formData = [
    {
        name: 'text',
        label: 'Novo comentário',
        type: 'text',
        multiline: true,
        rows: 10,
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


    componentDidUpdate() {
        const token = localStorage.getItem("token")
        if (token !== null) {
            this.props.goToFeed();
        }
    }


    handleOnSubmit = event => {
        event.preventDefault();
        this.props.newComment(this.props.id, this.state.form);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    {formData.map(field => {
                        return (
                            <div>
                                <label>{field.label}</label>
                                <input
                                    name={field.name}
                                    type={field.type}
                                    value={this.state.form[field.name]}
                                    required={field.required}
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    onChange={this.handleInputChange}
                                    title={field.title}
                                />
                            </div>
                        )
                    })}
                    <button type="submit">Enviar</button>
                </form>
            </div>
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
