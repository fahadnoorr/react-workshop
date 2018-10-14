import React from "react";

const FormLayout = props => {
  return (
      <div className="card">
          <h5 className="card-header">{props.title}</h5>
          <div className="card-body">
              <form>
                  {props.children}
              </form>
          </div>
      </div>
  );
};

const FormInput = props => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            {props.children}
        </div>
    );
};

const TextInput = props => {
    return (
        <FormInput title={props.title}>
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} className="form-control"/>
        </FormInput>
    );
};

const RadioInput = props => {
    return (
        <FormInput title={props.title}>
            {props.options.map(opt => {
                return (
                    <div className="form-check" key={opt.id}>
                        <input className="form-check-input" type="radio" name={props.name} value={opt.id} onChange={props.onChange} />
                        <label className="form-check-label">{opt.text}</label>
                    </div>
                );
            })}
        </FormInput>
    );
};

const CheckboxInput = props => {
    return (
        <FormInput title={props.title}>
            {props.options.map(opt => {
                return (
                    <div className="form-check" key={opt.id}>
                        <input className="form-check-input" type="checkbox"
                               name={props.name} value={opt.id} checked={props.value.includes(opt.id)} onChange={props.onChange} />
                        <label className="form-check-label">{opt.text}</label>
                    </div>
                );
            })}
        </FormInput>
    );
};

const SelectInput = props => {
    return (
        <FormInput title={props.title}>
            <select name={props.name} value={props.value} onChange={props.onChange} className="form-control">
                {props.options.map(opt => <option key={opt.id} value={opt.id}>{opt.text}</option>)}
            </select>
        </FormInput>
    );
};

export default FormLayout;
export {
    TextInput,
    RadioInput,
    CheckboxInput,
    SelectInput
};