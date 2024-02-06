import './Form.css';

function FormBody() {

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log(data.get('name'));
      console.log(data.get('email'));
  }

  return (
  <form className="form-body" onSubmit={formHandler}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name"></input>
    <label htmlFor="email">Email</label>
    <input type="text" name="email"></input>
    <button type="submit" >Submit</button>
  </form>
  );
}

export default FormBody;