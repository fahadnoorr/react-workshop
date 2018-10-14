import React from 'react'
import Countries from '../../../../util/countries'
import FormLayout, {TextInput, RadioInput, CheckboxInput, SelectInput} from './FormLayout'


const GENDERS = [
    {id: 'm', text: 'Male'},
    {id: 'f', text: 'Female'},
];

const DEGREES = [
    {id: 'grad', text: 'Graduation'},
    {id: 'post_grad', text: 'Post Graduation'},
];

export default class UserSignup extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            gender: '',
            degrees: [],
            country: ''
        };
    }

    componentWillMount(){
        this.countries = Countries.map(country => ({id: country.value, text: country.label}));
        this.setState({
            country: this.countries[0]['id']
        });
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    checkboxHandler = event => {
        const target = event.target;
        let prop = this.state[target.name].slice();
        if (target.checked){
            prop.push(target.value)
        } else {
            prop = prop.filter(e => e !== target.value);
        }
        this.setState({
            [target.name]: prop
        });
    };

    signupHandler = event => {
        let error = false;
        for (let prop in this.state){
            if (this.state[prop].length === 0){
                error = true;
                console.log(`Please provide a value for ${prop}`);
            }
        }
        if (!error){
            console.log(this.state);
        }
    };

    render(){

        let {name, gender, degrees, country} = this.state;

        return (
            <FormLayout title='User SignUp Form'>
                <TextInput title='Name' name='name' value={name} onChange={this.changeHandler} />
                <RadioInput title='Gender' name='gender' value={gender} options={GENDERS} onChange={this.changeHandler} />
                <CheckboxInput title='Education' name='degrees' value={degrees} options={DEGREES} onChange={this.checkboxHandler} />
                <SelectInput title='Country' name='country' value={country} options={this.countries} onChange={this.changeHandler} />
                <button type="button" className="btn btn-primary" onClick={this.signupHandler}>Sign Up</button>
            </FormLayout>
        );
    }
}